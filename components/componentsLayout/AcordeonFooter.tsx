"use client"
import React, { useState } from 'react';

import { BsChevronDown } from 'react-icons/bs'

export const AcordeonFooter = ({ title, children, index }: { title: string, children: React.ReactNode, index: number }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const handleSetIndex = (index: number) => (activeIndex !== index) ? setActiveIndex(index) : setActiveIndex(0);
    return (
        <>
            <div className={`overflow-hidden block xl:hidden transition-all w-full duration-[150ms] ${activeIndex !== index ? "h-auto" : "h-[65px]"}`} onClick={() => handleSetIndex(index)}>
                <div className='flex justify-between border-b border-black p-3 cursor-pointer w-full items-center'>
                    <div className='flex items-center'>
                        <div className='flex items-center gap-3'>
                            <div className='font-bold'>{title}</div>
                        </div>
                    </div>
                    <div className={`${activeIndex !== index && "rotate-180" } duration-300 transition-all`}>
                        <BsChevronDown  />
                    </div>
                </div>

                <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 h-auto block">
                    {children}
                </div>
            </div>

        </>
    );
};
