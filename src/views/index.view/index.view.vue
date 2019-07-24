<template>
  <div class="view page index">
    <h1>TOK PETS</h1>
    <h4>Navigator {{CurrentNavigator}}</h4>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class IndexView extends Vue {

  private CurrentNavigator: string = '';

  private beforeMount() {
      const countriesGeocodeJSON = 'https://firebasestorage.googleapis.com/v0/b/app-tokpets-dev.appspot.com/o/Geocode%2Fcountries.geocode.json?alt=media&token=3dd36833-5de1-414c-8e63-c8f9f2a99644';
      fetch(countriesGeocodeJSON).then( (response:any) => {
        (window as any).console.warn(response);
      }).catch( (error:any) => {
        (window as any).console.error(error);
      });
  }

  private mounted() {


    this.CurrentNavigator = JSON.stringify((navigator as any).userAgent);
    const dbGeocodeServiceName = (this as any).$db.geolocations.getName();

    console.warn('');
    console.warn('');
    console.warn('dbGeocodeServiceName');
    console.warn(dbGeocodeServiceName);
    console.warn('');
    console.warn('');

  }
}
</script>



<style lang="less">
</style>
