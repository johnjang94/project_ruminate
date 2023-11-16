import { createContext, useEffect, useState } from "react";
import { auth } from "@components/api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import getUserRole from "@components/api/firestore";

interface ContextProps {
  children: React.ReactNode;
}

// XXX
// will eventually have more info, only use what's needed now for experimenting
interface User {
  // when user first signs up, we'll create a db entry for them with their role
  role: "admin" | "producer" | "evaluator" | null;
}

export const UserContext = createContext<User | null>(null);

export default function UserContextProvider({ children }: ContextProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const role = await getUserRole(authUser.uid);
        setUser({
          role,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
