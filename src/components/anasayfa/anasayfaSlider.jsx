import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";



const anasayfaSlider = () => {
  return (
    <div >
      <Carousel className="h-[750px] ">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1614707151457-59f2d8234cf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 1"
            className="h-[750px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl text-retro_red"
              >
                Hobi nedir?
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Hobi, kişinin keyif alarak ve isteyerek zaman geçirdiği, genellikle boş zamanlarını değerlendirdiği bir aktivitedir. Hobi, kişinin ilgi duyduğu, becerilerini geliştirdiği veya sadece eğlendiği bir alandır.
              </Typography>
              <div className="flex justify-center ">

                <a href="#Hobicesit" className='text-white   bg-cyan font-medium rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN BİLGİ AL</a>


              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://tavsiyelist.com/wp-content/uploads/2018/07/Geli%C5%9Fim.jpg"
            alt="image 2"
            className="h-[750px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
            <div className="w-3/4 pr-12 md:w-2/4 md:pl-20 ">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl text-retro_yellow"
              >
                Hobinin Faydaları
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Hobilerin insanlara birçok faydası bulunmaktadır. Bunlardan bazıları: Stres Azaltma, Yaratıcılığı Geliştirme, Zihinsel Sağlığı Destekleme, 
                Sosyal Bağları Güçlendirme, Kendine Güveni Artırma, Zamanı Etkili Kullanma, Fiziksel Sağlığı İyileştirme gibi.
              </Typography>

            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 3"
            className="h-[750px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/80">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl text-retro_pink"
              >
                Fotoğrafçılık Hobisi
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Fotoğrafçılık, ışığı ve diğer elemanları kullanarak görsel olarak çarpıcı anları yakalamak için bir kamerayı kullanma sanatıdır. 
                Fotoğrafçılık, birçok farklı tür ve tarza sahip olabilir, bu da kişisel tercihlere ve ilgi alanlarına bağlıdır.


              </Typography>
              <div className="flex justify-center ">

                <a href="/Fotohobi" className='text-white   bg-cyan font-medium rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN BİLGİ AL</a>


              </div>

            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1603114595741-e60bf9486e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 4"
            className="h-[750px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/80">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl text-retro_pink"
              >
                Kampçılık Hobisi
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Kampçılık, genellikle açık havada geçici konaklamayı içeren bir hobidir. Bu aktivite, doğayla daha yakın bir temas kurma, 
                manzara ve çevreyle etkileşimde bulunma amacı taşır. 



              </Typography>
              <div className="flex justify-center ">

                <a href="/Kamphobi" className='text-white   bg-cyan font-medium rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN BİLGİ AL</a>


              </div>

            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 5"
            className="h-[750px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/80">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl text-retro_pink"
              >
                Satranç Hobisi
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Satranç, iki oyuncu arasında oynanan stratejik bir masa oyunudur. Oyuncular, birbirlerinin krallarını mat etmeye çalışırken farklı taşlarla bir dizi hamle yaparlar. 
                Satranç, dünya genelinde popüler olan ve yüzyıllardır varlığını sürdüren bir oyundur.


              </Typography>
              <div className="flex justify-center ">

                <a href="/Satranchobi" className='text-white   bg-cyan font-medium rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN BİLGİ AL</a>


              </div>
            </div>
          </div>
        </div>

      </Carousel>

    </div>
  )
}

export default anasayfaSlider