<template>
  <div class="view page login signin" :class="viewClass()">
   
    <div class="layout-top">
      <img class="logo" src="./../../../shared/assets/images/tok_negro.png">
    </div>

    <div class="layout-bottom">

        <form class="text-components" autocomplete="on">
          
                <email-text-component
                  @onType="doSetInputEmail($event)"
                  :error="ERRORS.email"
                  :placeholder="'Email'"
                  :icon="'error'"
                  :theme="'dark'"
                  :paddings="'0em 1em'"
                  :position="'top'">
                </email-text-component>

                <password-text-component
                  @onType="doSetInputPassword($event)"
                  :error="ERRORS.password"
                  :callback="doOpenModal"
                  :placeholder="'Password'"
                  :icon="'ojo'"
                  :theme="'dark'"
                  :paddings="'0em 1em'"
                  :position="'bottom'">
                </password-text-component>
        </form>

        <button-component 
            @onClick="doLogin()"
            :text="'Log in'"
            :theme="'dark'">
        </button-component> 
        
    </div>

   <recovery-modal-component v-if="isModalOpen" @close="isModalOpen = false"></recovery-modal-component>
      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ButtonComponet from './../../../shared/components/buttons/default.button.component.vue';
import TextInputComponent from './../../../shared/components/inputs/default.text.input.component.vue';
import PasswordInputComponent from './../../../shared/components/inputs/default.password.input.component.vue';
import DefaultModalComponent from './../../../shared/components/modals/default.modal.component.vue';

import './../../../config/directives/_index';
import './../../../config/firebase/_index';
import './../../../config/vndrs/_index';
import './../../../config/srvcs/_index';

@Component({
    components: {
    'button-component' : ButtonComponet,
    'email-text-component' :  TextInputComponent,
    'password-text-component' :  PasswordInputComponent,
    'recovery-modal-component' :DefaultModalComponent
  },
})
export default class LoginSignInView extends Vue {

  private db: any = (this as any).$db;
  private LOGIN: any = {
    email : 'jl.mayorga236@gmail.com',
    password: 'asdfasdf',
  };

  private ERRORS: any = {
    email: 'N/A',
    password: 'N/A',
  };


  private isModalOpen: boolean = true;

  private mounted() {

  }

  private doSetInputEmail($email: string): void {
    this.LOGIN.email = $email;
  }
  private doSetInputPassword($password: string): void {
    this.LOGIN.password = $password;
  }
  private doOpenModal(){
    this.isModalOpen = true;
    console.log('this.isModalOpen = true;')
  }

  private doLogin(): Promise<any> {
    return new Promise( (resolve, reject) => {
      const email = this.LOGIN.email;
      const password = this.LOGIN.password;
      console.warn({
        email : email,
        password : password
      })
      this.db.users.signinByEmailAndPassword(email, password)
      .then((user: any) => {
         this.ERRORS.email = 'N/A';
         this.ERRORS.password = 'N/A';
      })
      .catch((error: any) => {
        
        if (error.type == 'ERROR_EMAIL') {
          
          this.ERRORS.email = error.message;
          this.ERRORS.password = 'N/A';

          setTimeout( () => {
            this.ERRORS.email = 'N/A';
            this.ERRORS.password = 'N/A';
          }, 5000)

        }

        if (error.type == 'ERROR_PASSWORD') {
          this.ERRORS.email = 'N/A';
          this.ERRORS.password = error.message;
        }

       
      });
    });
  }

  private viewClass(): string {
    return this.$store.getters.isKeyboardOpen ? 'keyboard-on' : 'keyboard-off';
  }

}
</script>

<style lang="less">
  @import './login.sigin.view.less';
</style>
