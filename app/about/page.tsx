"use client";

import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { ColorRing } from 'react-loader-spinner'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import copy from "copy-to-clipboard"

const Page = () => {

    const exampleQuestion = [
        "Tell me about the person",
        "Tell me 5 jokes on that person",
        "How will u describe the person above",
        "Tell something about the person in a sentence"

    ]

    const [loading, setLoading] = useState(false)
    const [ copyText, setCopyText ] = useState("")

    const handleClick = () => {
        setLoading(true)
        const timer = setTimeout(() => {
            console.log("Loading", loading)
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)

    }



    const Examples = () => {
        return (
            exampleQuestion.map((item, index) => (
                <div key={index} className='flex items-center justify-between bg-gray-100 mb-5 py-2 px-3'>
                    <p>{item}</p>
                    <div onClick={navigator.clipboard.writeText(item)}>
                        <ContentPasteIcon className='cursor-pointer' />
                    </div>
                </div>
            ))
        )
    }

    return (
        <div className='bg-[#E8D7F1] w-full h-full flex flex-col items-center  mx-auto' >

            <div className='text-center my-20 flex flex-col item-center gap-2'>
                {/* <h4 className='font-bold text-[#0EA5E9] text-xl tracking-wider'>Tweet Sage</h4> */}
                <p className='text-3xl sm:text-4xl lg:text-5xl font-semibold  w-[13em] sm:w-[14em] md:w-[15em] lg:w-[17em] text-[#932F6D]'>Why Tweet Sage? <br /> Because your tweets deserve some sage advice.</p>
            </div>
            <div className='flex flex-col-reverse items-center justify-center'>
                <div className='text-center flex flex-col items-center justify-center w-[20em]'>
                    <p className='text-xl sm:text-2xl mb-8 font-semibold'>What do you want to know about the person?</p>
                    <div className='flex flex-col  item-center gap-2 justify-center w-full'>
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                        <button onClick={handleClick} className='bg-[#0EA5E9] py-2 px-10 font-bold text-white'>Get Tweets</button>
                        {loading && <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />}
                    </div>
                    <div className='mt-5 flex flex-col w-full gap-2'>
                        <TextField id="outlined-basic" variant="outlined" placeholder='Enter your question' />
                        <button className='bg-[#0EA5E9] mr-10 w-full py-2 text-white font-bold'>Get Data</button>
                    </div>
                </div>
                <a href="/start"><button className='bg-[#0EA5E9] py-3 px-5 mt-20'>Go to start</button></a>

                <div>
                    <h2 className='font-semibold text-lg'>Try these questions:</h2>
                    <div className='bg-white w-[20em] h-full mb-10 pt-3 pb-2 px-4'>
                        <div className='flex items-center justify-between  w-full  '>
                            <div className='flex items-center justify-center gap-2'>
                                <span className='w-4 h-4 rounded-full bg-[#C884A6]'></span>
                                <span className='w-4 h-4 rounded-full bg-[#FFE74C]'></span>
                                <span className='w-4 h-4 rounded-full bg-[#81F495]'></span>
                            </div>

                            <h1 className='bg-[#0EA5E9] text-white font-bold py-1.5 px-3 rounded-full '>Tweet Sage</h1>
                        </div>

                        <div className=' mt-2'>
                            <Examples />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

// 1. Tell me about the person
// 2. Tell me 5 jokes on that person
// 3. How will u describe the person above 
// 4. Tell 5 good points on this person 
// 5. Tell something about the person in a sentence 