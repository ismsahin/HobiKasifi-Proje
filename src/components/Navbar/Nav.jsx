import React from "react";
import Hobilogo from "../image/Hobilogo.png"
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";

export function Nav() {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-xl"
            >
                <a href="/" className="flex items-center hover:text-retro_pink">
                    Anasayfa
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-xl"
            >
                <a href="/Fotohobi" className=" flex items-center hover:text-retro_pink">
                    <div className="i"></div>Fotoğrafçılık Hobisi
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-xl"
            >
                <a href="/Kamphobi" className="flex items-center hover:text-retro_pink">
                    Kampçılık Hobisi
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-xl"
            >
                <a href="/Satranchobi" className="flex items-center hover:text-retro_pink">
                    Satranç Hobisi
                </a>
            </Typography>
            
        </ul>
    );

    return (
        <div className=" max-h-[768px]  shadow-xl w-full sticky top-0 left-0 z-10 ">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 ">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        className="mr-4 cursor-pointer py-1.5 font-medium text-xl"
                    >
                        <img className='w-52 cursor-pointer ' src={Hobilogo} alt='' />
                    </Typography>
                    <div className="flex items-center ">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center ">
                            <Button
                                variant="text"
                                size="sm"
                                className="hidden lg:inline-block text-sm broder border-solid bg-ferrari_red  py-3"
                            >
                                <a href="/Iletisim" className="flex items-center">
                                    <span className="text-lg text-retro_red font-bold border border-collapse border-retro_red rounded-xl p-2 hover:text-retro_yellow hover:border-retro_yellow">Öneri</span>
                                </a>

                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1 bg-retro_red rounded-xl w-4/12 mx-auto">
                        <Button fullWidth variant="text" size="sm" className="">
                            <a href="/iletisim"><span>Öneri</span></a>
                            
                        </Button>

                    </div>
                </MobileNav>
            </Navbar>

        </div>
    );
}

export default Nav