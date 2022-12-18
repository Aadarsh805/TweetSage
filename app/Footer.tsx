import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import Faqs from "./Faqs";


// #f7f9fc
const Footer = () => {
    return (
        <div className='bg-[#f7f9fc] w-full flex flex-col md:flex-row md:justify-between md:px-8 items-center justify-center gap-5 py-8 md:py-6 mt-12 mb-6 text-[#535479] rounded-lg max-w-[65em]'>
            <Faqs />
            <div className='flex items-center justify-center gap-4'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>

            <div className='flex items-center justify-center gap-4 md:gap-6 text-[#6c6f93]'>
                <Link href='#'>
                    <TwitterIcon className='text-2xl cursor-pointer  md:text-[32px]' />
                </Link>
                <Link href='#'>
                    <FacebookRoundedIcon className='text-2xl cursor-pointer md:text-[32px]' />
                </Link>
                <Link href='#'>
                    <GitHubIcon className='text-2xl cursor-pointer md:text-[32px]' />
                </Link>
            </div>
        </div>
    )
}

export default Footer
