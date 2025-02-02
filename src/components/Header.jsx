import { FiMenu, FiX } from "react-icons/fi"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useState } from "react"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <header className="h-20 fixed top-0 left-0 w-full flex items-center bg-gradient-to-b from-stone-900 to-stone-900/0">
            <div className="flex items-center mx-auto justify-between w-full px-4 md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
                <Link to={"/"} >
                    <h1>
                        <img src="/images/logo.svg" width={30} height={30} alt="" />
                    </h1>
                </Link>
                <div className="md:justify-self-center relative">
                    <button onClick={() => setNavOpen(pre => !pre)} className="menu-btn">
                        {
                            navOpen ?
                                <FiX className="size-5" />
                                :
                                <FiMenu className="size-5" />
                        }
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <Link to={"/#contact"} className="btn btn-secondary md:justify-self-center capitalize">
                    contact me
                </Link>
            </div>
        </header>
    )
}

export default Header