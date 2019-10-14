<template>
    <div class="view signup pet" :class="viewClass()">

        <header-component
            :theme="'dark'">
        </header-component>


        <h1 class="title">
            <strong>Pet</strong> information
        </h1>
        <h2 class="subtitle">
            # {{PET.code}}
        </h2>

        <form>

            <pet-type-component
                @onSelected="doSetInputPetType($event)"
                :options="TYPES"
                :selected="PET.type"
            ></pet-type-component>

            <h3>General information</h3>

            <pet-name-component
                @onType="doSetInputPetName($event)"
                :error="ERRORS.CODE"
                :errorDisplay="'false'"
                :icon="'error'"
                :placeholder="'Name'"
                :theme="'clear'"
                :paddings="'0em 0em'"
                :position="'bottom'">
            </pet-name-component>

            <pet-gender-component
                @onChoosed="doSetInputPetGender($event)"
                :options="GENDERS"
                :theme="'light'"
                :paddings="'0em 0em'"
                :error="ERRORS.CODE">
            </pet-gender-component>

            <pet-birthday-component
                @onDatePickUp="doSetInputPetBirthday($event)"
                :theme="'light'"
                :error="ERRORS.CODE"
            ></pet-birthday-component>



             <pet-breed-component
                @onItemSelected="doSetInputPetBreed($event)"
                :items="BREEDS"
                :item="PET.breed"
                :title="`<strong style='font-weight:900;padding-right:0.05em'>${PET.type.charAt(0).toUpperCase() + PET.type.toLowerCase().slice(1)}</strong> Breed`"
                :logo="`${getBreedLogo}`"
                :theme="'light'"
                :error="ERRORS.CODE"
            ></pet-breed-component>


            <pet-country-component
                @onItemSelected="doSetInputPetCountry($event)"
                :items="COUNTRIES.map(country => country.country)"
                :item="PET.country"
                :theme="'light'"
                :error="ERRORS.CODE"
            ></pet-country-component>

            <pet-city-component
                @onItemSelected="doSetInputPetCity($event)"
                :items="CITIES"
                :item="PET.city"
                :theme="'light'"
                :error="ERRORS.CODE"
            ></pet-city-component>


        </form>

   

        <button-component 
            @onClick="doNext()"
            :disable="BtnIsDisabled"
            :text="'Next'"
            :theme="'dark'"
            :z_index="100"
            :layout="'absolute'"
            :position="'bottom'">
        </button-component> 
        
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ButtonSignUpComponent from './../../../shared/components/buttons/default.button.component.vue';
import HeaderSignUpComponent from './../../../shared/components/headers/header.signup.component.vue';
import PetTypeSignUpComponent from './../../../shared/components/inputs/default.type.input.component.vue';
import PetTextSignUpComponent from './../../../shared/components/inputs/default.text.input.component.vue';
import PetChooseSignUpComponent from './../../../shared/components/inputs/default.choose.input.component.vue';
import PetBirthdaySignUpComponent from './../../../shared/components/inputs/default.date.input.component.vue';
import PetBreedSignUpComponent from './../../../shared/components/inputs/default.list.input.component.vue';


import ApiTrackers from './../../../apis/devices.api';

import './../../../config/directives/_index';
import './../../../config/firebase/_index';
import './../../../config/vndrs/_index';
import './../../../config/srvcs/_index';


@Component({
    components: {
    'header-component' : HeaderSignUpComponent,
    'pet-type-component' :  PetTypeSignUpComponent,
    'pet-name-component': PetTextSignUpComponent,
    'pet-gender-component':  PetChooseSignUpComponent,
    'pet-birthday-component': PetBirthdaySignUpComponent,
    'pet-breed-component': PetBreedSignUpComponent,
    'pet-country-component': PetBreedSignUpComponent,
    'pet-city-component': PetBreedSignUpComponent,
    'button-component' : ButtonSignUpComponent,
  },
})
export default class LoginSignCodeInView extends Vue {

    public BtnIsDisabled: boolean = true;

    private DB: any = (this as any).$db;
    private ERRORS: any = {
        CODE: 'N/A'
    };
    private GENDERS: string[] = ['male' , 'female']
    private TYPES: any[] = [{
        name : 'DOG',
        icons : {
            unselected:  require('../../../shared/assets/images/signup-pet/Registroperro1.png'),
            selected: require('../../../shared/assets/images/signup-pet/Registroperro2.png'),
        }
        },{
            name : 'CAT',
            icons : {
                selected: require('../../../shared/assets/images/signup-pet/Registrogato1.png'),
                unselected: require('../../../shared/assets/images/signup-pet/Registrogato2.png'),
            }
        }];
    private BREEDS: string[] = [];
    private CITIES: string[] = [];
    private COUNTRIES: string[] = [];
    private PET = {
        type: '',
        code : '',
        name : '',
        gender: '',
        breed: 'Breed',
        country: 'Country',
        city: 'City',
        birthday: ''
    };

 
    private beforeMount(): void{
        const dbName = this.DB.pets.dbName;
        this.DB.pets.getBreeds('CAT')
        .then((breeds:any) => this.BREEDS = ['mix', ...breeds])
        .catch((error:any) => console.error('BREEDS ERROR'))
        
        this.DB.geolocations.getCountries()
        .then((countries:any) => {
            this.COUNTRIES = countries;
            console.error('COUNTRIES')
            console.error(this.COUNTRIES)
            })
        .catch((error:any) => console.error('BREEDS ERROR'))
    }
    private mounted(){
        const trackerCode = sessionStorage.getItem('SIGNUP_TRACKER_CODE') || 'N/A';
        this.PET.code = trackerCode;
        this.PET.type = this.TYPES[0].name;
        this.doUpdateRoute();
    }


    get getBreedLogo(): string{
        return this.TYPES.filter(type => type.name === this.PET.type)[0] ? 
               this.TYPES.filter(type => type.name === this.PET.type)[0].icons.selected : 'PERRAS'
    }

    private viewClass(): string {
        return this.$store.getters.isKeyboardOpen ? 'keyboard-on' : 'keyboard-off';
    }





    public doSetInputPetType($petType: string): void{ 
        this.PET.type = $petType;
        this.doUpdateRoute();

    }
    public doSetInputPetName($petName: string): void{
        this.PET.name = $petName;
    }
    public doSetInputPetGender($petGender: string): void{
        this.PET.gender = $petGender;
    }
    public doSetInputPetBirthday($petBirthday: string): void{
        this.PET.birthday = $petBirthday;
    }
    public doSetInputPetBreed($petBreed: string): void{
        this.PET.breed =$petBreed;
    }
    public doSetInputPetCountry($petCountry: string): void{
        this.PET.country = $petCountry;

        this.DB.geolocations.getCities(this.COUNTRIES.filter((country: any) => country.country === $petCountry))
        .then((cities:any) => this.CITIES = cities)
        .catch((error:any) => console.error('CITIES ERROR'));
    }
    public doSetInputPetCity($petCity: string): void{
        this.PET.city = $petCity;
    }
    public doUpdateRoute(): void {
       this.$router.replace(`/login/signup/pet/code/${this.PET.code}/type/${this.PET.type}/name/_/gender/_/birthday/_/breed/_/country/_/city/_/`);
    }

    private checkErrors(code: string): Promise<any> {
        return new Promise((resolve, reject) => {
        // TODO
        })
    }
    public doNext(): void{
    }

}
</script>

<style lang="less">
 @import (reference) './../../../../src/shared/styles/main.less';

@layout-height: calc(1 * var(--view-height) / 1);
@layout-top: 6em;

div.view.signup.pet{
  
    #view(column,center,center);
    #view-theme-light();

    background-color: @color-cream-light;

    display: block;
    position: relative;

    z-index: 0;

    width: 100vw;
    height: @layout-height;

    overflow: scroll;

    box-sizing: border-box;
    padding-top: @layout-top;

    .flex-display(flex);
    .flex-direction(column);
    .align-items(center);
    .justify-content(flex-start);

    h1.title{
        font-weight: 300;
        padding-bottom: 0.25em;
        letter-spacing: 2px;
        strong{
            font-weight: 900;
        }
    }
    h2.subtitle{
        font-size: 12px;
        font-weight: 300;
        padding-bottom: 1em;
        letter-spacing: 2px;
    }

    h3{
        font-size: 12px;
        font-weight: 900;
        padding-bottom: 1em;
        letter-spacing: 2px;
        text-align: left;
    }

}

div.view.signup.pet form{

    display: block;
    position: relative;
    z-index: 100;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;

}
</style>
