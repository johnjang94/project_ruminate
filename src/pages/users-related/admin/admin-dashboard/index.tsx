import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "@components/api/firebase";
import { UserContext } from "@contexts/UserContext";
import { ProductsContext } from "@contexts/ProductsContext";

import { Admin, Evaluator, Producer } from "src/types/users";

function checkAdmin(user: Admin | unknown): user is Admin {
  return (user as Admin).role === "admin";
}

function checkProducer(user: Producer | unknown): user is Producer {
  return (user as Producer).role === "producer";
}

interface AllUsers {
  [key: string]: Admin | Evaluator | Producer;
}

// XXX
// this is a mock-up, ad-hoc dashboard just for experimenting with
// database interactions - not for realsies. this will all change, as
// front-end create dashboards from mid-fi designs
export default function AdminDashboard() {
  const user = useContext(UserContext);
  const userProducts = useContext(ProductsContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const [allUsers, setAllUsers] = useState<null | AllUsers>(null);
  const [userDetailId, setUserDetailId] = useState<null | string>(null);

  useEffect(() => {
    // this loads up all users & their info for the admin to view
    if (user && checkAdmin(user)) {
      const q = query(collection(db, "users"));
      onSnapshot(q, (querySnapshot) => {
        const users: AllUsers = {};
        querySnapshot.forEach((docu) => {
          const data = docu.data() as Admin | Evaluator | Producer;
          users[data.uid] = data;
        });
        if (Object.keys(users).length) {
          setAllUsers(users);
        } else {
          setAllUsers(null);
        }
      });
    } else {
      setAllUsers(null);
    }
  }, []);

  const displayAdminConfirmation = () => {
    if (user && checkAdmin(user) && user.adminConfirmed) {
      return <p className="bg-green-500 p-1">Admin confirmed</p>;
    }
    return <p className="bg-orange-400 p-1">Awaiting admin confirmation</p>;
  };

  const displayProducts = () => {
    if (user && checkAdmin(user)) {
      return (
        <div className="bg-neutral-100 p-1">
          <h2>All Products:</h2>
          {userProducts ? (
            userProducts.map((product) => {
              return <div key={product.productId}>{product.productName}</div>;
            })
          ) : (
            <div>No Products =(</div>
          )}
        </div>
      );
    }
    return null;
  };

  const getDetailUser = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLButtonElement;
    const { uid } = target.dataset;
    if (uid) {
      setUserDetailId(uid);
    }
  };

  const displayUsers = () => {
    if (user && checkAdmin(user)) {
      return (
        <div className="bg-neutral-100 p-1 flex flex-col items-start">
          <h2>All Users:</h2>
          {allUsers ? (
            Object.keys(allUsers).map((singleId) => {
              const currentUser = allUsers[singleId];
              return (
                <button
                  data-uid={currentUser.uid}
                  key={currentUser.uid}
                  onClick={getDetailUser}
                  type="button"
                >
                  {`${currentUser.name} (${currentUser.email})`}
                </button>
              );
            })
          ) : (
            <div>No Users 😭</div>
          )}
        </div>
      );
    }
    return null;
  };

  const displayAddress = (currentUser: Evaluator | Producer) => {
    const { address } = currentUser;
    return (
      <>
        {checkProducer(currentUser) ? (
          <div>{currentUser.businessName}</div>
        ) : null}
        <div>{address.street}</div>
        {address.unit ? <div>{`Unit ${address.unit}`}</div> : null}
        <div>{`${address.city}, ${address.state}`}</div>
        <div>{address.zip}</div>
      </>
    );
  };

  const displayCertInfo = (currentUser: Producer) => {
    return (
      <>
        <h2>Certification Info:</h2>
        <div>
          Type:{" "}
          {currentUser.certification === "thirdParty"
            ? "Third Party"
            : "Self-Certified"}
        </div>
        {currentUser.certificationURL ? (
          <div>
            <a
              className="text-blue-800 underline"
              target="_blank"
              href={currentUser.certificationURL}
            >
              Download certification
            </a>
          </div>
        ) : (
          "No certification document provided"
        )}
      </>
    );
  };

  const changeConfirmation = async (event: React.SyntheticEvent) => {
    const target = event.target as HTMLButtonElement;
    const { uid } = target.dataset;
    if (allUsers && uid) {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, {
        adminConfirmed: !allUsers[uid].adminConfirmed,
      });
    }
  };

  const deactivateUser = async (event: React.SyntheticEvent) => {
    const target = event.target as HTMLButtonElement;
    const { uid } = target.dataset;
    if (allUsers && uid) {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, {
        deactivated: !allUsers[uid].deactivated,
      });
    }
  };

  const displayUserActions = (currentUser: Admin | Evaluator | Producer) => {
    return (
      <div className="flex flex-col items-start">
        <button
          className="bg-yellow-200 p-1"
          data-uid={currentUser.uid}
          onClick={changeConfirmation}
          type="button"
        >
          Change confirmation status
        </button>
        <button
          className={`${
            currentUser.deactivated ? "bg-green-200" : "bg-red-200"
          } p-1`}
          data-uid={currentUser.uid}
          onClick={deactivateUser}
          type="button"
        >
          {currentUser.deactivated ? "Activate user" : "Deactivate user"}
        </button>
      </div>
    );
  };

  const displayUserDetail = () => {
    if (allUsers && userDetailId) {
      const currentUser = allUsers[userDetailId];
      console.log(currentUser);
      return (
        <>
          <h2>Selected User Detail:</h2>
          {currentUser.deactivated ? (
            <div className="bg-red-400">DEACTIVATED</div>
          ) : null}
          <div
            className={`${
              currentUser.deactivated ? "bg-red-200" : "bg-neutral-50"
            } flex gap-2`}
          >
            <div className="p-1 flex flex-col gap-1">
              <div>{currentUser.name}</div>
              <div>{currentUser.email}</div>
              <div>role: {currentUser.role}</div>
              <div
                className={currentUser.approved ? "bg-green-400" : "bg-red-400"}
              >
                {currentUser.approved ? "Approved" : "Not Approved"}
              </div>
              <div
                className={
                  currentUser.adminConfirmed ? "bg-green-400" : "bg-red-400"
                }
              >
                {currentUser.adminConfirmed
                  ? "Admin Confirmed"
                  : "Not Admin Confirmed"}
              </div>
            </div>
            <div className="p-1 flex flex-col gap-1">
              {!checkAdmin(currentUser) ? displayAddress(currentUser) : null}
            </div>
            <div className="p-1 flex flex-col gap-1">
              {checkProducer(currentUser) ? displayCertInfo(currentUser) : null}
            </div>
            <div className="p-1 flex flex-col gap-1">
              {displayUserActions(currentUser)}
            </div>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="bg-blue-300 text-brand-black p-8 h-full flex flex-col items-start gap-2">
      <div className="flex flex-wrap gap-2">
        <h1 className="text-3xl my-40 text-center text-red-500">
          PLEASE NOTE: Phase 4 Development Team will not build Administrator
          Dashboard in this phase.
        </h1>
        <div>
          <h1 className="text-3xl">
            Welcome {user && user.name ? user.name : "Producer"}!
          </h1>
          <p>{user ? user.email : null}</p>
          {displayAdminConfirmation()}
        </div>
        {displayUsers()}
        {displayProducts()}
      </div>
      {displayUserDetail()}
    </div>
  );
}
