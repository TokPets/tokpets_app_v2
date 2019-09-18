<template>
    <section class="swiper tutorial">

        <swiper :options="SWIPER_OPTIONS">

            <swiper-slide v-for="(slide, index) in slides" :key="index">

                <div class="slide-tutorial-step">
                    <img :alt="`TokPets | Tutorial ${slide.title}`" :src="slide.image">
                    <h1> {{ slide.title }}</h1>
                    <h2> {{ slide.text }}</h2>
                </div>

            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>

        </swiper>

    </section>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import ITutorialSlides from './ITutorialSlides.interface';

@Component({})
export default class SwiperSignUpComponent extends Vue {

     @Prop({default: []}) public slides: ITutorialSlides[] | undefined;

     public SWIPER_OPTIONS: any =  {
        pagination: {
            el: '.swiper-pagination'
        }
    }
}
</script>


<style lang="less">
@import (reference) './../../../../src/shared/styles/main.less';
@layout-height: calc(1 * var(--view-height) / 1);

div.slide-tutorial-step{
    display: block;
    width: 100px;

    z-index: 0;

    #view(column,center,center);

    height:  ~"calc(100vh - 24px - 16px - 16px)";
    padding-bottom: ~"calc(24px + 16px + 16px)";
}



div.slide-tutorial-step{
    img{
        width: 200px;
        display: block;
        margin: 0 auto;
    }
}
</style>