<template>
  <div class="input choose default" :style="{ 'padding' : paddings } " @click="open()">

  <input v-if="!SHOW" type="text" placeholder="Gender" disabled  >
  <select v-if="SHOW" @change="onChoose($event)" ref="dropdown">
    <option :value="option" v-for="option in options" :key="option">{{option}}</option>
  </select>
        
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({})
export default class ChooseInputComponent extends Vue {

    @Prop({default: ''}) public selected: string|undefined;
    @Prop({default: ''}) public options: string[]|undefined;
    @Prop({default: ''}) public error: string|undefined;
    @Prop({default: ''}) public theme: string|undefined;
    @Prop({default: ''}) public paddings: string|undefined;

    private db: any = (this as any).$db;
        private SHOW:boolean = false;

    private text: string = '';
    private DATA:  string[] = ['','','','','','',''];
    private inTheme: string = 'none';

    private mounted() {

    }
   
    private onChoose($selected: string): void {
        this.$emit('onChoose', $selected);
    }


    public open(): void{

        this.SHOW = true;
        setTimeout(() => {
            //this.$refs.dropdown.select();
            (this.$refs.dropdown as any).selected = true;
            console.log(this.$refs.dropdown)
        }, 500);
        
            
    }

   

    

}
</script>

<style scoped lang="less">
@import (reference) './../../styles/main.less';
div.input.choose.default{
    display: block;
    width: 100%;
    padding: 0em 0em;

    border-bottom: 1px solid black;

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

        font-size: 13.333px;
     
    }
    select{
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

         font-size: 13.333px;

        &:after {
        position: absolute;
        content: "";
        top: 0px;
        right: 0px;
        width: 0;
        height: 0;
        border: 0px solid transparent;
        border-color: #fff transparent transparent transparent;
        }

           &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color: #9b9797;
                    opacity: 1; /* Firefox */
                    }

                    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                    color: #9b9797;
                    }

                    &::-ms-input-placeholder { /* Microsoft Edge */
                    color: #9b9797;
                    }
    }

}



</style>
