import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <div className="bg-zinc-300 w-full h-0.5" />
            <div className="flex flex-col items-center">
                <div className="flex w-full lg:w-[220px] gap-4 sm:gap-5 px-2 sm:px-5 md:mt-10 mt-4 justify-center">
                    <a href="https://www.instagram.com/riseup_code?igsh=MTZqN2kwM3hveDlpZQ==" target="_blank">
                        <img src="Iconos/Instagram.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/rise-up-bb73b52b5/" target="_blank">
                        <img src="Iconos/LinkedIn.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61556582908815" target="_blank">
                        <img src="Iconos/Facebook.svg" className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer" />
                    </a>
                </div>
                <a href="#inicio">
                    <img src="LogoRiseUp/Logo.png" className="w-[100px] lg:w-[150px] mt-2" />
                </a>
                <div className="text-white text-xl sm:text-2xl lg:text-4xl font-light">
                    Copyright © 2024 RiseUp inc.
                </div>
            </div>
        </>
    )
}