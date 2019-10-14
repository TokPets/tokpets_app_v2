const CAT_BREEDS_URL: string = 'https://firebasestorage.googleapis.com/v0/b/app-tokpets-dev.appspot.com/o/Breeds%2Fcat.breeds.json?alt=media&token=accde6d9-bdeb-476c-8fb1-0088effdc52b';
const DOG_BREEDS_URL: string = 'https://firebasestorage.googleapis.com/v0/b/app-tokpets-dev.appspot.com/o/Breeds%2Fdog.breeds.json?alt=media&token=accde6d9-bdeb-476c-8fb1-0088effdc52b';

export default class DBPetsService {

    private dbIndDB: any;
    private dbFirestoreDB: any;
    private dbFirestorageDB: any;
    private dbName: string;

    constructor() {
        this.dbIndDB = (window as any).indDB;
        this.dbFirestoreDB = (window as any).firestore;
        this.dbFirestorageDB = (window as any).firestorage;
        this.dbName = 'DB  DBPetsService Service';
    }

    public getBreeds(TYPE: string): Promise<any[] | string> {
        return new Promise((resolve, reject) => {
            console.clear();
            if(TYPE === 'CAT'){
                fetch(CAT_BREEDS_URL).then((breeds: any) => resolve(breeds.json()));
            }else{
                fetch(DOG_BREEDS_URL).then((breeds: any) => resolve(breeds.json()));
            }
        });
    }


}
