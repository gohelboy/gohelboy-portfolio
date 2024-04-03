'use client'
import { motion } from "framer-motion"
import { useState } from "react"
import React from 'react'
import Image from 'next/image'
import { IconBootstrap, IconConvex, IconCSS, IconExpress, IconFirebase, IconHTML, IconLinkArrow, IconMongo, IconNextJS, IconNODE, IconPartNote, IconReact, IconRedux, IconSCSS, IconShadCN, IconTailwind } from './icons'
import { cn } from "../_utils/helper"
import Link from "next/link"

const Projects = () => {
    const [hoverStates, setHoverStates] = useState(Array(5).fill(false)); // Assuming 4 projects initially

    const startHover = (index) => {
        setHoverStates((prev) => prev.map((state, i) => (i === index ? true : state)));
    };

    const endHover = (index) => {
        setHoverStates((prev) => prev.map((state, i) => (i === index ? false : state)));
    };
    const Projects = [
        {
            logo: <IconPartNote className={"w-[150px] fill-[--secondary-bg]"} />,
            description: "Part Important Note is a dynamic platform designed for real-time collaboration, robust idea discussion, and rough drawing capabilities. With live editing and instant updates, teams seamlessly capture and discuss ideas while visually mapping them. Integration with project management tools enhances productivity, making it essential for streamlined teamwork and efficient idea management.",
            icons: [IconNextJS, IconTailwind, IconConvex, IconShadCN],
            image: <Image src={"/pn1.png"} width={700} height={700} alt='PartNote' />,
            link: "https://partnote.vercel.app/",

        },
        {
            logo: <Image src={"/pw.png"} width={100} height={100} alt='Property Watch' />,
            description: "Property Watch is a versatile platform where users and brokers list properties for periodic checks, including damage inspections. When a checker reports an issue, the platform notifies the owner or admin, ensuring prompt attention to property maintenance. Users can also add different property types and access educational courses and videos on real estate.",
            icons: [IconReact, IconRedux, IconHTML, IconSCSS, IconBootstrap, IconFirebase],
            image: <Image src={"/pw1.png"} width={700} height={700} alt='property watch' />,
            link: "https://app.propertywatch.com/",
        },
        {
            logo: <Image src={"/inside.svg"} width={100} height={100} alt='Inside' />,
            description: "The EMS system for company management integrates a sophisticated leave system, project management tools, task tracking capabilities, and employee activity management. It also includes robust HR department functionalities such as employee records management, payroll processing, benefits administration, and compliance tracking. This comprehensive platform streamlines processes, enhances communication, improves collaboration, and boosts productivity across departments within the organization.",
            icons: [IconReact, IconRedux, IconHTML, IconSCSS, IconBootstrap, IconFirebase],
            image: <Image src={"/i1.png"} width={700} height={700} alt='Inside' />,

        },
        {
            logo: <Image src={"/bingepedia.png"} width={150} height={150} alt='Bingepedia' />,
            description: "Beingepedia is a visually appealing platform where users can effortlessly discover trending movies and series. It features a comprehensive search function for all types of shows, allowing easy exploration of diverse content. Users can create personalized accounts to manage their viewing experience by adding content to their watchlist or watched list, making it a convenient way to stay updated with the latest trends.",
            icons: [IconReact, IconRedux, IconHTML, IconCSS, IconMongo, IconExpress, IconNODE],
            image: <Image src={"/bp1.png"} width={700} height={700} alt='Bingepedia' />,
            link: "https://bingepedia.vercel.app/",
        },
        {
            logo: <Image src={"/tsp.svg"} width={150} height={150} alt='TSP' />,
            description: "Beingepedia is a visually appealing platform where users can effortlessly discover trending movies and series. It features a comprehensive search function for all types of shows, allowing easy exploration of diverse content. Users can create personalized accounts to manage their viewing experience by adding content to their watchlist or watched list, making it a convenient way to stay updated with the latest trends.",
            icons: [IconReact, IconRedux, IconHTML, IconCSS, IconMongo, IconExpress, IconNODE],
            image: <Image src={"/tsp1.jpg"} width={700} height={700} alt='Bingepedia' />,
        },
    ];

    return (
        <section id="projects" className='mx-[18px] flex items-center justify-center py-[100px]'>
            <div className='max-w-[1280px] w-full flex flex-col gap-9'>
                <div className='text-5xl md:text-7xl text-center'>Projects</div>
                {Projects?.map((project, i) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: "20px" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            key={i}
                            className={cn(`group border border-[--border-color] w-full rounded-3xl p-1 md:p-3 bg-gradient-to-b from-[#0f0f0f] to-[--primary-bg] flex md:flex-row gap-3 md:gap-7`, i % 2 === 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row")}
                            onMouseEnter={() => startHover(i)}
                            onMouseLeave={() => endHover(i)}
                        >
                            <div className='bg-[#151515] w-full rounded-2xl flex items-center justify-center text-7xl p-1 md:p-2 border-[--border-color] relative cursor-pointer' >
                                <div className={cn("absolute bottom-0 left-0 opacity-0 transition-all",
                                    hoverStates[i] && "opacity-100 bottom-3 left-3 md:bottom-6 md:left-6")}>
                                    <IconLinkArrow className={"fill-[--secondary-bg] w-4 md:w-auto"} />
                                </div>
                                <Link href={project?.link ?? "#projects"} onMouseEnter={() => startHover(i)}
                                    onMouseLeave={() => endHover(i)}>
                                    <div className={cn("overflow-hidden rounded-xl group-hover:rounded-bl-[100px] md:group-hover:rounded-bl-[200px] transition-all duration-300", hoverStates[i] ? 'scale-[0.98]' : "scale-[1]")}
                                    >{project.image}</div>
                                </Link>
                            </div>
                            <div className='w-full flex flex-col gap-4 md:gap-7 justify-between p-4'>
                                <div className={cn("", i % 2 === 0 ? "self-start" : "md:self-end")}> {project.logo} </div>
                                <p className='md:text-lg'>{project.description}</p>
                                <div className='gap-4 items-end grid' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(40px,1fr))" }}>
                                    {project.icons.map((Icon, j) => (
                                        <motion.div key={j}
                                            initial={{ opacity: 0, y: "20px" }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 * j }}
                                        >
                                            <Icon className={"size-10"} />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects
