import StepOne from '@assets/registration/progress-bar-1/step1.svg'
import FirstStep from "@assets/registration/progress-bar-2/page-1"

import { Link } from 'react-router-dom';

export default function ProducerPage1() {
    return (
        <div className='py-20 bg-[#345EC9]'>
        <div className='border border-white w-[874px] py-8 mx-auto'>
            <h1 className='text-white text-5xl font-manrope font-bold text-center'>PRODUCER SIGN UP</h1>
            <img src={StepOne} alt="Default Progress Bar" width={648} className='mx-auto' />
            <FirstStep/>
            <div className='flex justify-between px-32'>
            <p className='text-white text-sm font-manrope font-normal'>About You</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal pl-2'>Your Business</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal pl-5'>Your Values</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal pl-2'>How You Found Us</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal -mr-2'>Completed</p>
            </div>
        </div>
        <div className='border border-white mx-auto w-[874px] px-14 py-20'>
            <button className='text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5'><Link to='/producer-default'>Previous</Link></button>
            <button className='text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl'><Link to='/producer-page-2'>Next</Link></button>
        </div>
    </div>
    );
}
