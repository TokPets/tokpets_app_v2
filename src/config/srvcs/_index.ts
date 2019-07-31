import Vue from 'vue';
import DBGeolocationsService from './../../shared/database/db.geolocations/_index';
import DBPetsService from './../../shared/database/db.pets/_index';
import DBUsersService from './../../shared/database/db.users/_index';
import DBShopService from './../../shared/database/db.shop/_index';


Vue.prototype.$db = {};
Vue.prototype.$db.geolocations = new DBGeolocationsService();
Vue.prototype.$db.pets = new DBPetsService();
Vue.prototype.$db.users = new DBUsersService();
Vue.prototype.$db.shop = new DBShopService();


