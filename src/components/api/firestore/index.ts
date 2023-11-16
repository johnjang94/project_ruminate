import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getUserRole(
  uid: string,
): Promise<"admin" | "producer" | "evaluator" | null> {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    switch (docSnap.data().role) {
      case "admin":
        return "admin";
      case "producer":
        return "producer";
      case "evaluator":
        return "evaluator";
      default:
        return null;
    }
  }
  return null;
}
