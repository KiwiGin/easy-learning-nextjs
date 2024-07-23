import db from './firebaseConfig';
import { addDoc, collection, getDocs, updateDoc, doc,deleteDoc, UpdateData } from 'firebase/firestore';

export interface Student {
    age:                number;
    dni:                number;
    email:              string;
    firstname:          string;
    grade:              number;
    lastname:           string;
    password:           string;
    profilePictureLink: string;
    section:            string;
    sex:                string;
    tutorId:            string;
}

//STUDENT//---
//Create
export const createData = async (data: string[]) => {
    try {
        const docRef = await addDoc(collection(db, "Student"), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

//Read
export const readData = async () => {
    const querySnapshot = await getDocs(collection(db, "Student"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

//Update
export const updateData = async (id:string, data: UpdateData<Student>) => {
    try {
        await updateDoc(doc(db, "Student", id), data);
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}

//Delete
export const deleteData = async (id:string) => {
    try {
        await deleteDoc(doc(db, "Student", id));
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}