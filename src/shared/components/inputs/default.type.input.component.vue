<template>
  <div class="input type default" :style="{ 'padding' : paddings }">


      <ul class="types">
          <li v-for="option in options" :key="option.name" :class="{ 'selected' : option.name === selected, 'unselected' : option.name !== selected}" @click="onSelect(option.name)">
              <img  :src ="option.icons.selected" v-if="option.name === selected">
              <img  :src="option.icons.unselected" v-if="option.name !== selected">
          </li>
      </ul>
        
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({})
export default class TypeInputComponent extends Vue {

    @Prop({default: ''}) public selected: string|undefined;
    @Prop({default: []}) public options: any[]|undefined;

    @Prop({default: ''}) public paddings: string|undefined;
    @Prop({default: ''}) public theme: string|undefined;

    private db: any = (this as any).$db;
    private text: string = '';
    private DATA:  string[] = ['','','','','','',''];
    private inTheme: string = 'none';

    private mounted() {

    }
   
    private onSelect($selected: string): void {
        this.$emit('onSelected', $selected);
    }

   

    

}
</script>

<style scoped lang="less">
@import (reference) './../../styles/main.less';
div.input.type.default{


    display: block;
    width: 100%;

    padding: 1em 0em;
    img{
        display: block;
        width: 100%;
        max-width: 80px;
        margin: 0 auto;
    }


    ul{
            display: block;
            width: 100%; 

              display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    }

    li{
            display: block;
           
            width: ~"calc(50% - 0.5em)";
            box-sizing: border-box;
            padding: 0em;
            border-radius: 0.5em;
            
 cursor:pointer;
            &.selected{
               background-color: @color-cream-dark;
            }

            &.unselected{
                background-color: white;
            }
    }


        
    
}
</style>
