"use client"
import React, { useState } from 'react';

import { RiAddCircleLine } from 'react-icons/ri'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

export const AccordionLayout = ({ title, children, index }: { title: string, children: React.ReactNode, index: number }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const handleSetIndex = (index: number) => (activeIndex !== index) ? setActiveIndex(index) : setActiveIndex(0);
    return (
        <>
            <div className={`overflow-hidden transition-all w-full duration-[150ms] ${activeIndex == index ? "h-auto" : "h-[65px]"}`} onClick={() => handleSetIndex(index)}>
                <div className='flex justify-between mt-2 rounded border-b p-3 cursor-pointer w-full items-center'>
                    <div className='flex items-center'>
                        <div className='flex items-center gap-3'>
                            <RiAddCircleLine className='w-7 h-7' />
                            <div className='font-bold'>{title}</div>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center text-parrajos font-bold'>
                        Entrar
                        <HiOutlineArrowSmRight />
                    </div>
                </div>

                <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6 h-0 block">
                    {children}
                </div>
            </div>

        </>
    );
};
