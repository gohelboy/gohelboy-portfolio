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
        <section id='#about' className={`h-screen w-full flex flex-col gap-3 items-center justify-center rounded-t-3xl border border-[--border-color] ${judson.className}`}>
            <div className='w-full max-w-[1280px] flex flex-col gap-14 items-center justify-center relative  p-7'>
                <div className='text-7xl z-50'>Contact<span className='text-[--accent-color] animate-ping'>.</span></div>
                <div className="flex gap-5 w-full">
                    <div className='w-full flex flex-col justify-between items-center relative '>
                        <div className='flex w-full justify-between mt-7 px-10'>
                            <div className='flex w-full flex-col gap-7'>
                                <div>
                                    <div className='text-lg'>Got a project?</div>
                                    <div className='relative w-fit'>
                                        <div className='text-5xl'>Get in touch</div>
                                        <motion.div
                                            animate={{ y: 10 }}
                                            transition={{ ease: "easeInOut", duration: 2, repeat: Infinity, repeatType: "reverse", scale: { duration: 0.3 } }}
                                            whileHover={{ scale: 1.2 }}
                                            className='absolute top-[-50px] right-[-70px]'>
                                            <Image src={"/diamond.svg"} width={76} height={76} alt='diamond' />
                                        </motion.div>
                                    </div>
                                    <div className='text-lg'>Let's chat! I'd love to collaborate on your next dream project.</div>
                                </div>
                                <div className={`flex flex-col gap-4`}>
                                    <div className='flex flex-col w-full'>
                                        <label className="text-lg" htmlFor='last_name'>Your Name</label>
                                        <input id='last_name' className='w-full h-12 p-3 mt-1 font-bold text-xl rounded-lg text-[--primary-bg]' />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label className="text-lg" htmlFor='name'>Email</label>
                                        <input id='email' className='w-full h-12 p-3 mt-1 rounded-lg font-bold text-xl text-[--primary-bg]' />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <label className="text-lg " htmlFor='name'>Message</label>
                                        <textarea id='email ' rows={5} className='w-full mt-1 p-3 font-bold text-[--primary-bg] text-xl  rounded-lg' />
                                    </div>
                                    <button className="bg-[--secondary-bg] relative hover:bg-[--hover-button] text-[--button-text] px-5 py-2 rounded-md font-bold" >
                                        <div className="flex gap-3 items-center justify-center" onMouseEnter={() => setHoverOnSend(true)}
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
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full bg-white rounded-3xl opacity-15"></div>
                </div>
            </div>
        </section>
    )
}

export default Contact