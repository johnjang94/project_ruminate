// The Feedback Part
// === ESSENTIAL QUESTION ===
import RedCircle2 from '@assets/feedback-section/red-circle/red-circle2.svg'
import RedWave from '@assets/feedback-section/red-wave/red-wave.svg'

// === NO MORE ECHO ===
import BigStar from '@assets/feedback-section/echo/echo-stars/big-echostar.svg'
import SmallStar from '@assets/feedback-section/echo/echo-stars/small-echostar.svg'
import BlueCircle from '@assets/feedback-section/echo/echo-circle/blue-circle-underline.svg'
// === SAVE MONEY ===
import QuotationMark from '@assets/feedback-section/save-money/quotation.svg'
import GreenCircle from '@assets/feedback-section/save-money/green-circle.svg'
import GreenWave from '@assets/feedback-section/save-money/green-wave.svg'
// === EVERYWHERE ===
import Everywhere from '@assets/feedback-section/everywhere/everywhere.svg'

export default function Feedback() {
  return (
    <section className='bg-[#FFBA49] pt-40 pb-52 -mt-20 -z-[11] relative'>
    <section>
      <h1 className='text-white text-[140px] font-anton font-normal pl-[534px]'>
        Feedback is...
      </h1>
    </section>
      {/* Essential Question section */}
      <section>
      <div className='flex justify-center -mt-14 -z-[15] relative'>
        <div className='w-[560px] bg-gray-300 '></div>
        <div className='py-20 p-8 bg-[#F4E4BA] w-[560px]'>
        <img src={RedCircle2} alt='Red Circle 2' width={133} className='h-20 -ml-3 relative z-10'/>
          <h1 className='text-[#38342A] text-5xl font-anton font-normal -mt-16 relative'>EVERY ESSENTIAL QUESTION,</h1>
          <h1 className='text-[#38342A] text-5xl font-anton font-normal pt-9'>ANSWERED</h1>
          <img src={RedWave} alt='Red Wave' width={219} className='h-7 mb-10'/>
          <p className='text-[#333333] text-2xl font-manrope font-medium w-[24vw]'>
            Industrial food uses big budgets to learn how to maximize sales. Get the data you need at a fraction of the cost. 
          </p>
        </div>
      </div>
      </section>
      {/* No more echo section */}
      <section>
      <div className='flex -z-[15] relative mt-12 justify-center'>
        <div className='py-12 p-8 bg-[#B3E6FF] w-[560px] px-16'>
          <div className='flex'>
          <img src={BigStar} alt="Big Star" width={65} className='h-9'/>
          <img src={SmallStar} alt="Big Star" width={45} className='h-6'/>
          </div>
          <h1 className='text-[#38342A] text-5xl font-anton font-normal'>NO MORE</h1>
          <h1 className='text-[#38342A] text-5xl font-anton font-normal pt-9'>ECHO CHAMBERS.</h1>
          <img src={BlueCircle} alt='Blue Circle underline' width={400} className='h-4 mb-10'/>
          <p className='text-[#333333] text-2xl font-manrope font-medium w-[24vw]'>
          The praise you hear from your fans feels good, but it doesn’t explain why your sales won’t grow. Feedback recruits passionate professionals with years of experience selling products just like yours. 
          </p>
        </div>
        <div className='w-[560px] bg-gray-300 '></div>
      </div>
      </section>
      {/* Save Money section */}
      <section>
      <div className='flex justify-center mt-12 -z-[15] relative'>
        <div className='w-[560px] bg-gray-300'></div>
        <div className='py-20 p-8 px-16 bg-[#F4E4BA] w-[560px]'>
          <div className='flex gap-20'>
          <img src={QuotationMark} alt='Quotation Mark' width={29} className='h-7 -ml-5'/>
          <img src={GreenCircle} alt='Green Circle' width={130} className='h-24'/>
          </div>
          <h1 className='text-[#38342A] text-5xl font-anton font-normal -mt-20'>SAVE MONEY,</h1>
          <h1 className='text-[#38342A] text-5xl font-anton font-normal pt-9'>MAKE MONEY</h1>
          <img src={GreenWave} alt="Green wavy underline" width={148} className=' mb-10'/>
          <p className='text-[#333333] text-2xl font-manrope font-medium w-[24vw]'>
            Industrial food uses big budgets to learn how to maximize sales. Get the data you need at a fraction of the cost. 
          </p>
        </div>
      </div>
    </section>
    {/* Everywhere section */}
    <section>
      <div className='flex -z-[15] relative mt-12 justify-center'>
        <div className='py-12 p-8 bg-[#F7EDF0] w-[560px] px-16'>
          <div className='flex'>
          </div>
          <h1 className='text-[#38342A] text-5xl font-anton font-normal'>BECAUSE YOU'RE</h1>
          <h1 className='text-[#38342A] text-5xl font-anton font-normal pt-9'>ALREADY EVERYWHERE.</h1>
          <img src={Everywhere} alt="Everywhere Wave" width={248} className='ml-36 mb-10' />
          <p className='text-[#333333] text-2xl font-manrope font-medium w-[24vw]'>
          The praise you hear from your fans feels good, but it doesn’t explain why your sales won’t grow. Feedback recruits passionate professionals with years of experience selling products just like yours. 
          </p>
        </div>
        <div className='w-[560px] bg-gray-300 '></div>
      </div>
      </section>
    </section>
  );
}


