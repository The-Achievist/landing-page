"use server"

import db from "@/lib/firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export const addToWaitingListAction = (email: string) => {
return addDoc(collection(db, "waiting-list"), {
      email: email,
    });
};
