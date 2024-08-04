// import {  collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"; 
// import { db } from "./firebase"; 
// import { PetData } from "../components/types";





// // データを保存する関数
// export const saveData = async (collectionName: string, data: PetData) => {
//     try {
//         const docRef = await addDoc(collection(db, collectionName), data);
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     // }
// };

// // データを取得する関数
// export const getData = async (collectionName: string) => {
//     const querySnapshot = await getDocs(collection(db, collectionName));
//     const dataList: PetData[] = [];
//     querySnapshot.forEach((doc) => {
//         dataList.push({ id: doc.id, ...doc.data() } as PetData);
//     });
//     return dataList;
// };

// // データを更新する関数
// export const updateData = async (collectionName: string, docId: string, data: PetData) => {
//     try {
//         const docRef = doc(db, collectionName, docId);
//         await setDoc(docRef, data, { merge: true });
//         console.log("Document successfully updated");
//     } catch (e) {
//         console.error("Error updating document: ", e);
//     }
// };
