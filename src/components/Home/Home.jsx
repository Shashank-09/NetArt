import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        
        <div className='grid sm:grid-cols-12 gap-3'>
           <div className='h-auto justify-items-center object-contain sm:col-span-4'>
            <img  className="" src='1.png'/>
           </div>
           <div className="sm:col-span-8" >
            <div className='text-sm text-start font-bold'>
                <p>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            </div>
            <div className='mt-3'>
                <ul className="list-disc ml-5 ">
                    <li className='text-justify'>C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li className='text-justify'>C.R.I. is the highest contributor in the country for the projects of EEL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with loT enabled control panel</li>
                </ul>
            </div>
            <div className='mt-3'>
                <img src='2.png'/>
            </div>
            <div className='mt-3'>
                <p className='text-justify'>Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State</p>
            </div>
           </div>
        </div>
        <div className='grid sm:grid-cols-1 mt-8' >
            <div>
                <p className='text-sm'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            </div>
        </div>
        <div className='grid sm:grid-cols-1 mt-10'>
            <div>
               <img src='3.png' />
            </div>
        </div>
        <div className='grid sm:grid-cols-1 mt-8'>
            <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
            </p>
        </div>
        <div class="border-b-2 border-red-500 mt-4"></div>
        <div className='grid sm:grid-cols-1 mt-4'>
          <div>
            <p className='font-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          </div>
          <div className='mt-4'>
              <p>
              CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP| MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE |
               PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAI
              </p>
          </div>
        </div>
        
        </>
    );
}




