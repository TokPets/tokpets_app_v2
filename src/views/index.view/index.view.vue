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
    /*
      const countriesGeocodeJSON = 'https://firebasestorage.googleapis.com/v0/b/app-tokpets-dev.appspot.com/o/Geocode%2Fcountries.geocode.json?alt=media&token=3dd36833-5de1-414c-8e63-c8f9f2a99644';
      fetch(countriesGeocodeJSON).then( (response:any) => {
        (window as any).console.warn(response);
      }).catch( (error:any) => {
        (window as any).console.error(error);
      });
      */
  }

  private mounted() {


//this.nofityMe();

/*
this.CurrentNavigator = JSON.stringify((navigator as any).userAgent);
const dbGeocodeServiceName = (this as any).$db.geolocations.getName();


console.warn('');
console.warn('');
console.warn('dbGeocodeServiceName');
console.warn(dbGeocodeServiceName);
console.warn('');
console.warn('');
*/
  }


/*
  private nofityMe() {
    // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
     setTimeout( () => {
            const notification = new Notification('Hi there Easy Piece!');
        }, 2000);
  } else if ((window as any).Notification.permission !== 'denied') {
    Notification.requestPermission(function(permission: any) {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        setTimeout( () => {
            const notification = new Notification('Hi there! Opss Toco pedir permiso');
        }, 2000);

      }
    });
  } else {
     console.error('ERROR ON CONDITIONS');
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
  }
  */
}
</script>



<style lang="less">
</style>
