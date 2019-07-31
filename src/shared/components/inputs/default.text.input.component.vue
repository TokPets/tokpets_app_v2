<template>
  <div class="input text default">

        <div class="input-error" v-if="position === 'top' && error">Unregistered e-mail</div>
        <div class="input-wrapper" :class="error">
            <input type="text" placeholder="">
            <img>
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
    @Prop({default: 'bottom'}) public position: string|undefined;

    private db: any = (this as any).$db;
    private error: boolean = true;

    private mounted() {

    }
    
    
    private inputClass(): string {
        return `${this.theme} ${this.layout} ${this.position}`;
    }
 
}
</script>

<style scoped lang="less">
div.input{

     display: block;
        width: 100%;
        box-sizing: border-box;

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
        &.error{
            border: 1px solid red;
      
        }
    }
    &-error{
        color:red;
        text-align: left;
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
