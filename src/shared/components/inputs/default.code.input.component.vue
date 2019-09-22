<template>
<div>
    <form class="input-code">
        <input class="inputs" v-model="DATA[0]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
        <input class="inputs" v-model="DATA[1]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
        <input class="inputs" v-model="DATA[2]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
        <input class="inputs" v-model="DATA[3]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
        <input class="inputs" v-model="DATA[4]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
        <input class="inputs" v-model="DATA[5]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
        <input class="inputs" v-model="DATA[6]" type="text"  pattern="[^a-zA-Z]+" maxlength="1">
        <input type="submit" value="submit">
    </form>
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
    @Prop({default: ''}) private error: string|undefined;


    private db: any = (this as any).$db;
    private text: string = '';
    private DATA:  string[] = ['','','','','','',''];
    private inTheme: string = 'none';

    private mounted() {

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
        return this.error !== 'N/A' ? `error ${this.inTheme}` : `default ${this.inTheme}`;
    }

}
</script>

<style scoped lang="less">
@import (reference) './../../styles/main.less';
form.input-code{

      display: table;
    margin: 100px auto;
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
    font-size: 20px;
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
