import Vue from 'vue';
import DBGeolocationsService from './../../shared/database/db.geolocations/_index';


Vue.prototype.$db = {};
Vue.prototype.$db.geolocations = new DBGeolocationsService();
Vue.prototype.$db.pets = new DBGeolocationsService();
Vue.prototype.$db.users = new DBGeolocationsService();
Vue.prototype.$db.shop = new DBGeolocationsService();

Vue.prototype.$db.geolocations = new DBGeolocationsService();
Vue.prototype.$db.pets = new DBGeolocationsService();
Vue.prototype.$db.users = new DBGeolocationsService();
Vue.prototype.$db.shop = new DBGeolocationsService();
