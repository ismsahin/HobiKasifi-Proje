import React from 'react'
import { Typography, Button, Card, CardBody, CardFooter } from "@material-tailwind/react";

const Kamphobi = () => {
    const data = [
        {
            imgelink:
                "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1487730116645-74489c95b41b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const [active, setActive] = React.useState(
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    );











    return (
        <div className='  sm:w-8/12 mx-auto shadow-xl bg-blue-gray-200 p-6'>
            <div className=' mx-auto '>
                <Typography className='text-retro_red' variant="h2">Kampçılık Hobisi</Typography>
                <Typography variant="lead">
                    Kampçılık, genellikle açık havada geçici konaklamayı içeren bir hobidir. Bu aktivite,
                    doğayla daha yakın bir temas kurma, manzara ve çevreyle etkileşimde bulunma amacı taşır.
                    Çadır ve karan kampı olarak 2 şekilde de yapılabilir.


                </Typography>

            </div>






            <Card className="my-6 w-6/12 inline-flex md:h-72">
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-retro_pink">
                        Temel Unsurlar
                    </Typography>
                    <Typography>
                        <p>Kamp Ekipmanları: Çadır, uyku tulumu, mat, ocak gibi temel ekipmanlar kampçılıkta kullanılır.</p>
                        <p>Açık Hava Aktiviteleri: Yürüyüş, dağ bisikleti, balık tutma gibi aktiviteler kampçılık deneyimini zenginleştirebilir.</p>
                        <p>Doğa İzleme: Kuş gözlemi, yıldız gözlemi gibi doğa gözlemleri de kampçılık sırasında yapılan keyifli aktiviteler arasında yer alır.</p>
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
                        <p>Stres Azaltma: Doğada olmak, stresi azaltabilir ve ruh halini iyileştirebilir.</p>
                        <p>Fiziksel Aktivite: Kampçılık, açık hava aktiviteleri sayesinde fiziksel sağlığı destekleyebilir.</p>
                        <p>Sosyal Bağlar: Aile veya arkadaşlarla yapılan kampçılık, sosyal bağları güçlendirebilir.</p>
                        <p>Doğayla Bağlantı: Kampçılık, doğayla daha yakın bir ilişki kurma fırsatı sunar ve çevre bilincini artırabilir.</p>

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

export default Kamphobi