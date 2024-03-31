import React from 'react'
import { IconAE, IconAI, IconAWS, IconBlender, IconBootstrap, IconConvex, IconCsharp, IconCSS, IconDesign, IconDEV, IconExpress, IconFigma, IconFirebase, IconGameDev, IconHTML, IconJS, IconMongo, IconNextJS, IconNODE, IconPR, IconPS, IconReact, IconRedux, IconSCSS, IconShadCN, IconShapes, IconSocket, IconSQL, IconStripe, IconTailwind, IconUnity, IconXD } from './icons'

const Skills = () => {
    return (
        <section className='mt-[100px] flex items-center justify-center'>
            <div className='w-full max-w-[1280px] flex flex-col gap-7'>
                <div className='text-7xl'>What i am good at</div>
                <div className='border border-[--border-color] bg-[#0D0D0D] rounded-3xl h-[240px] p-4 flex'>
                    <div className='flex flex-col justify-between border-[--border-color] bg-[--primary-bg] p-4 rounded-2xl'>
                        <span className='text-5xl'>Web <br />Development</span>
                        <IconDEV className={'self-end size-10'} />
                    </div>
                    <div className='flex items-center '>
                        <div className='flex items-center justify-center flex-wrap gap-9  my-auto'>
                            <IconJS className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconReact className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconRedux className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconNextJS className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconNODE className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconExpress className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconSCSS className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconSQL className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconMongo className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconConvex className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconFirebase className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconBootstrap className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconShadCN className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconTailwind className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconSocket className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconAWS className={"size-14 opacity-70 hover:opacity-100 "} />
                            <IconStripe className={"size-14 opacity-70 hover:opacity-100 "} />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-7'>
                    <div className='border border-[--border-color] bg-[#0D0D0D] rounded-3xl p-4 flex flex-col gap-5'>
                        <div className='flex flex-col justify-between border-[--border-color] bg-[--primary-bg] p-4 rounded-2xl h-[160px]'>
                            <span className='text-5xl'>Web <br />Designing</span>
                            <IconDesign className={'self-end '} />
                        </div>
                        <div className='flex items-center justify-center mb-3'>
                            <div className='flex items-center justify-center flex-wrap gap-9 '>
                                <IconFigma className={"size-14 opacity-70 hover:opacity-100 "} />
                                <IconXD className={"size-14 opacity-70 hover:opacity-100 "} />
                                <IconHTML className={"size-14 opacity-70 hover:opacity-100 "} />
                                <IconCSS className={"size-14 opacity-70 hover:opacity-100 "} />
                            </div>
                        </div>
                    </div>
                    <div className='border border-[--border-color] bg-[#0D0D0D] rounded-3xl p-4 flex flex-col gap-5'>
                        <div className='flex flex-col justify-between border-[--border-color] bg-[--primary-bg] p-4 rounded-2xl h-[160px]'>
                            <span className='text-5xl'>Graphic <br />Designing</span>
                            <IconShapes className={'self-end '} />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex items-center justify-center flex-wrap gap-9'>
                                <IconAI className={"size-14 opacity-70 hover:opacity-100 "} />
                                <IconPS className={"size-14 opacity-70 hover:opacity-100 "} />
                                <IconAE className={"size-14 opacity-70 hover:opacity-100 "} />
                                <IconPR className={"size-14 opacity-70 hover:opacity-100 "} />
                            </div>
                        </div>
                    </div>
                    <div className='border border-[--border-color] bg-[#0D0D0D] rounded-3xl p-4 flex flex-col gap-5'>
                        <div className='flex flex-col justify-between border-[--border-color] bg-[--primary-bg] p-4 rounded-2xl h-[160px]'>
                            <span className='text-5xl'>Game <br />Development</span>
                            <IconGameDev className={'self-end '} />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex items-center justify-center flex-wrap gap-9 '>
                                <IconUnity className={"size-14 opacity-70 hover:opacity-100 "} />
                                <IconCsharp className={"size-14 opacity-70 hover:opacity-100 "} />
                                <IconBlender className={"size-14 opacity-70 hover:opacity-100 "} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills