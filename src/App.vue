<template>
  <div id="app">

   <router-view/>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SwiperSignUpComponent from './shared/components/swipers/swiper.signup.component.vue';

import './config/vndrs/_index';
import './config/srvcs/_index';
@Component({
  components: {
    'swiper-component' : SwiperSignUpComponent,
  }
})
export default class AppView extends Vue {

   private SLIDES: any[] = [{
        id: 0,
        title: 'Welcome,',
        text: 'asdfads',
        image: require('./shared/assets/images/signup-tutorial/step_0_welcome.png')
    },{
        id: 1,
        title: 'What doest it do?',
        text: 'asdfa',
        image: require('./shared/assets/images/signup-tutorial/step_1_what.png')
    },{
        id: 2,
        title: 'Also ...',
        text: 'asdf',
        image: require('./shared/assets/images/signup-tutorial/step_2_also.png')
    }];


  private mounted() {
    console.log(' @mount() Welcom TokPets Apps!');
    const appHeight: string = document.documentElement.clientHeight + 'px';
    document.documentElement.style.setProperty('--view-height', appHeight);
  }

}
</script>


<style lang="less">
@import '../src/shared/styles/main.less';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: block;


}
</style>
