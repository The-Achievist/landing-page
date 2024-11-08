"use server";

import db from "@/lib/firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export const addToWaitingListAction = (email: string) => {
  addDoc(collection(db, "WaitingList"), {
    email: email,
    joined: new Date(),
    informed: false,
  }).catch((reason) => {
    throw reason;
  });
};
