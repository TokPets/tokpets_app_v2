<template> 
  <div class="input list default" :style="{ 'padding' : paddings }"  >

    <div class="input-row" v-if="!SHOW" @click="SHOW = true">
        <input type="text" v-model="item">
        <img class="icon" src="./icons/arrow-right.png" alt="">
    </div>

    <div class="input-modal" v-if="SHOW" >
        <div class="modal">

            <header-component 
                    @back="SHOW = false"
                    @home="SHOW = false"
                    :navigation = "false"
                    :theme="'dark'"> 
            </header-component>

           <h1 v-html="title"></h1>

           <img :src="logo" style="width:150px">

            <div class="search-box">
                <input type="text" v-model="SEARCH">
            </div>

            <ul class="search-list">
                <li class="search-item" v-for="_item of itemsFiltered" :key="_item" @click="setItem(_item)">
                    <div class="text">{{ _item }}</div>
                    <div class="checkbox">
                        <img v-if="item === _item" alt="Checked Item" class="" src="./icons/check_negro.png">        
                    </div>
                </li>
            </ul>

        </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HeaderSignUpComponent from '../headers/header.signup.component.vue';


@Component({
    components: {
        'header-component' : HeaderSignUpComponent
    }
})
export default class ChooseInputComponent extends Vue {

    @Prop({default: ''}) public items: string[]|undefined;
    @Prop({default: ''}) public item: string|undefined;

    @Prop({default: ''}) public title: string|undefined;
    @Prop({default: ''}) public logo: string|undefined;

    @Prop({default: ''}) public error: string|undefined;
    @Prop({default: ''}) public theme: string|undefined;
    @Prop({default: ''}) public paddings: string|undefined;

    private db: any = (this as any).$db;
    private date: string = '';

    private SHOW:boolean = false;
    private SEARCH:string = '';

    private get itemsFiltered(): string[]{
        return this.items ? 
               this.items.filter((_item:string) => (_item.toUpperCase()).includes(this.SEARCH.toUpperCase())) : ['NO MATCH']
    }

    private mounted() {

    }
   
    private onDatePickUp($selected: string): void {
        this.$emit('onDatePickUp', $selected);
    }

    private setItem($item: string): void{
        this.$emit('onItemSelected', $item)
    }

   


}
</script>

<style scoped lang="less">
@import (reference) './../../styles/main.less';
div.input.list.default{


    display: block;
    width: 100%;
    padding: 0em 0em;
    border-bottom: 1px solid black;

    .input-row{
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;

        .icon{
            width: 0.5em;
        }
    }


     input[type="date"]{
        display: block;
        width: 100%;
        padding: 1em 0.5em;

        background: none;
        border: 0px solid white;;
        outline:none;

        display: block;
        width: 100%;
        box-sizing: border-box;
        
    
        color: gray;
        background-color: rgba(0,0,0,0);

        border:0px solid rgba(0,0,0,0);
        border-bottom:0x solid #424242;

        -webkit-appearance:none;
        outline:none;
     }

     input[type="text"]{
        display: block;
        width: 100%;
        padding: 1em 0.5em;

        background: none;
        border: 0px solid white;;
        outline:none;

        display: block;
        width: 100%;
        box-sizing: border-box;
     }


     div.modal{
         position: fixed;
         top: 0px;
         left: 0px;
         z-index: 1000000000000000000000000000000000;
         width: 100vw;
         height: 100vh;
         overflow-y: scroll;
         background-color:@color-cream;

         h1{
             font-size: 30px;
             font-weight: 300;
             padding:2em 0em;
             padding-bottom: 0.1em;
             
             strong{
                 font-weight: 900;
                 padding-left: 0px;
                 padding-right: 1em;
             }
         }

         .search-box{
             display: block;
             width: 100%;
             padding: 1em;
             box-sizing: border-box;
             input{
                 background-color: white;
                 border-radius: 0.5em;
                 color: black;
             }
         }


         .search-list{
                padding: 0px;
                margin: 0px;
               list-style:none;

               display: block;
               box-sizing: border-box;

               width: 100%;
               min-height: 100%;
               background: white;

               padding: 1em;

               padding-top: 0em;
               padding-bottom: 6em;

            
         }

         .search-item{
             display: block;
             width: 100%;
             box-sizing: border-box;
             padding:1em;
             padding-left: 0px;
             text-align: left;
             border-bottom: 1px solid gray;

            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-flex-wrap: nowrap;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-align-content: center;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;

             .checkbox{
                 display: block;
                 width: 0.75em;
                 height: 0.75em;
                 border: 1px solid black;
                 border-radius: 100%;
                 img{
                    display: block;
                    width: 2em;
                    height: 2em; 
                    position: relative;
                    top: -0.65em;
                    left: -0.45em;
                 }
             
             }
         }
     }


}



</style>
