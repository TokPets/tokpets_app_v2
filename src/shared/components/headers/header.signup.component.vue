<template>
    <header>
        <button class="back-btn" @click="goBack()">
            <img alt="TokPets | Go Back Button" class="" src="@/shared/assets/images/signup-tutorial/header_back.png"> 
        </button>
        <button class="home-btn" @click="goHome()">
            <img alt="TokPets | Go Home Button" class="" src="@/shared/assets/images/signup-tutorial/header_home.png"> 
        </button>    
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class HeaderSignUpComponent extends Vue {
     @Prop({default: 'light'}) public theme: string|undefined;
     
     goBack(){
        this.$router.go(-1)
     }

     goHome(){
         this.$router.push(`/`);
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