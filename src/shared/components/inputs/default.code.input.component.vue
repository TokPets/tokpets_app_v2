<template>
  <div class="input text default" :style="{ 'padding' : paddings }">
        
        <div class="input-error" v-visible="error !== 'N/A'" v-if="(position === 'top') && (errorDisplay)">{{error}}</div>
        
        <div class="input-wrapper" :class="getInputWrapperClass()">
            
            <form class="input-code">
                <input class="inputs" v-model="DATA[0]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
                <input class="inputs" v-model="DATA[1]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
                <input class="inputs" v-model="DATA[2]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
                <input class="inputs" v-model="DATA[3]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
                <input class="inputs" v-model="DATA[4]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
                <input class="inputs" v-model="DATA[5]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
                <input class="inputs" v-model="DATA[6]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
            </form>
        </div>

        <div class="input-error" v-visible="error !== 'N/A'" v-if="(position === 'bottom') && (errorDisplay)">{{error }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import JQuery from 'jquery';
let $ = JQuery;

@Component({})
export default class TextInputComponent extends Vue {

    @Prop({default: ''}) public placeholder: string|undefined;
    @Prop({default: ''}) public icon: string|undefined;
    @Prop({default: 'light'}) public theme: string|undefined;
    @Prop({default: 'fixed'}) public layout: string|undefined;
    @Prop({default: '0em 0em'}) public paddings: string|undefined;
    @Prop({default: 'bottom'}) public position: string|undefined;
    @Prop({default: true}) public errorDisplay: boolean|undefined;
    @Prop({default: ''}) private error: string|undefined;


    private db: any = (this as any).$db;
    private text: string = '';
    private DATA:  string[] = ['','','','','','',''];
    private inTheme: string = 'none';

    private mounted() {

        console.log('')
        console.log(' ==> error')
        console.log(this.error)
        console.log('')

        const vThis = this;
        $('.inputs').keyup(function (this: any, $event: any) {

            /* tslint:enable */
            const _this = (this as any);
            /* tslint:enable */

            const _key = $event.originalEvent.key;
            if(_key === 'Backspace'){
                $(_this).prev('.inputs').focus();
            }else{
                if ((_this.value.length == _this.maxLength)) {
                    $(_this).next('.inputs').focus();
                }
            }

            vThis.text = `${vThis.DATA[0]}${vThis.DATA[1]}${vThis.DATA[2]}${vThis.DATA[3]}${vThis.DATA[4]}${vThis.DATA[5]}${vThis.DATA[6]}`.replace('/','-');
            vThis.onType();

        });
    }
    private inputClass(): string {
        return `${this.theme} ${this.layout} ${this.position} in-${this.inTheme}`;
    }

    private onType(): void {
        this.$emit('onType', this.text);
    }

    private onFocus(): void {
        this.$store.dispatch('setKeyboardIsOpen', true);
        this.inTheme = 'theme-light';
    }

    private onBlur(): void {
        this.$store.dispatch('setKeyboardIsOpen', false);
        this.inTheme = this.text.length > 0 ? 'theme-light' : 'theme-none' ;
    }

    private getInputWrapperClass(): string {
        return (this.error !== 'N/A' && this.error !== '') ? `error ${this.inTheme}` : `default ${this.inTheme}`;
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
        background-color:white;

        &.error{
            border: 1px solid @color-red;
        }

        &.theme-light{
            background-color:white;
        }
    }

/*
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
                    &::placeholder { 
                    color: #9b9797;
                    opacity: 1; 
                    }

                    &:-ms-input-placeholder { 
                    color: #9b9797;
                    }

                    &::-ms-input-placeholder { 
                    color: #9b9797;
                    }
            
        }

      
        .icon{
            width: 2em;
            height: 2em;
            img{
                width: 2em;
            }
        }

        &.error{
            border: 1px solid @color-red;
        }

        &.theme-light{
            background-color:white;
        }
    }
    */

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
    text-align:center;
}
div.top{
    top: 0px;
        text-align:center;

}

div.input-error{
    text-align: center;
}

form.input-code{

      display: table;
    margin: 10px auto;
    text-align: center;
    box-sizing: border-box;
    width: 100%;

    font: 400 13.3333px Arial;
    padding: 1px 0px;


}

    input[type="text"] {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid gray;
    display: inline-block;
    font-size: 16px;
    margin: 0 5px;
    width: 1.5em;
    text-align: center;
}
input[type="submit"] {
    background-color: #00cc66;
    border: 0;
    color: #fff;
    margin-top: 20px;
    padding: 10px;
    width: 100%;
}

</style>
