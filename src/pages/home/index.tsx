import Banner from "./landing-page-components/banner";
import Feedback from "./landing-page-components/feedback";
import Works from "./landing-page-components/how-it-works";
import Plans from "./landing-page-components/our-plans";
import Testimonials from "./landing-page-components/testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      {/* the below is the detail for yellow feedback section */}
      <Feedback />
      {/* the below is the detail for green how-it-works section */}
      <Works />
      {/* the below is the detail for blue our plans section */}
      <Plans />
      {/* the below is the detail for yellow testimonials section */}
      <Testimonials />
    </>
  );
}
