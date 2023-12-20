import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";
import { ProductsContext } from "@contexts/ProductsContext";
import { Evaluator } from "src/types/users";
// import Profile from "@components/user-profile";

function checkEvaluator(user: Evaluator | unknown): user is Evaluator {
  return (user as Evaluator).role === "evaluator";
}

// XXX
// this is a mock-up, ad-hoc dashboard just for experimenting with
// database interactions - not for releases. this will all change, as
// front-end create dashboards from mid-fi designs
export default function EvaluatorDashboard() {
  const user = useContext(UserContext);
  const userProducts = useContext(ProductsContext);
  console.log(userProducts);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const displayApprovalStatus = () => {
    if (user && checkEvaluator(user) && user.approved) {
      return <p className="bg-green-500 p-1">Approved</p>;
    }
    return <p className="bg-rose-500 p-1">Not approved</p>;
  };

  const displayAddress = () => {
    if (user && checkEvaluator(user)) {
      return (
        <div className="bg-neutral-100 text-black p-1">
          <p>Shipping Address:</p>
          <p>{user.address.street}</p>
          <p>{`${user.address.city}, ${user.address.state}`}</p>
          {user.address.unit ? (
            <p>{`unit ${user.address.unit}`}</p>
          ) : null}
          <p>{user.address.zip}</p>
        </div>
      );
    }
    return null;
  };

  const displayProducts = () => {
    if (user && checkEvaluator(user)) {
      return (
        <div className="bg-neutral-100 p-1">
          <h2>Evaluating:</h2>
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
    <div className="bg-blue-300 text-brand-black p-8 h-full">
      <div className="flex flex-wrap gap-2">
        <div>
          <h1 className="text-3xl my-40 text-center text-red-500">
            PLEASE NOTE: Phase 4 Development Team will not build Evaluator
            Dashboard until further notice.
          </h1>
          <h1 className="text-3xl">
            Welcome {user && user.name ? user.name : "Evaluator"}!
          </h1>
          <p>{user ? user.email : null}</p>
          {displayApprovalStatus()}
        </div>
        {displayAddress()}
        {displayProducts()}
      </div>
    </div>
  );
}
