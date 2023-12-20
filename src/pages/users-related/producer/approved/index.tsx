import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";
// import { ProductsContext } from "@contexts/ProductsContext";

import { Producer } from "src/types/users";

// React icon
import { FaCheckCircle } from "react-icons/fa";

function checkProducer(user: Producer | unknown): user is Producer {
  return (user as Producer).role === "producer";
}

export default function ProducerApproved() {
  const user = useContext(UserContext);
  // const userProducts = useContext(ProductsContext);
  // console.log(userProducts);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  if (user && checkProducer(user)) {
    return (
      <>
        <div className="text-brand-black p-8 flex-1 pt-24 px-10">
          <div className="border-t border-[#D9D9D9]">
            <div className="pt-6 flex justify-between items-center">
              <h1 className="text-3xl text-black">
                Welcome {user && user.name ? user.name : "producer"}!
              </h1>
            </div>
            <span>Your application is approved.</span>
          </div>
          <div className="bg-[#D9D9D9] my-5 mx-10 py-4 px-10 rounded-lg">
            <h3 className="uppercase mb-11 font-semibold font-manrope text-xl">
              Congratulations! You are an approved producer!
            </h3>
            <p className="font-manrope text-base">
              Start your process by purchasing a suitable Pricing plan.{" "}
            </p>
            <p className="font-manrope text-base">
              Click on the plans to learn more.
            </p>
            {/* ===================== information on Pricing ====================== */}
            <div className="flex grid-cols-3 gap-5">
              <div className="bg-white py-8 px-12 mt-10 border-black border">
                <header className="pb-6 border-b border-black">
                  <h3 className="text-base font-manrope font-bold">Explore</h3>
                  <h2 className="text-4xl font-manrope font-bold pt-2">$99</h2>
                  <p className="text-base font-manrope font-semibold">
                    one time charge
                  </p>
                </header>
                <main>
                  {/* for the below title, check with Designer Sally because it does not look bold enough */}
                  <h6 className="text-xs font-manrope font-bold py-6">
                    What's included:
                  </h6>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle />
                    <p className="text-sm font-manrope font-normal">
                      Evaluation Matrix
                    </p>
                  </div>
                  <div className="pl-5">
                    <li className="text-xs font-manrope font-normal">
                      Brand Packaging & Design
                    </li>
                    <li className="text-xs font-manrope font-normal">
                      Product & Pricing performance
                    </li>
                  </div>
                  <div className="py-4">
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-xl" />
                      <p className="text-xs font-manrope font-normal">
                        Ability to exclude 1 U.S. region for evaluation /
                        shipment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle />
                    <p className="text-xs font-manrope font-normal">
                      Access to Feedback library of tools
                    </p>
                  </div>
                </main>
                <footer className="text-center">
                  <button className="text-base text-[#F8FCFE] font-manrope font-semibold bg-[#023047] py-3 w-full rounded-3xl mt-20">
                    Learn more
                  </button>
                </footer>
              </div>
              {/* second box */}
              <div className="mt-10">
                <div className="bg-white py-8 px-12 mx-auto border-black border-4">
                  <header className="pb-6 border-b border-black">
                    <h3 className="text-xl font-manrope font-bold">Consider</h3>
                    <h2 className="text-4xl font-manrope font-bold pt-2">
                      $349
                    </h2>
                    <p className="text-base font-manrope font-semibold">
                      one time charge
                    </p>
                  </header>
                  <main>
                    {/* for the below title, check with Designer Sally because it does not look bold enough */}
                    <h6 className="text-base font-manrope font-bold py-6">
                      Everything in Explore, plus:
                    </h6>
                    <div className="flex items-start gap-2">
                      <FaCheckCircle className="text-2xl" />
                      <p className="text-xs font-manrope font-normal">
                        Quick review summaries by the Feedback (admin) team
                      </p>
                    </div>
                    <div className="flex items-start gap-2 py-4">
                      <FaCheckCircle className="text-3xl" />
                      <p className="text-xs font-manrope font-normal">
                        Additional evaluators ($58 charge for each evaluator,
                        max is 2 evaluators)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle />
                      <p className="text-xs font-manrope font-normal">
                        6 products can be evaluated
                      </p>
                    </div>
                  </main>
                  <footer className="text-center">
                    <button className="text-base text-[#F8FCFE] font-manrope font-semibold bg-[#023047] py-3 w-full rounded-3xl mt-24">
                      Learn more
                    </button>
                  </footer>
                </div>
              </div>
              {/* third box */}
              <div className="bg-white py-8 px-12 mt-10 border-black border">
                <header className="pb-6 border-b border-black">
                  <h3 className="text-xl font-manrope font-bold">Examine</h3>
                  <h2 className="text-4xl font-manrope font-bold pt-2">$569</h2>
                  <p className="text-base font-manrope font-semibold">
                    one time charge
                  </p>
                </header>
                <main>
                  {/* for the below title, check with Designer Sally because it does not look bold enough */}
                  <h6 className="text-base font-manrope font-bold py-6">
                    Everything in Consider, plus:
                  </h6>
                  <div className="flex items-start gap-2">
                    <FaCheckCircle className="text-xl" />
                    <p className="text-xs font-manrope font-normal">
                      Ability to segment into one single region
                    </p>
                  </div>
                  <div className="flex items-start gap-2 py-4">
                    <FaCheckCircle className="text-3xl" />
                    <p className="text-xs font-manrope font-normal">
                      Unlimited amount of 1 hour debriefing calls with the
                      Feedback team
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaCheckCircle className="text-2xl" />
                    <p className="text-xs font-manrope font-normal">
                      Add custom questions before the evaluation starts
                    </p>
                  </div>
                </main>
                <footer className="text-center">
                  <button className="text-base text-[#F8FCFE] font-manrope font-semibold bg-[#023047] py-3 w-full rounded-3xl mt-24">
                    Learn more
                  </button>
                </footer>
              </div>
            </div>
            <div className="text-center">
              <button className="underline font-manrope text-base my-4">
                Compare Plans
              </button>
            </div>
          </div>
        </div>
        <div className="float-right pr-16">
          <Link to="/producer">
            <button className="rounded-lg bg-gray-300 p-5 m-5">
              to the approved dashboard
            </button>
          </Link>
        </div>
      </>
    );
  }
}
