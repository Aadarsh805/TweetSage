import React, { useState } from 'react'
import TextField from "@mui/material/TextField";


const Form = () => {

    const [loading, setLoading] = useState(false);
    const [showData, setShowData] = useState(false)
    const [dataLoading, setDataLoading] = useState(false)


    const handleClick = () => {
        setLoading(true);
        const timer = setTimeout(() => {
            console.log("Loading", loading);
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    };

    const handleDataClick = () => {
        setDataLoading(true)
        setShowData(true)
        const timer = setTimeout(() => {
            setDataLoading(false)
        }, 2000);

        return () => clearTimeout(timer);
    }

    return (
        <div className="text-center flex flex-col items-center justify-center w-full max-w-[25em]  mb-20">
            {/* <p className="text-xl sm:text-2xl mb-8 font-semibold">
            What do you want to know about the person?
          </p> */}
            <div className="flex flex-col  item-center gap-2 justify-center w-full">
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                />
                <button
                    onClick={handleClick}
                    className="bg-[#0EA5E9] py-2 px-10 font-bold text-white "
                >
                    Get Tweets
                </button>
                {loading && <p>loading...</p>}
            </div>
            <div className="mt-5 flex flex-col w-full gap-2">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Enter your question"
                // placeholder="Enter your question"
                />
                <button onClick={e => {
                    e.stopPropagation()
                    handleDataClick()
                }} className="bg-[#0EA5E9] mr-10 w-full py-2 text-white font-bold ">
                    Get Data
                </button>
            </div>
        </div>
    )
}

export default Form
