import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";
import { ProductsContext } from "@contexts/ProductsContext";

import { Producer } from "src/types/users";

function checkProducer(user: Producer | unknown): user is Producer {
  return (user as Producer).role === "producer";
}

// XXX
// this is a mock-up, ad-hoc dashboard just for experimenting with
// database interactions - not for releases. this will all change, as
// front-end create dashboards from mid-fi designs
export default function ProducerDashboard() {
  const user = useContext(UserContext);
  const userProducts = useContext(ProductsContext);
  console.log(userProducts);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const displayAddress = () => {
    if (user && checkProducer(user)) {
      return (
        <>
          <p>{user.address.street}</p>
          <p>{`${user.address.city}, ${user.address.state}`}</p>
          {user.address.unit ? (
            <p>{`unit ${user.address.unit}`}</p>
          ) : null}
          <p>{user.address.zip}</p>
        </>
      );
    }
    return null;
  };

  const displayAdminConfirmation = () => {
    if (user && checkProducer(user) && user.adminConfirmed) {
      return <p className="bg-green-500 p-1">Admin confirmed</p>;
    }
    return <p className="bg-orange-400 p-1">Awaiting admin confirmation</p>;
  };

  const displayApprovalStatus = () => {
    if (user && checkProducer(user) && user.approved) {
      return <p className="bg-green-500 p-1">Approved</p>;
    }
    return <p className="bg-rose-500 p-1">Not approved</p>;
  };

  const displayBusinessInfo = () => {
    return (
      <div className="bg-neutral-100 p-1">
        <p>
          {user && checkProducer(user) && user.businessName
            ? user.businessName
            : null}
        </p>
        <p>
          {user && checkProducer(user) && user.website
            ? user.website
            : null}
        </p>
        {user && checkProducer(user) && user.address
          ? displayAddress()
          : null}
      </div>
    );
  };

  const displayPlanInfo = () => {
    if (user && checkProducer(user)) {
      return (
        <div className="bg-neutral-100 text-black p-1">
          <p>{`Plan: ${user.plan ? user.plan : "N/A"}`}</p>
          <p>Plan info here?</p>
          <p>
            {"Payment: "}
            <span
              className={`p-1 ${
                user.paymentReceived ? "bg-green-300" : "bg-rose-300"
              }`}
            >
              {user.paymentReceived ? "Received" : "Not Received"}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  const displayProducts = () => {
    if (user && checkProducer(user)) {
      return (
        <div className="bg-neutral-100 p-1">
          <h2>Products:</h2>
          {userProducts ? (
            userProducts.map((product) => {
              return (
                <div key={product.productId}>{product.productName}</div>
              );
            })
          ) : (
            <div>No Products =(</div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-blue-300 text-brand-black p-8 h-full flex-1">
      <div className="flex flex-wrap gap-2">
        <div>
          <h1 className="text-3xl">
            Welcome {user && user.name ? user.name : "Producer"}!
          </h1>
          <p>{user ? user.email : null}</p>
          {displayApprovalStatus()}
          {displayAdminConfirmation()}
        </div>
        {displayBusinessInfo()}
        {displayPlanInfo()}
        {displayProducts()}
      </div>
    </div>
  );
}
