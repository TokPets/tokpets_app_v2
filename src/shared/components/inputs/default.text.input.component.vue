<template>
  <div class="input text default" :style="{ 'padding' : paddings }">

        <div class="input-error" v-show="position === 'top' && error">Unregistered e-mail</div>
        <div class="input-wrapper" :class="(error ? 'error' : 'default')">
            <input type="text" v-model="text" placeholder="" @keyup="onType()" >
            
            <img class="icon" v-if="error" :src="require('./icons/' + icon + '_rojo.png')">
            <img class="icon" v-if="!error" :src="require('./icons/' + icon + '_blanco.png')">
        
        </div>
        <div class="input-error" v-if="position === 'bottom' && error">Unregistered e-mail</div>

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

    private db: any = (this as any).$db;
    private error: boolean = true;
    private text: string = '';

    private mounted() {}
    private inputClass(): string {
        return `${this.theme} ${this.layout} ${this.position}`;
    }
    private onType(): void {
        this.$emit('onType',this.text);
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
        background-color: white;
        color: black;
        border:1px solid white;

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

        img.icon{
            width: 2em;
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
