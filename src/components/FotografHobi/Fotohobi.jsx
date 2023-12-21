import React from 'react'
import { Typography, Button, Card, CardBody, CardFooter } from "@material-tailwind/react";

const Fotohobi = () => {


    const data = [
        {
            imgelink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
    ];

    const [active, setActive] = React.useState(
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    );











    return (
        <div className='  sm:w-8/12 mx-auto shadow-xl bg-blue-gray-200 p-6'>
            <div className=' mx-auto '>
                <Typography className='text-retro_red' variant="h2">Fotoğrafçılık Hobisi</Typography>
                <Typography variant="lead">
                    Fotoğrafçılık, ışığı ve diğer elemanları kullanarak görsel olarak çarpıcı anları yakalamak
                    için bir kamerayı kullanma sanatıdır. Fotoğrafçılık, birçok farklı tür ve tarza sahip olabilir,
                    bu da kişisel tercihlere ve ilgi alanlarına bağlıdır.


                </Typography>

            </div>






            <Card className="my-6 w-6/12 inline-flex md:h-72">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-retro_pink">
                        Temel Unsurlar
                    </Typography>
                    <Typography>
                        <p>Işık: Fotoğrafçılığın temelidir. Doğru ışık, bir fotoğrafın kalitesini büyük ölçüde etkiler.</p>
                        <p>Kompozisyon: Fotoğrafın düzeni ve içeriğiyle ilgilenir. İyi bir kompozisyon, izleyiciye daha etkileyici bir deneyim sunabilir.</p>
                        <p>Odak: Fotoğrafçı, belirli bir öğeyi vurgulamak veya arka planı yumuşatmak için odak kullanabilir.</p>
                        <p>Perspektif: Fotoğrafçının bakış açısı ve çekim noktası, fotoğrafın duygusunu belirleyebilir.</p>
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
                        <p>Yaratıcılık: Fotoğrafçılık, estetik ve sanatı birleştirir, bu da kişisel yaratıcılığınızı ifade etmenin harika bir yoludur.</p>
                        <p>Gözlem Yeteneği: Fotoğrafçılık, çevrenizi daha dikkatli bir şekilde gözlemlemenizi ve güzellikleri fark etmenizi sağlar.</p>
                        <p>Anıların Korunması: Özel anları yakalamak ve hatırlamak için harika bir araçtır.</p>
                        <p>Topluluk Katılımı: Fotoğrafçılık, birçok insanın paylaşım ve eleştiri için çevrimiçi topluluklara katılabileceği bir sosyal aktivite haline gelmiştir.</p>

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

export default Fotohobi