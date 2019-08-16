<template>
  <div class="view page login signin" :class="viewClass()">
   
    <div class="layout-top">
      <img class="logo" src="./../../../shared/assets/images/tok_negro.png">
    </div>

    <div class="layout-bottom">

        <div class="text-components">
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
                  :placeholder="'Password'"
                  :icon="'ojo'"
                  :theme="'dark'"
                  :paddings="'0em 1em'"
                  :position="'bottom'">
                </password-text-component>
        </div>

        <button-component 
            @onClick="doLogin()"
            :text="'Log in'"
            :theme="'dark'">
        </button-component> 
        
    </div>
      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ButtonComponet from './../../../shared/components/buttons/default.button.component.vue';
import TextInputComponent from './../../../shared/components/inputs/default.text.input.component.vue';
import PasswordInputComponent from './../../../shared/components/inputs/default.password.input.component.vue';

import './../../../config/directives/_index';
import './../../../config/firebase/_index';
import './../../../config/vndrs/_index';
import './../../../config/srvcs/_index';

@Component({
    components: {
    'button-component' : ButtonComponet,
    'email-text-component' :  TextInputComponent,
    'password-text-component' :  PasswordInputComponent,
  },
})
export default class LoginSignInView extends Vue {

  private db = (this as any).$db;
  private LOGIN = {
    email : '',
    password: '',
  };

  private ERRORS = {
    email: false,
    password: false
  }

  private mounted() {
      
  }

  private doSetInputEmail($email: string):void{
    this.LOGIN.email = $email;
  }
    private doSetInputPassword($password: string):void{
    this.LOGIN.password = $password;
  }


  private doLogin(): Promise<any>{
    return new Promise( (resolve,reject) => {
      const email = '';
      const password = '';
      this.db.users.signinByEmailAndPassword(email, password)
      .then((user:any) => {
        console.warn(user);
         this.ERRORS.email = false;
         this.ERRORS.password = false;
      })
      .catch((error : any) => {
        console.warn(error);
        this.ERRORS.email = true;
        this.ERRORS.password = true;
      });
    });
  }

  private viewClass(): string{
    return this.$store.getters.isKeyboardOpen ? 'keyboard-on' : 'keyboard-off';
  }
 
}
</script>

<style lang="less">
  @import './login.sigin.view.less';
</style>
