export default class DBUsersService {
  private dbIndDB: any;
  private dbFirestoreDB: any;
  private dbName: string;

  constructor() {
    this.dbIndDB = (window as any).indDB;
    this.dbFirestoreDB = (window as any).firestore;
    this.dbName = 'DB  DBPetsService Service';
  }

  public signinByEmailAndPassword(email: string, password: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      if (Math.random() > 0.5) {
        resolve({
          status: 'ok',
          user: {}
        });
      } else {
        reject({
          status: 'error',
          user: {}
        });
      }
    });
  }
}
