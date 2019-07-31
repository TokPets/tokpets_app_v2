<template>
  <div class="view page login signin">
   
    <div class="main-logo">
      <img src="./../../../shared/assets/images/tok_negro.png">
    </div>

    <text-component
      @onType="doSetInputEmail()"
      :placeholder="'Email'"
      :icon="'./../..'"
      :theme="'dark'"
      :layout="'absolute'"
      :position="'top'">
    </text-component>

     <button-component 
        @onClick="doLogin()"
        :text="'Log in'"
        :theme="'dark'"
        :layout="'absolute'"
        :position="'bottom'">
      </button-component> 
      
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
    'text-component' :  TextInputComponent
  },
})
export default class IndexView extends Vue {

  private db = (this as any).$db;

  private mounted() {
 
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
 
}
</script>

<style lang="less">
@import (reference) './../../../../src/shared/styles/main.less';
div.view.page.login.signin{
  
  #view(column,center,center);

  background-color: #d9d4d0;
  color: white;

  position: relative;

  div.main-logo{
    display:block;
    width: 35%;
    padding: 25% 0%;
    margin: 0 auto;
    img{
      display: block;
      width: 100%;
    }
  }

}

</style>
