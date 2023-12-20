import { FaCheckCircle } from "react-icons/fa";

export default function Plans() {
  return (
    <>
      {/* ========================================================================================= */}
      {/* the below is our plans section */}
      <section className="bg-[#4670D9] -skew-y-3 -mt-20 border-t-[24px] border-black pt-48 pb-48">
        <section className="skew-y-3">
          <h1 className="text-white text-[140px] font-anton font-normal text-right pr-48 relative z-[11]">
            Our Plans
          </h1>
          <div className="md:flex px-32 md:gap-9">
            <div className="bg-white py-8 px-12 mt-10 border-black border">
              <header className="pb-6 border-b border-black">
                <h3 className="text-2xl font-manrope font-bold">Explore</h3>
                <h2 className="text-5xl font-manrope font-bold pt-2">$99</h2>
                <p className="text-sm font-manrope font-medium">per package</p>
              </header>
              <main className="w-64">
                {/* for the below title, check with Designer Sally because it does not look bold enough */}
                <h6 className="text-base font-manrope font-bold py-6">
                  What's included:
                </h6>
                <div className="flex items-center gap-2">
                  <FaCheckCircle />
                  <p className="text-sm font-manrope font-normal">
                    Evaluation Matrix
                  </p>
                </div>
                <div className="pl-5">
                  <li className="text-sm font-manrope font-normal">
                    Brand Packaging & Design
                  </li>
                  <li className="text-sm font-manrope font-normal">
                    Product & Pricing performance
                  </li>
                </div>
                <div className="py-4">
                  <div className="flex items-start gap-2">
                    <FaCheckCircle className="text-xl" />
                    <p className="text-sm font-manrope font-normal">
                      Ability to exclude 1 U.S. region for evaluation / shipment
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle />
                  <p className="text-sm font-manrope font-normal">
                    Access to Feedback library of tools
                  </p>
                </div>
              </main>
              <footer className="text-center">
                <button className="text-base text-[#F8FCFE] font-manrope font-semibold bg-[#023047] py-3 w-full rounded-3xl mt-9">
                  Learn more
                </button>
              </footer>
            </div>
            {/* second box */}
            <div className="">
              <div className="bg-black py-2 text-center">
                <p className="text-white text-base font-manrope font-medium">
                  Most Popular
                </p>
              </div>
              <div className="bg-white py-8 px-12 border-black border-4">
                <header className="pb-6 border-b border-black">
                  <h3 className="text-2xl font-manrope font-bold">Consider</h3>
                  <h2 className="text-5xl font-manrope font-bold pt-2">$349</h2>
                  <p className="text-sm font-manrope font-medium">
                    per package
                  </p>
                </header>
                <main className="w-64">
                  {/* for the below title, check with Designer Sally because it does not look bold enough */}
                  <h6 className="text-base font-manrope font-bold py-6">
                    Everything in Explore, plus:
                  </h6>
                  <div className="flex items-start gap-2">
                    <FaCheckCircle className="text-2xl" />
                    <p className="text-sm font-manrope font-normal">
                      Quick review summaries by the Feedback (admin) team
                    </p>
                  </div>
                  <div className="flex items-start gap-2 py-4">
                    <FaCheckCircle className="text-3xl" />
                    <p className="text-sm font-manrope font-normal">
                      Additional evaluators ($58 charge for each evaluator, max
                      is 2 evaluators)
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle />
                    <p className="text-sm font-manrope font-normal">
                      6 products can be evaluated
                    </p>
                  </div>
                </main>
                <footer className="text-center">
                  <button className="text-base text-[#F8FCFE] font-manrope font-semibold bg-[#023047] py-3 w-full rounded-3xl mt-9">
                    Learn more
                  </button>
                </footer>
              </div>
            </div>
            {/* third box */}
            <div className="bg-white py-8 px-12 mt-10 border-black border">
              <header className="pb-6 border-b border-black">
                <h3 className="text-2xl font-manrope font-bold">Examine</h3>
                <h2 className="text-5xl font-manrope font-bold pt-2">$569</h2>
                <p className="text-sm font-manrope font-medium">per package</p>
              </header>
              <main className="w-64">
                {/* for the below title, check with Designer Sally because it does not look bold enough */}
                <h6 className="text-base font-manrope font-bold py-6">
                  Everything in Consider, plus:
                </h6>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-xl" />
                  <p className="text-sm font-manrope font-normal">
                    Ability to segment into one single region
                  </p>
                </div>
                <div className="flex items-start gap-2 py-4">
                  <FaCheckCircle className="text-3xl" />
                  <p className="text-sm font-manrope font-normal">
                    Unlimited amount of 1 hour debriefing calls with the
                    Feedback team
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <FaCheckCircle className="text-2xl" />
                  <p className="text-sm font-manrope font-normal">
                    Add custom questions before the evaluation starts
                  </p>
                </div>
              </main>
              <footer className="text-center">
                <button className="text-base text-[#F8FCFE] font-manrope font-semibold bg-[#023047] py-3 w-full rounded-3xl mt-4">
                  Learn more
                </button>
              </footer>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
