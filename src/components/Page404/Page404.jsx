import React from 'react'
import { Typography } from "@material-tailwind/react";

const Page404 = () => {
    return (
        <div className='min-h-screen bg-cover mx-auto bg-cover bg-center text-center  bg-[url("https://618media.com/wp-content/uploads/2022/03/websiteilham.png")] '>
            <Typography className='grid' variant="h1" color="blue-gray">
                <a href="/" className='   bg-retro_cyan  rounded-xl px-5 hover:bg-retro_pink hover:drop-shadow-md transition duration-300 ease-in-out m-2'>
                    SAYFA BULUNAMADI
                </a>
                <a href="/" className='   bg-retro_cyan  rounded-xl px-5 hover:bg-retro_pink hover:drop-shadow-md transition duration-300 ease-in-out m-2'>
                    GERİ DÖN
                </a>
            </Typography>

        </div>
    )
}

export default Page404