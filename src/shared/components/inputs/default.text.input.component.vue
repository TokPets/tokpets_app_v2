<template>
  <div class="input text default" :style="{ 'padding' : paddings }">

        <div class="input-error" v-visible="error !== 'N/A'" v-if="position === 'top'">{{error}}</div>
        <div class="input-wrapper" :class="getInputWrapperClass()">
        
            <input type="text" v-model="text" placeholder="" @keyup="onType()" @focus="onFocus()" @blur="onBlur()">
         
            <div class="icon">
                <img  v-if="error !== 'N/A'" :src="require('./icons/' + icon + '_rojo.png')">
            </div>
           
        </div>
        <div class="input-error" v-visible="error === 'N/A'" v-if="position === 'bottom'">{{error }}</div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class TextInputComponent extends Vue {

    @Prop({default: ''}) public placeholder: string|undefined;
    @Prop({default: ''}) public icon: string|undefined;
    @Prop({default: 'light'}) public theme: string|undefined;
    @Prop({default: 'fixed'}) public layout: string|undefined;
    @Prop({default: '0em 0em'}) public paddings: string|undefined;
    @Prop({default: 'bottom'}) public position: string|undefined;
    @Prop({default: ''}) private error: string|undefined;


    private db: any = (this as any).$db;
    private text: string = '';

    private mounted() {
        this.text = this.placeholder + '';
    }
    private inputClass(): string {
        return `${this.theme} ${this.layout} ${this.position}`;
    }

    private onType(): void {
        this.$emit('onType',this.text);
    };

    private onFocus(): void{
           this.$store.dispatch('setKeyboardIsOpen',true);
    };

    private onBlur(): void{
           this.$store.dispatch('setKeyboardIsOpen',false);
    }

    
  private getInputWrapperClass():string{
    return this.error !== 'N/A' ? 'error' : 'default';
  }
 
}
</script>

<style scoped lang="less">
@import (reference) './../../styles/main.less';
div.input{

    display: block;
    box-sizing: border-box;
    width: 100%;

    &-wrapper{
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0.25em;
    
        color: black;

        border:1px solid rgba(0,0,0,0);
        border-bottom:1px solid #424242;
        //background-color: white;

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


        input{
            display: block;
            box-sizing: border-box;
            width: 100%;
        }

      
        .icon{
            width: 2em;
            height: 2em;
            img{
                width: 2em;
            }
        }
        

        &.default{
            //border: 1px solid #424242;
        }
        &.error{
            border: 1px solid @color-red;
        }
    }
    &-error{
        color: @color-red ;
        text-align: left;
        padding: 0.5em 0em;
        letter-spacing: 1px;
    }
}
div.light{
    color: gray;
    background-color: white;
}
div.dark{
    color: #afafaf;
    background-color: #424242;
}
div.fixed{
    position: fixed;
}
div.absolute{
    position: absolute;
}
div.bottom{
    bottom: 0px;
}
div.top{
    top: 0px;
}
</style>
