// index.ts

//  ------------------------------------------- //
//  -- Import Firebase and Vendors Resources -- //
//  ------------------------------------------- //
import * as functions from 'firebase-functions';
//  ------------------------------------------- //


//  ------------------------------------------- //
//  -- Import App's Apis & Methods           -- //
//  ------------------------------------------- //
import getHelloWorldApi from './common/helloWorld.common.api';
import getCitiesByCountryCodeApi from './geolocation/getCitiesByCountryCode.geolocation.api';
//  ------------------------------------------- //





module.exports = {
  'hello-world': functions.https.onRequest(getHelloWorldApi),
  'get-cities-by-country-code': functions.https.onRequest(getCitiesByCountryCodeApi)
};