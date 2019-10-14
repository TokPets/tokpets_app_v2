<template> 
  <div class="input date default" :style="{ 'padding' : paddings }" @click="SHOW = true" >

      <input v-if="!SHOW" type="text" placeholder="Birthday" disabled >
      <input v-if="SHOW" type="date"
       id="start" 
       name="trip-start"
       value="BIRTHDAY"
       v-model="date"
       min="2018-01-01" max="2018-12-31" @change="onDatePickUp($event)">
        
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({})
export default class ChooseInputComponent extends Vue {

    @Prop({default: ''}) public placeholder: string|undefined;
    @Prop({default: ''}) public error: string|undefined;
    @Prop({default: ''}) public theme: string|undefined;
    @Prop({default: ''}) public paddings: string|undefined;

    private db: any = (this as any).$db;
    private date: string = '';

    private SHOW:boolean = false;

    private mounted() {

    }
   
    private onDatePickUp($selected: string): void {
        this.$emit('onDatePickUp', $selected);
    }

   


}
</script>

<style scoped lang="less">
@import (reference) './../../styles/main.less';
div.input.date.default{


    display: block;
    width: 100%;
    padding: 0em 0em;
    border-bottom: 1px solid black;


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

/*

    ::-webkit-datetime-edit { padding: 1em; }
    ::-webkit-datetime-edit-fields-wrapper { background: silver; }
    ::-webkit-datetime-edit-text { color: red; padding: 0 0.3em; }
    ::-webkit-datetime-edit-month-field { color: blue; }
    ::-webkit-datetime-edit-day-field { color: green; }
    ::-webkit-datetime-edit-year-field { color: purple; }
    ::-webkit-inner-spin-button { display: none; }
    ::-webkit-calendar-picker-indicator { background: orange; }
   
*/
}



</style>
