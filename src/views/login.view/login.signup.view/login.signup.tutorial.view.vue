<template>
    <div class="view signup tutorial" :class="viewClass()">

        <header-component
            :theme="'light'">
        </header-component>

        <swiper-component
            :slides="SLIDES">
        </swiper-component>

        <button-component 
            @onClick="doNext()"
            :text="'Start'"
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
import SwiperSignUpComponent from './../../../shared/components/swipers/swiper.signup.component.vue';

import './../../../config/vndrs/_index';
import './../../../config/srvcs/_index';

import ITutorialSlides from './../../../shared/components/swipers/ITutorialSlides.interface';

@Component({
    components: {
    'header-component' : HeaderSignUpComponent,
    'swiper-component' : SwiperSignUpComponent,
    'button-component' : ButtonSignUpComponent,
  },
})
export default class LoginSignInView extends Vue {

    private DB: any = (this as any).$db;
    private ERRORS: any = {};
    private SLIDES: ITutorialSlides[] = [{
        id: 0,
        title: 'Welcome,',
        text: 'asdfads',
        image: require('./../../../shared/assets/images/signup-tutorial/step_0_welcome.png')
    },{
        id: 1,
        title: 'What doest it do?',
        text: 'asdfa',
        image: require('./../../../shared/assets/images/signup-tutorial/step_1_what.png')
    },{
        id: 2,
        title: 'Also ...',
        text: 'asdf',
        image: require('./../../../shared/assets/images/signup-tutorial/step_2_also.png')
    }];

  private beforeMount(): void{

  }
  private mounted(): void {

  }
  private viewClass(): string {
    return this.$store.getters.isKeyboardOpen ? 'keyboard-on' : 'keyboard-off';
  }

  public doNext(): void{
      const currentStep: number = parseInt(this.$route.params.step + '');

      if(currentStep === 0){
          this.$router.push('/login/signup/intro/1');
      }

      if(currentStep > 0 && currentStep < 3){
          this.$router.push(`/login/signup/intro/${currentStep + 1}`);
      }

      if(currentStep === 3){
          this.$router.push('/login/signup/code');
      }

  }

}
</script>

<style lang="less">
 @import (reference) './../../../../src/shared/styles/main.less';

@layout-height: calc(1 * var(--view-height) / 1);


div.view.signup.tutorial{
  
    #view(column,center,center);

    display: block;
    position: relative;

    z-index: 0;

    width: 100%;
    height: @layout-height;

}
</style>
