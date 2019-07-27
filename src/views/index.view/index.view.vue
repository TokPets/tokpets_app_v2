<template>
  <div class="view page index">
    <img class="main-logo" src="./../../shared/assets/images/tok_blanco.png" alt="TokPets Logo Blanco">
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({})
export default class IndexView extends Vue {

  private CurrentNavigator: string = '';

  private goToLoginSignIn() {
    this.$router.push('/login/signin');
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
@import './../../../src/shared/styles/main.less';
div.view.page.index{
  
  display: block;
  
  width: 100vw;
  height: 100vh;

  background-color : @color-black;

  .main-logo{
    display:block;
    width: 50%;
    margin: 0 auto;
  }
}
</style>
