<template>
  <div class="view page index">


      <logo-component 
        :color="'dark'" 
        :showButton="!isLoading">
      </logo-component>

      <progress-bar-component
        v-if="isLoading" 
        @onLoad="onProgressBarLoad()">
      </progress-bar-component>

      <button-component 
        v-if="!isLoading"
        :text="'Log in'"
        :theme="'light'"
        :layout="'fixed'"
        :position="'bottom'">
      </button-component> 
    
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import LogoComponent from './components/index.logo.vue';
import ProgressBarComponent from './components/index.progress.bar.vue';

import ButtonComponet from './../../shared/components/buttons/default.button.component.vue';

@Component({
  components: {
    'logo-component' : LogoComponent,
    'button-component' : ButtonComponet,
    'progress-bar-component' : ProgressBarComponent,
  },
})
export default class IndexView extends Vue {

  private isLoading: boolean = true;

  private goToLoginSignIn() {
    this.$router.push('/login/signin');
  }

  private onProgressBarLoad() {
    this.isLoading = false;
  }

  private beforeMount() {
    console.log('.... loading ....');
  }

  private mounted() {
    console.log('Welcom TokPets Apps!');
  }

}
</script>



<style lang="less">
@import (reference) './../../../src/shared/styles/main.less';
div.view.page.index{
  
  #view(column,center,center);

  .main-logo{
    display:block;
    width: 75%;
    padding: 25% 0%;
    margin: 0 auto;
  }

}
</style>
