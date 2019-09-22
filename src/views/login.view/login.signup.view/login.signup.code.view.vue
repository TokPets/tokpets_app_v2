<template>
    <div class="view signup code" :class="viewClass()">

        <header-component
            :theme="'dark'">
        </header-component>


        <img alt="TOKPETS HEAR LOGO ICON" class="tok-logo" src="./../../../shared/assets/images/signup-code/tok-icon.png">

        <h1 class="title">
            <strong>Create</strong> an account 
        </h1>
        <h2 class="subtitle">
            Please enter the Tok tracker code {{TEXT}}
        </h2>

        <code-component
            @onType="doSetInputCode($event)"
            :error="ERRORS.code"
            :placeholder="'Email'"
            :icon="'error'"
            :theme="'light'"
            :paddings="'0em 1em'"
            :position="'top'">
        </code-component>


        <button-component 
            @onClick="doNext()"
            :disable="BtnIsDisabled"
            :text="'Next'"
            :theme="'dark'"
            :z_index="100"
            :layout="'absolute'"
            :position="'bottom'">
        </button-component> 
        
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ButtonSignUpComponent from './../../../shared/components/buttons/default.button.component.vue';
import HeaderSignUpComponent from './../../../shared/components/headers/header.signup.component.vue';
import CodeSignUpComponent from './../../../shared/components/inputs/default.code.input.component.vue';

import './../../../config/directives/_index';
import './../../../config/vndrs/_index';
import './../../../config/srvcs/_index';

@Component({
    components: {
    'header-component' : HeaderSignUpComponent,
    'code-component' :  CodeSignUpComponent,
    'button-component' : ButtonSignUpComponent,
  },
})
export default class LoginSignCodeInView extends Vue {

    private DB: any = (this as any).$db;
    private TEXT = '';
    private ERRORS: any = {
        CODE: ''
    };

    public BtnIsDisabled: boolean = true;

  private mounted(){
         const currentCode: number = parseInt(this.$route.params.code + '');
         this.TEXT = (currentCode + '').padStart(6, '0');
         if(this.TEXT !== '000000'){
             this.BtnIsDisabled = false;
         }
  }

 
  private viewClass(): string {
    return this.$store.getters.isKeyboardOpen ? 'keyboard-on' : 'keyboard-off';
  }

  public doNext(): void{
    this.$router.push('/login/signup/user');
  }

  public doSetInputCode($code: string){

      this.TEXT = $code;
      const code = this.TEXT.padStart(6, '0');
      this.$router.push(`/login/signup/code/${code}`);
       if(this.TEXT !== '000000'){
             this.BtnIsDisabled = false;
         }
      
  }

}
</script>

<style lang="less">
 @import (reference) './../../../../src/shared/styles/main.less';

@layout-height: calc(1 * var(--view-height) / 1);


div.view.signup.code{
  
    #view(column,center,center);
    #view-theme-light();

    display: block;
    position: relative;

    z-index: 0;

    width: 100vw;
    height: @layout-height;

    overflow: scroll;

    .flex-display(flex);
    .flex-direction(column);
    .align-items(center);
    .justify-content(center);

    img.tok-logo{
        width: 150px;;
        display: block;
        margin: 0 auto;
        padding-bottom: 50px;
    }

    h1.title{
        font-weight: 300;
        padding-bottom: 0.25em;
        letter-spacing: 2px;
        strong{
            font-weight: 900;
        }
    }
    h2.subtitle{
        font-size: 12px;
         font-weight: 300;
        padding-bottom: 1em;
        letter-spacing: 2px;
    }



}
</style>
