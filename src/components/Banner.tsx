'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import getMe from '@/libs/getMe';
import  {Leckerli_One } from 'next/font/google';

const leck = Leckerli_One({
    subsets: ["latin"],
    weight: '400'
  });

export default function Banner () {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    const { data: session } = useSession()

    return (
        <div className={styles.banner} onClick={()=> { setIndex(index+1) }}>
            <div className="flex flex-row h-full justify-center items-center py-20">
          <div  className="w-1/2 h-full bg-white mx-20 rounded-3xl shadow-lg shadow-black-200 flex justify-center items-center">
            <div className = "text-[200px] text-center text-red-400  hover:text-red-600 transition-all duration-300 transform hover:text-[300px]"><div className={leck.className} >CarB</div></div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-start items-start">
            <div className = "text-8xl text-center text-white font-bold drop-shadow-xl">
            CarB
            </div>
            <div className="mr-32 text-white font-bold text-3xl mt-10 drop-shadow-xl">
            a user-friendly online platform that simplifies car rental reservations. It offers an intuitive interface and robust features for searching, booking, and managing vehicle rentals efficiently.
            </div>
            </div>
        </div>

        </div>

    );
}
