// Testimonial - image .svg
import Testimonial from "@assets/testimonial/testimonial.svg";

export default function Testimonials() {
  return (
    <section className="bg-[#FFBA49] skew-y-1 -mt-16 border-t-[40px] border-black pt-44 pb-32 relative z-50">
      <section className="-skew-y-1">
        <h1 className="text-white text-[140px] font-anton font-normal text-right pr-60 relative z-40">
          Testimonials
        </h1>
        <div className="flex gap-6 -ml-28 -mt-16 relative z-30">
          <div>
            <div className="w-96 bg-[#B3E6FF] pt-10 pb-14 text-center px-16 border-black border-b-[16px]">
              <p className="text-[#333333] text-xl font-manrope font-medium">
                The praise you hear from your fans feels good, but it doesn’t
                explain why your sales won’t grow. Feedback products just like
                yours.
              </p>
            </div>
            <img
              src={Testimonial}
              alt="Testimonial"
              width={100}
              height={100}
              className="absolute ml-36 -mt-12"
            />
            <div className="w-96 bg-[#0090B2] border-black border-t-[16px] h-40"></div>
          </div>
          <div>
            <div className="w-96 bg-[#B3E6FF] pt-10 pb-14 text-center px-16 border-black border-b-[16px]">
              <p className="text-[#333333] text-xl font-manrope font-medium">
                The praise you hear from your fans feels good, but it doesn’t
                explain why your sales won’t grow. Feedback products just like
                yours.
              </p>
            </div>
            <img
              src={Testimonial}
              alt="Testimonial"
              width={100}
              height={100}
              className="absolute ml-36 -mt-12"
            />
            <div className="w-96 bg-[#0090B2] border-black border-t-[16px] h-40"></div>
          </div>
          <div>
            <div className="w-96 bg-[#B3E6FF] pt-10 pb-14 text-center px-16 border-black border-b-[16px]">
              <p className="text-[#333333] text-xl font-manrope font-medium">
                The praise you hear from your fans feels good, but it doesn’t
                explain why your sales won’t grow. Feedback products just like
                yours.
              </p>
            </div>
            <img
              src={Testimonial}
              alt="Testimonial"
              width={100}
              height={100}
              className="absolute ml-36 -mt-12"
            />
            <div className="w-96 bg-[#0090B2] border-black border-t-[16px] h-40"></div>
          </div>
          <div>
            <div className="w-96 bg-[#B3E6FF] pt-10 pb-14 text-center px-16 border-black border-b-[16px]">
              <p className="text-[#333333] text-xl font-manrope font-medium">
                The praise you hear from your fans feels good, but it doesn’t
                explain why your sales won’t grow. Feedback products just like
                yours.
              </p>
            </div>
            <img
              src={Testimonial}
              alt="Testimonial"
              width={100}
              height={100}
              className="absolute ml-36 -mt-12"
            />
            <div className="w-96 bg-[#0090B2] border-black border-t-[16px] h-40"></div>
          </div>
        </div>
      </section>
    </section>
  );
}
