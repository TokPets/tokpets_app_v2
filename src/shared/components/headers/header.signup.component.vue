<template>
    <header>
        <button class="back-btn" @click="goBack()">
            <img alt="TokPets | Go Back Button" class="" src="@/shared/assets/images/signup-tutorial/header_back.png"> 
        </button>
        <button class="home-btn" @click="goHome()">
            <img v-if="theme === 'light'" alt="TokPets | Go Home Button" class="" src="@/shared/assets/images/signup-tutorial/header_home.png"> 
            <img v-if="theme === 'dark'" alt="TokPets | Go Home Button" class="" src="@/shared/assets/images/signup-tutorial/header_home_black.png"> 
        </button>    
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class HeaderSignUpComponent extends Vue {
     @Prop({default: 'light'}) public theme: string|undefined;
     @Prop({default: true}) public navigation: boolean|undefined;
     
     goBack(){
         if(this.navigation){
            this.$router.go(-1)
         }else{
             this.$emit('back');
         }
     }

     goHome(){
         if(this.navigation){
            this.$router.push(`/`);
         }else{
             this.$emit('home');
         }
     }
}
</script>

<style scoped lang="less">
@import (reference) '../../../shared/styles/main.less';
    header{

        display:block;
        box-sizing: border-box;
        width: 100%;

        position: absolute;
        padding: 1em;
        top: 0px;

        z-index: 100;

        .flex-display(flex);
        .flex-direction(row);
        .align-items(center);
        .justify-content(space-between);

        button{
            display: block;
            background: none;
            border: none;
            outline: none;

            cursor: pointer;
        }

        button img{
            display: block;
            width: 100%;
            cursor: pointer;
        }

        button.back-btn{
            width: 5em;
        }
        button.home-btn{
            width: 5em;
        }

    }
</style>