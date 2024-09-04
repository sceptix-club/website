"use server";

import { db } from "@/config/firebase";
import { MemberType } from "@/types";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

export const getMembers = async () => {
    const collectionRef = collection(db, "/members");
    let membersQuery = query(collectionRef, orderBy("RolePriority", "desc"));

    const membersCollectionSnapshot = await getDocs(membersQuery);
    const membersList = membersCollectionSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

    return membersList as MemberType[];
};
