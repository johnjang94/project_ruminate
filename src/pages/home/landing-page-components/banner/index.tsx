// The Banner Part - importing images in .svg
import RedCircle from '@assets/banner/red-circle/red-circle.svg'
import PlayIcon from '@assets/banner/red-button/play-icon.svg'
import Sandwich from '@assets/banner/sandwich/sandwich.svg'
import RedUnderline from '@assets/banner/red-underline/red-underline.svg'

export default function Banner() {
  return (
    <>
    {/* the below section is for the introductory banner */}
      <section className="flex bg-[#4670D9] gap-52 -skew-y-6 -mt-20 -z-[10] relative border-b-[24px] border-black justify-center">
        <div className="pt-36 pb-28 skew-y-6">
          <h1 className="text-white text-7xl font-anton font-normal mb-4">
            Making Good Food Better
          </h1>
        <div className='flex'>
          <img src={RedCircle} alt='Red Circle' width={233} className=' h-36 ml-48 -mt-32'/>
          <img src={RedUnderline} alt="Red Underline" width={169} className='ml-28 -mt-4 mb-5'/>
        </div>
        <h2 className="text-[#BDF0FF] text-4xl font-anton font-normal mb-8">
            THINK LIKE A SCIENTIST. ORGANIZE LIKE AN ACTIVIST.<br/>
            MAKE SMALL BUSINESS THRIVE.
        </h2>
        <p className="text-white text-2xl font-manrope font-normal mb-14">
            Driven by more ethical, equitable, and sustainable foodways,
        </p>
        <button className='bg-[#EF4E5D] rounded-full items-center text-center flex py-4 px-7 gap-4'>
          <span className='text-5xl text-white font-anton font-normal'>GET STARTED</span>
          <img src={PlayIcon} alt="Play Icon" width={30} className='text-white h-[40px]'/>
        </button>
        </div>
        <img src={Sandwich} alt='Sandwich' width={195} className='mt-36 skew-y-6 h-[480px]'/>
      </section>
    </>
  );
}