<template>
  <div class="view page index">
    <h1>TOK PETS </h1>
    <h2>LOGIN // SIGNIN</h2>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import './../../../config/firebase/_index';
import './../../../config/vndrs/_index';
import './../../../config/srvcs/_index';

import * as firebase from 'firebase/app';
const messaging = firebase.messaging();

@Component({})
export default class IndexView extends Vue {

  private mounted(){

    Notification.requestPermission().then(function (permission) {
    messaging.getToken().then((token: any) => {
        // tslint:disable-next-line: no-console
        console.log('FCM from PWA :: token');
        console.log(token);
    });
    }).catch((err: any) => {
    console.log('Unable to get permission to notify.', err);
    });
  }
}
</script>



<style lang="less">

</style>
