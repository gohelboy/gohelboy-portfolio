'use client'
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Judson } from 'next/font/google';
import Image from "next/image";
import { useState } from "react";

const judson = Judson({ subsets: ["latin"], weight: ['400', '700'], });
const Contact = () => {

    const [hoverOnSend, setHoverOnSend] = useState(false);


    return (
        <section id='#about' className={`h-fit flex flex-col gap-3 items-center my-[100px] mx-[18px] ${judson.className}`}>
            <div className='w-full max-w-[1280px] flex flex-col gap-14 items-center justify-center relative mt-7'>
                <div className='text-5xl md:text-7xl z-50'>Contact<span className='text-[--accent-color] animate-ping'>.</span></div>
                <div className="flex flex-col md:flex-row gap-20 md:gap-5 w-full">
                    <div className='w-full flex flex-col justify-between items-center relative'>
                        <div className='flex w-full flex-col gap-7'>
                            <div>
                                <div className='text-lg'>Got a project?</div>
                                <div className='relative w-fit'>
                                    <div className='text-5xl'>Get in touch</div>
                                    <motion.div
                                        animate={{ y: 10 }}
                                        transition={{ ease: "easeInOut", duration: 2, repeat: Infinity, repeatType: "reverse", scale: { duration: 0.3 } }}
                                        whileHover={{ scale: 1.2 }}
                                        className='absolute top-[-40px] right-[-70px]'>
                                        <Image src={"/diamond.svg"} width={70} height={70} alt='diamond' />
                                    </motion.div>
                                </div>
                                <div className='text-lg'>Let's chat! I'd love to collaborate on your next dream project.</div>
                            </div>
                            <div className={`flex flex-col gap-4`}>
                                <div className='flex flex-col w-full'>
                                    <label className="text-lg" htmlFor='name'>Your Name</label>
                                    <input id='name' className='w-full h-12 p-3 mt-1 font-bold text-xl rounded-lg text-[--primary-bg] bg-[--secondary-bg]' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className="text-lg" htmlFor='email'>Email</label>
                                    <input id='email' className='w-full h-12 p-3 mt-1 rounded-lg font-bold text-xl text-[--primary-bg] bg-[--secondary-bg]' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className="text-lg " htmlFor='message'>Message</label>
                                    <textarea id='message' rows={5} className='w-full mt-1 p-3 font-bold text-[--primary-bg] text-xl  rounded-lg bg-[--secondary-bg]' />
                                </div>
                                <button className="bg-[--secondary-bg] relative hover:bg-[--hover-button] text-[--button-text] px-5 py-2 rounded-md font-bold flex gap-3 items-center justify-center"
                                    onMouseEnter={() => setHoverOnSend(true)}
                                    onMouseLeave={() => setHoverOnSend(false)}>
                                    <span className="text-xl font-bold">Send Message</span>
                                    <div className="relative">
                                        <motion.div
                                            initial={{ x: 0, opacity: 1 }}
                                            animate={hoverOnSend ? { x: 35, opacity: 0 } : { x: 0, opacity: 1 }}
                                        >
                                            <MoveRight />
                                        </motion.div>
                                        <div className="absolute top-0">
                                            <motion.div
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={hoverOnSend ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                                            >
                                                <MoveRight />
                                            </motion.div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full rounded-3xl p-3 border border-[--border-color] relative">
                        <motion.div
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{ y: -20, opacity: 1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ y: { delay: 1 }, opacity: { delay: 1 } }}
                            className="absolute top-[-10px] right-[20px] ">
                            <Image src={"/pin.svg"} width={24} height={24} alt='pin' />
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="w-full h-[350px] md:h-full rounded-2xl overflow-hidden">
                            <iframe className="filter grayscale invert w-full h-full"
                                src="https://maps.google.com/maps?hl=en&amp;q=veraval%20Veraval+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact