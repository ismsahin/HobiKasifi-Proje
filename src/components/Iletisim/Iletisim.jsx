import React, {useState, useEffect}from 'react'

const Iletisim = () => {

    const [backendData, setbackendData] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:5173/api").then(
            response => response.json()
        ).then(
            data => {
                setbackendData(data)
            }
        )
    }, [])






    return (
        <div className='grid md:grid-cols-2  md:gap-6'>
                <div className=''>
                    <form   id='contactForm' method='POST' className="md:max-w-xl max-w-sm  my-20 md:mr-0 mx-auto bg-dark_mode rounded-lg p-6">
                        <div className="">
                            <div className="relative z-0 w-full mb-5 ">
                                <input type="text"
                                    id="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Soyad</label>
                            </div>

                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email"
                                name="email"
                                
                                
                                id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email adresi</label>
                        </div>


                        <div className="relative z-0 w-full mb-5 group">
                            <input type="drivelink"
                                name="drivelink"
                                
                                
                                id="drivelink" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Drive linki</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label for="message" class="block mb-2 text-sm font-medium text-retro_red ">Mesaj</label>
                            <textarea name="message"
                                
                                required id="message" rows="4" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Sorununuzu kısaca yazınız..."></textarea>
                        </div>

                        <button type="submit" className="realative mx-auto  w-full  text-white bg-retro_cyan hover:bg-retro_red focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md  px-5 py-2.5 text-center">Mesaj Gönder</button>
                    </form>

                </div>

                <div className=' my-auto sm:mx-auto md:ml-0 md:w-10/12'  >
                    <img className='' src='https://www.hobimburda.com/upload/news/hobi_nedir.png'></img>
                </div>

            </div>
    )
}

export default Iletisim