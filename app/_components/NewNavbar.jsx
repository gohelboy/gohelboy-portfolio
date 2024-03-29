'use client'
import Image from "next/image"
import { Mate_SC } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { motion } from "framer-motion"
import { ChevronsLeft } from 'lucide-react'
import { cn } from "../_utils/helper"

const mate_sc = Mate_SC({ subsets: ['latin'], weight: ["400"] });


const NewNavbar = () => {
    function getCurrentTime() {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Kolkata', // Set the time zone to India (Asia/Kolkata)
            hour12: true, // Use 12-hour format
            hour: 'numeric', // Get hours in numeric format
            minute: '2-digit', // Get minutes in 2-digit format
            second: '2-digit', // Get seconds in 2-digit format
        };
        const indianTime = now.toLocaleString('en-US', options);
        const [time, ampm] = indianTime.split(' ');

        return {
            hours: parseInt(time.split(':')[0]),
            minutes: time.split(':')[1],
            seconds: time.split(':')[2],
            ampm: ampm.toLowerCase(), // Convert AM/PM to lowercase
        };
    }


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState({
        hours: "",
        minutes: "",
        seconds: "",
        ampm: ""
    });
    const [hoverOnClose, setHoverOnClose] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const controlMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }



    const navLinks = [
        { title: "About", href: "#" },
        { title: "Skills", href: "#" },
        { title: "Project", href: "#" },
        { title: "Contact", href: "#" }
    ]



    return (
        <nav className={`${mate_sc.className}  fixed top-7 left-1/2 transform -translate-x-1/2  w-full z-[1] flex items-center justify-center`}>
            <motion.div
                initial={{ height: 0, width: 0, top: 0 }}
                animate={{
                    height: isMenuOpen ? 'auto' : "64px",
                    width: isMenuOpen ? '97%' : "770px",
                    top: isMenuOpen ? "-14px" : 0,
                }}
                className={cn("absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full rounded-2xl bg-[--secondary-bg] overflow-hidden")}
            >
                <div className="p-9 flex w-full justify-between text-[--text-color-3]">
                    <div className="flex flex-col items-cetner justify-center mt-14 " >
                        {navLinks?.map((link, i) => {
                            return <motion.div
                                whileHover={{ x: 7, opacity: 1, borderBottom: "5px solid #A4161A" }}
                                key={i} className="text-[4rem] h-[96px] w-[400px] relative cursor-pointer font-bold hover:text-[--accent-color] filter transition-color overflow-y-hidden">
                                <motion.span key={i}
                                    initial={{ y: "-100px", opacity: 0.5 }}
                                    animate={{ y: isMenuOpen ? "0px" : "-100px", opacity: isMenuOpen ? 1 : 0.5 }}
                                    transition={{ delay: isMenuOpen ? 0.16 * i : 0, duration: 0.5, x: { delay: 0 } }}
                                    className="absolute top-0 flex flex-col ">
                                    {link.title}
                                    <div className="opacity-20">{link?.title}</div>
                                </motion.span>
                            </motion.div>
                        })}
                    </div>


                    <div className="flex flex-col justify-between items-end">
                        <motion.div
                            initial={{ x: "100px", opacity: 0 }}
                            animate={{ x: isMenuOpen ? 0 : "100px", opacity: isMenuOpen ? 1 : 0 }}
                            transition={{ delay: isMenuOpen ? 0.7 : 0 }}
                            onMouseEnter={() => setHoverOnClose(true)}
                            onMouseLeave={() => setHoverOnClose(false)}
                            className="overflow-hidden" >
                            <Button className="overflow-hidden relative flex flex-col items-center justify-center" onClick={controlMenu}>
                                <div className="relative">
                                    <motion.div
                                        initial={{ x: 0, opacity: 1 }}
                                        animate={hoverOnClose ? { x: -70, opacity: 0 } : { x: 0, opacity: 1 }}
                                    >
                                        <ChevronsLeft size={48} />
                                    </motion.div>
                                    <div className="absolute top-0">
                                        <motion.div
                                            initial={{ x: -40, opacity: 0 }}
                                            animate={hoverOnClose ? { x: 0, opacity: 1 } : { x: 70, opacity: 0 }}
                                        >
                                            <ChevronsLeft size={48} />
                                        </motion.div>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center">
                                    <span>C</span>
                                    <span>L</span>
                                    <span>O</span>
                                    <span>S</span>
                                    <span>E</span>
                                </div>
                            </Button>
                        </motion.div>

                        <div className="flex gap-7">
                            <motion.div
                                initial={{ y: "100px", opacity: 0 }}
                                animate={{ y: isMenuOpen ? 0 : "100px", opacity: isMenuOpen ? 1 : 0 }}
                                transition={{ delay: isMenuOpen ? 0.8 : 0 }}
                                className="flex flex-col items-end text-xl">
                                <div>Location</div>
                                <div className="text-3xl font-bold">Gujarat, India</div>
                            </motion.div>
                            <motion.div
                                initial={{ y: "100px", opacity: 0 }}
                                animate={{ y: isMenuOpen ? 0 : "100px", opacity: isMenuOpen ? 1 : 0 }}
                                transition={{ delay: isMenuOpen ? 1 : 0 }} className="flex flex-col items-end  text-xl">
                                <div>Time</div>
                                <div className="text-3xl font-bold">{currentTime.hours}<span className="animate-ping duration-100">:</span>{currentTime.minutes}{" "}{currentTime.ampm}</div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ x: "300px", y: "300px" }}
                    animate={{ x: isMenuOpen ? 0 : "300px", y: isMenuOpen ? 0 : "300px", animation: "" }}
                    transition={{ duration: 1, type: "spring" }}
                    className="absolute bottom-[-50px] right-[-50px] z-[0] overflow-hidden animate-spin1"
                >
                    <Image src={"/globe.svg"} width={300} height={300} alt="globe" className="opacity-10" />
                </motion.div>

            </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="justify-between flex items-center w-[777px] rounded-xl p-3 z-[2] bg-[--primary-bg]" >
                <Image src={"./signature.svg"} width={64} height={64} alt="signature" priority />
                <div className='flex items-center gap-4'>
                    <Button
                        classes={'bg-transparent hover:bg-transparent cursor-pointer text-[--text-color-1] font-normal'}
                        onClick={controlMenu}
                    >
                        Menu
                    </Button>
                    <Button >Let&apos;s talk</Button>
                </div>
            </motion.div>
        </nav >
    )
}

export default NewNavbar