'use client'
import React from 'react';
import { IconBeingepedia, IconInside, IconPN, IconPW, IconTSP } from "./icons"
import { motion } from 'framer-motion'

const Worked = () => {

    const icons = [
        { name: 'Part Note', icon: <IconPN className={"text-[--secondary-bg]  size-32 h-[100px] md:w-[150px] 2xl:w-[200px] opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"} /> },
        { name: 'Inside', icon: <IconInside className={"text-[--secondary-bg] size-32 h-[100px] md:w-[150px] 2xl:w-[200px] opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"} /> },
        { name: 'Property Watch', icon: <IconPW className={"text-[--secondary-bg] size-32 h-[100px] md:w-[150px] 2xl:w-[140px] opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all "} /> },
        { name: 'Bingepedia', icon: <IconBeingepedia className={"text-[--secondary-bg] size-32 h-[100px] md:w-[150px] 2xl:w-[200px] opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"} /> },
        { name: 'Tiffin Service Propvider', icon: <IconTSP className={"text-[--secondary-bg] size-32 h-[100px] md:w-[150px] 2xl:w-[200px] opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all"} /> },
    ]

    return (
        <section className='py-[20px] md:py-[50px] mx-[18px] flex flex-col items-center justify-center p-4 md:gap-7'>
            <div
                className='flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-4 p-7 px-10 border border-[--border-color] w-full md:max-w-[1140px] 2xl:max-w-[1280px] rounded-3xl bg-gradient-to-b from-[#0a0a0a] via-[--primary-bg] to-[--primary-bg] '>
                {icons?.map((icon, i) => <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                    viewport={{ once: true, amount: 1 }}
                    key={i}>
                    {icon.icon}
                </motion.div>)}
            </div>
        </section >
    );
};

export default Worked;
