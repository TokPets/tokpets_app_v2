<template>
  <div class="view page index">
    <h1>TOK PETS // LOGIN // SIGNIN </h1>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ConfigFirebase from './../../config/firebase/config.firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

firebase.initializeApp(ConfigFirebase);

@Component({})
export default class IndexView extends Vue {

  private CurrentNavigator: string = '';

  private beforeMount() {

  }

  private mounted() {

  }


}
</script>



<style lang="less">
</style>
