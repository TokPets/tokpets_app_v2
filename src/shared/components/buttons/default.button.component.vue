<template>
    <div class="button" :class="btnClass()" @click="btnOnClick()">
        <h1>{{text}}</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class ButtonComponent extends Vue {

    @Prop({default: ''}) public text: string|undefined;
    @Prop({default: 'light'}) public theme: string|undefined;
    @Prop({default: 'relative'}) public layout: string|undefined;
    @Prop({default: 'bottom'}) public position: string|undefined;

    private btnClass(): string {
        return `${this.theme} ${this.layout} ${this.position}`;
    }

    private btnOnClick(): void{
        this.$emit('onClick',{});
    }
}
</script>

<style scoped lang="less">
div.button{
    
    display: block;
    width: 100%;
    
    padding: 1em;
    box-sizing: border-box;
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

//@import './../../styles/main.less';
</style>