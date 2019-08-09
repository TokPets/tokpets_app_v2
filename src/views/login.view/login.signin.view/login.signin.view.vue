<template>
  <div class="view page login signin" :class="viewClass()">
   
    <div class="layout-top">
      <img class="logo" src="./../../../shared/assets/images/tok_negro.png">
    </div>

    <div class="layout-bottom">

        <div class="text-components">
                <email-text-component
                  @onType="doSetInputEmail($event)"
                  :placeholder="'Email'"
                  :icon="'error'"
                  :theme="'dark'"
                  :paddings="'0em 1em'"
                  :position="'top'">
                </email-text-component>

                <password-text-component
                  @onType="doSetInputEmail($event)"
                  :placeholder="'Email'"
                  :icon="'error'"
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

import './../../../config/firebase/_index';
import './../../../config/vndrs/_index';
import './../../../config/srvcs/_index';
@Component({
    components: {
    'button-component' : ButtonComponet,
    'email-text-component' :  TextInputComponent,
    'password-text-component' :  TextInputComponent,
  },
})
export default class IndexView extends Vue {

  private db = (this as any).$db;
  private LOGIN = {
    email : '',
    password: ''
  };

  private mounted() {
      
  }

  private doSetInputEmail($email: string):void{
    this.LOGIN.email = $email;
  }

  private doLogin(): Promise<any>{
    return new Promise( (resolve,reject) => {
      const email = '';
      const password = '';
      this.db.users.signinByEmailAndPassword(email, password)
      .then((user:any) => {
        console.warn(user);
      })
      .catch((error : any) => {
        console.warn(error);
      });
    });
  }

  private viewClass(): string{
    return this.$store.getters.isKeyboardOpen ? 'keyboard-on' : 'keyboard-off';
  }
 
}
</script>

<style lang="less">
@import (reference) './../../../../src/shared/styles/main.less';

@layout-top-height: calc(2 * var(--view-height) / 3);
@layout-bottom-height: calc( 1 * var(--view-height) / 3);

div.view.page.login.signin{
  
  #view(column,center,space-between);

  background-color: #d9d4d0;
  color: white;

  position: relative;


  div.text-components{
    display: block;
    width: 100%;
  }

  div.layout-top{
    display: block;
    width: 100%;
    height: @layout-top-height;

    .flex-display(flex);
    .flex-direction(column);
    .align-items(center);
    .justify-content(flex-end);

  }

  div.layout-bottom{
    display: block;
    width: 100%;
    height: @layout-bottom-height;

    .flex-display(flex);
    .flex-direction(column);
    .align-items(center);
    .justify-content(space-between);

  }

  img.logo{
      height: auto;
      display: block;
      width: 30%;
      box-sizing: border-box;
      padding-bottom: 0em;
      margin-bottom: 2em;
  }

}

</style>
