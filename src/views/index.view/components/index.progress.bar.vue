<template>
    <div class="progress-bar">
        <div class="progress-bar-state" :style="{ width: STATE + '%' }"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class IndexProgressBarComponent extends Vue {

    private STATE: number = 0;
    private async mounted(){
        
        let isIncreased: boolean = false;
        for(let k = 0; k < 100; k++){
            isIncreased = await this.increase(1);
        }
        this.$emit('onLoad', true);
        
    }
    private increase(nPercentage: number): Promise<boolean>{
        return new Promise( (resolve:any) => {
            setTimeout( () => { 
                this.STATE = this.STATE + nPercentage;
                resolve();
            }, 20);
        })
    }
    private onLoad() {
        
    }
}
</script>

<style scoped lang="less">
//@import './../../../../src/shared/styles/main.less';
div.progress-bar{
    display: block;
    width: 50vw;
    margin: 0 auto;
    height: 1px;
    border-radius: 1em;
    background-color: white;
    &-state{
        background-color: #919191;
        width: 0%;
        display: block;
        border-radius: 1em;
        height: 1px;
    }
}
</style>