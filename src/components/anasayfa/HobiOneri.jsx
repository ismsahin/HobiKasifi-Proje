import React from 'react'
import { Typography } from "@material-tailwind/react";

const HobiOneri = () => {
    return (
        <div id='Hobicesit' className=''>
            <div className=' h-[750px] bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1611834422006-f5c6cae90cc1?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] '>
                <div className='p-6 pt-72  flex-wrap flex-col flex justify-end items-end '>
                    <Typography  className='text-xl md:text-4xl font-bold bg-dark_mode w-auto mx-auto text-retro_red p-4 rounded-t-2xl opacity-90 underline'>Hobi Önerisi</Typography>
                    <Typography  className='text-md md:text-2xl bg-dark_mode w-8/12 mx-auto  text-retro_yellow p-3 rounded-xl opacity-90'>
                        İnsanların hobileri çok çeşitli olabilir; örneğin resim yapma, müzikle ilgilenme, spor, yazma, bahçe işleri, koleksiyonculuk gibi birçok farklı alanda hobiler bulunabilir. Hobiler, bireylere stres atma, yaratıcılıklarını geliştirme, yeni insanlarla tanışma ve kendilerini geliştirme fırsatı sunabilir. Herkesin farklı ilgi alanlarına ve yeteneklerine sahip olması nedeniyle, hobiler kişiseldir ve bireyin kendini ifade etme biçimlerinden biridir.
                    </Typography>


                </div>

            </div>


        </div>
    )
}

export default HobiOneri