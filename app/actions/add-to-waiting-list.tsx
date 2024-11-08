"use server";

import db from "@/lib/firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export const addToWaitingListAction = (email: string) => {
  addDoc(collection(db, "WaitingList"), {
    email: email,
    joined: new Date(),
    informed: null,
    registered: null,
  }).catch((reason) => {
    throw reason;
  });
};
