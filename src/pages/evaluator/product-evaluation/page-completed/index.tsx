import LastStep from '@assets/registration/progress-bar-1/step5.svg'
import FinalStep from "@assets/registration/progress-bar-2/page-5"

import { Link } from 'react-router-dom';

export default function EvaluationCompleted() {
    return (
        <div className='py-20 bg-[#345EC9]'>
        <div className='border border-white w-[874px] py-8 mx-auto'>
            <h1 className='text-white text-5xl font-manrope font-bold text-center'>PRODUCT EVALUATION FORM</h1>
            <img src={LastStep} alt="Default Progress Bar" width={648} className='mx-auto' />
            <FinalStep/>
            <div className='flex justify-between px-32'>
            <p className='text-white text-sm font-manrope font-normal'>Personal Info</p>
            <p className='text-white text-sm font-manrope font-normal -ml-4'>Unboxing</p>
            <p className='text-white text-sm font-manrope font-normal'>Senses</p>
            <p className='text-white text-sm font-manrope font-normal ml-5'>Overall</p>
            <p className='text-white text-sm font-manrope font-normal'>Completed</p>
            </div>
        </div>
        <div className='border border-white mx-auto w-[874px] px-14 py-20'>
           <h1 className='text-white text-2xl font-manrope font-normal'>Your review has been submitted!</h1>
           <p className='text-white text-base font-manrope font-medium pt-6 pb-12'>
           We thank you for taking your precious time to leave a review! Your review is important to the producers.<br/><br/>Click below to access your Producer Dashboard!
           </p>
            <button className='text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl'><Link to='/evaluator'>Dashboard</Link></button>
        </div>
    </div>
    );
}