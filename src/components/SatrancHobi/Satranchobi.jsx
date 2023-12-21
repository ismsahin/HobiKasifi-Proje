import React from 'react'
import { Typography, Button, Card, CardBody, CardFooter } from "@material-tailwind/react";

const Satranchobi = () => {
  const data = [
    {
        imgelink:
            "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        imgelink:
            "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        imgelink:
            "https://images.unsplash.com/photo-1588412079929-790b9f593d8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        imgelink:
            "https://images.unsplash.com/flagged/photo-1570551502611-c590dc45f644?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        imgelink:
            "https://images.unsplash.com/photo-1587888191477-e74ac6bc9c4b?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);











return (
    <div className='  sm:w-8/12 mx-auto shadow-xl bg-blue-gray-200 p-6'>
        <div className=' mx-auto '>
            <Typography className='text-retro_red' variant="h2">Satranç Hobisi</Typography>
            <Typography variant="lead">
            Satranç, iki oyuncu arasında oynanan stratejik bir masa oyunudur. Oyuncular, birbirlerinin 
            krallarını mat etmeye çalışırken farklı taşlarla bir dizi hamle yaparlar. Satranç, dünya 
            genelinde popüler olan ve yüzyıllardır varlığını sürdüren bir oyundur.


            </Typography>

        </div>






        <Card className="my-6 w-6/12 inline-flex md:h-72">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-retro_pink">
                    Temel Unsurlar
                </Typography>
                <Typography>
                    <p>Taşlar: Şah, vezir, kale, at, fil ve piyon olmak üzere altı farklı türde taş bulunur.</p>
                    <p>Tahtalar: 8x8 karelik bir satranç tahtası üzerinde oynanır. Tahtanın her tarafında birbirine paralel sıralar ve sütunlar vardır.</p>
                    <p>Oyun Başlangıcı: Oyuncular, tahtanın karşı köşelerine yerleştirilmiş taşlarla başlarlar.</p>
                    
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">

            </CardFooter>
        </Card>


        <Card className="my-6 w-6/12 inline-flex  md:h-72">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-retro_pink">
                    Faydaları
                </Typography>
                <Typography>
                    <p>Zeka Gelişimi: Satranç, strateji ve planlama yeteneklerini geliştirebilir. Oyuncular, gelecekteki hamleleri düşünerek zihinsel becerilerini sürdürürler.</p>
                    <p>Konsantrasyon: Oyun sırasında dikkat ve konsantrasyonun önemi büyüktür.</p>
                    <p>Karar Verme Becerisi: Satranç, hızlı ve etkili karar verme yeteneği gerektirir.</p>
                    <p>Mental Dayanıklılık: Zorlu durumlarla başa çıkma ve hatalardan öğrenme süreci, mental dayanıklılığı artırabilir.</p>

                </Typography>
            </CardBody>
            <CardFooter className="pt-0">

            </CardFooter>
        </Card>















        <div className="grid gap-4  mx-auto shadow-xl  pb-4">
            <div>
                <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                    src={active}
                    alt=""
                />
            </div>
            <div className="grid grid-cols-5 gap-4">
                {data.map(({ imgelink }, index) => (
                    <div key={index}>
                        <img
                            onClick={() => setActive(imgelink)}
                            src={imgelink}
                            className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                            alt="gallery-image"
                        />
                    </div>
                ))}
            </div>
        </div>

    </div>
)
}

export default Satranchobi