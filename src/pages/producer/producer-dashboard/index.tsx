import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";

import { Producer } from "src/types/users";

function checkProducer(user: Producer | unknown): user is Producer {
  return (user as Producer).role === "producer";
}

export default function ProducerDashboard() {
  const user = useContext(UserContext);

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
          <p>{user.info.address.street}</p>
          <p>{`${user.info.address.city}, ${user.info.address.state}`}</p>
          {user.info.address.unit ? (
            <p>{`unit ${user.info.address.unit}`}</p>
          ) : null}
          <p>{user.info.address.zip}</p>
        </>
      );
    }
    return null;
  };

  const displayAdminConfirmation = () => {
    if (user && checkProducer(user) && user.info.adminConfirmed) {
      return <p className="bg-green-500 p-1">Admin confirmed</p>;
    }
    return <p className="bg-orange-400 p-1">Awaiting admin confirmation</p>;
  };

  const displayApprovalStatus = () => {
    if (user && user.approved) {
      return <p className="bg-green-500 p-1">Approved</p>;
    }
    return <p className="bg-rose-500 p-1">Not approved</p>;
  };

  const displayBusinessInfo = () => {
    return (
      <div className="bg-neutral-100 text-brand-black p-1">
        <p>
          {user && checkProducer(user) && user.info.businessName
            ? user.info.businessName
            : null}
        </p>
        <p>
          {user && checkProducer(user) && user.info.website
            ? user.info.website
            : null}
        </p>
        {user && checkProducer(user) && user.info.address
          ? displayAddress()
          : null}
      </div>
    );
  };

  const displayPlanInfo = () => {
    if (user && checkProducer(user)) {
      return (
        <div className="bg-neutral-100 text-brand-black p-1">
          <p>{`Plan: ${user.info.plan ? user.info.plan : "N/A"}`}</p>
          <p>Plan info here?</p>
          <p>
            {"Payment: "}
            <span
              className={`p-1 ${
                user.info.paymentReceived ? "bg-green-300" : "bg-rose-300"
              }`}
            >
              {user.info.paymentReceived ? "Received" : "Not Received"}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-brand-blue text-neutral-50 p-8 min-h-[400px]">
      <div className="flex flex-wrap gap-2">
        <div>
          <h1 className="text-3xl">
            Welcome {user && user.info.name ? user.info.name : "Producer"}!
          </h1>
          <p>{user ? user.info.email : null}</p>
          {displayApprovalStatus()}
          {displayAdminConfirmation()}
        </div>
        {displayBusinessInfo()}
        {displayPlanInfo()}
      </div>
    </div>
  );
}
