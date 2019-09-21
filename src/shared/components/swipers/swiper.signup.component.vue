<template>
    <section class="swiper tutorial">

        <swiper ref="mySwiper"  @slideChange="slideChanged()" :options="SWIPER_OPTIONS">

            <swiper-slide v-for="(slide, index) in slides" :key="index">

                <div class="slide-tutorial-step">

                    <img class="slide-tutorial-image" :alt="`TokPets | Tutorial ${slide.title}`" :src="slide.image">
                    
                    <div class="slide-tutorial-container">
                        <h1> {{ slide.title }}</h1>
                        <h2> {{ slide.text }}</h2>
                    </div>

                </div>

            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>

        </swiper>

    </section>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ITutorialSlides from './ITutorialSlides.interface';

@Component({

})
export default class SwiperSignUpComponent extends Vue {

    @Prop({default: []}) public slides: ITutorialSlides[] | undefined;

    public mounted(){
        const currentStep: number = parseInt(this.$route.params.step + '');
        (this.$refs.mySwiper as any).swiper.slideTo(currentStep);
    }


    public slideChanged(){
        const currentSlide: number = (this.$refs.mySwiper as any).swiper.activeIndex ;
        this.$router.push(`/login/signup/intro/${currentSlide}`);
    }
   

    
     public SWIPER_OPTIONS: any =  {
        pagination: {
            el: '.swiper-pagination'
        },

        resistance: true,
        resistanceRatio:0


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

div.swiper-pagination-bullets{
-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

div.slide-tutorial-step{
    img{
        width: 200px;
        display: block;
        margin: 0 auto;
    }
}

div.slide-tutorial-container{
    display: block;
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: white;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;

    box-sizing: border-box;
    padding-bottom: 30px;

    letter-spacing: 3px;
    line-height: 1.2em;

    h1{
        font-weight: 900;
        font-size: 1.1em;

        padding-bottom: 0.25em;
    }

    .flex-display(flex);
    .flex-direction(column);
    .align-items(center);
    .justify-content(center);

}

div.swiper-pagination{
    position: absolute;
    bottom: 170px !important;
}
</style>