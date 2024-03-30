'use client'

import Image from "next/image";
import { useRef } from 'react';
import { useMotionValue, motion } from "framer-motion"
import { Angkor, Mate_SC } from "next/font/google";


const angkor = Angkor({ subsets: ['latin'], weight: ['400'] });
const mate_sc = Mate_SC({ subsets: ['latin'], weight: ['400'] });


const LandingPage = () => {

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
        opacity: useMotionValue(0),
    }
    const containerRef = useRef(null);
    const timerRef = useRef(null);

    const handleMouseMove = (e) => {
        const containerRect = containerRef.current.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left - 50;
        const offsetY = e.clientY - containerRect.top - 50;

        mouse.x.set(offsetX)
        mouse.y.set(offsetY)
        mouse.opacity.set(0.2);


        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            mouse.opacity.set(0);
        }, 3000);
    }


    return (
        <div className="h-screen relative flex flex-col items-center justify-end" onMouseMove={handleMouseMove} ref={containerRef}>
            <div className='absolute top-[70px] right-0 opacity-20 animate-cloudmoveleft'>
                <Image src={"/cloud1.svg"} alt="cloud" width={200} height={200} />
            </div>
            <div className='absolute top-[300px] left-0 animate-cloudmoveright opacity-20'>
                <Image src={"/cloud1.svg"} alt="cloud" width={150} height={150} />
            </div>
            <motion.div
                style={{ x: mouse.x, y: mouse.y, opacity: mouse.opacity, transition: "all 0.3s linear" }}
                className={'absolute top-0 left-0 '}>
                <Image src={"/cloud1.svg"} alt="cloud" width={100} height={100} />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                <Image src={"/bgring.svg"} alt="bg" width={700} height={700} className='animate-spin duration-[5s]' />
            </div>
            <div className='h-fit absoulte bottom-0 flex flex-col justify-center items-center z-[0]'>
                <div className={`relative pt-7`}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ delay: 0 }}
                        className='absolute top-[-24px] right-0  select-none z-[-1]'>
                        <Image src={"/blob.svg"} alt="blob" width={200} height={200} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className={`${mate_sc.className} flex justify-between text-[4rem] absolute top-0 left-[95px]`}> Always </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className={`${mate_sc.className} flex justify-between text-[4rem] absolute top-0 right-[130px] `}>On </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className={`${angkor.className} text-[7rem] font-bold text-stroke`}> Creative Mode </motion.div>
                </div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className='z-10'
                >
                    <Image src={"/me.png"} alt="me" width={800} height={600} />
                </motion.div>
                <motion.div
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.5 }}
                    transition={{ delay: 0.3 }}
                    className='absolute bottom-10 right-10'
                >
                    <Image src={"/signature.svg"} alt="me" width={70} height={70} />
                </motion.div>
            </div>

        </div >
    )
}

export default LandingPage