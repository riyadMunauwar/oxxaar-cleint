import { collection, getDocs } from "firebase/firestore";

export default async function getCollection(payload) {
  if (payload && typeof payload === "object" && payload instanceof Object) {
    const documents = [];
    const collectionRef = collection(payload.db, payload.collection);
    const snapShots = await getDocs(collectionRef);

    snapShots.forEach((doc) => {
      if (doc.exists()) return documents.push(doc.data());
    });

    return documents;
  } else {
    console.log("db and collection name not pass");
  }
}
