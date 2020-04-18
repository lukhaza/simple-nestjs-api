import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: String,
    displayname: String,
    givenname: String,
    familyname: String,
    email: String,
    photo: String,
    provider: String,
});

export interface User extends mongoose.Document {
         id: string;
         displayname: string;
         givenname: string;
         familyname: string;
         email: string;
         photo: string;
         provider: string;
}

// export class User {
//     constructor(
//         public id: string,
//         public displayname: string,
//         public givenname: string,
//         public familyname: string,
//         public email: string,
//         public photo: string,
//         public provider: string
//         ){}
// };



// export class User {
    // id: string;
    // displayname: string;
    // givenname: string;
    // familyname
    // email: string;
    // photo: string;
    // provider: string;

//     constructor(id: string, displayname: string, givenname: string, familyname: string, email: string, photo: string, provider: string) {
//         this.id=id;
//         this.displayname=displayname;
//         this.givenname=givenname;
//         this.email=email;
//         this.familyname=familyname;
//         this.photo=photo;
//         this.provider=provider;
//     };

// }