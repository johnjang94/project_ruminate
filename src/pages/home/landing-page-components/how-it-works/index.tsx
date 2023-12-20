import ItWorks from '@assets/how-it-works/how-it-works.svg'

export default function Works() {
  return (
    <section className='bg-[#008839] skew-y-3 -mt-10 border-t-[24px] border-black pt-72 pb-56'>
      <section className='-skew-y-3'>
        <h1 className='text-white text-[140px] font-anton font-normal pl-52'>
          How it works
        </h1>
        <div className='bg-[#1F271B] w-[1205px] py-48 pl-24 mx-auto -mt-16'>
          <img src={ItWorks} alt="how-it-works" />
        </div>
      </section>
    </section>
  );
}

