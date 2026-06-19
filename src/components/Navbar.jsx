import { useState, useEffect } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/Paperlane-Logo1.png"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Product", path: "/product" },
        { name: "Use cases", path: "/useCases" },
        { name: "Pricing", path: "/pricing" },
        { name: "Resources", path: "/resources" },
    ];

    return (
        <header className="fixed top-5 left-0 right-0 z-50 px-4">

            {/* Navbar */}
            <div
                className={`mx-auto max-w-4xl transition-all duration-300 ${isOpen ? "rounded-3xl" : "rounded-full"
                    } ${scrolled
                        ? "bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl"
                        : "bg-white shadow-lg"
                    }`}
            >
                <div className="flex h-18 items-center justify-between px-5 md:px-8">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex h-11 w-11 items-center justify-center"
                        >
                            <img
                                src={logo}
                                alt="Paperlane Logo"
                                className="h-11 w-11 rounded-full object-contain"
                            />
                        </motion.div>


                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">

                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `relative text-[16px] font-medium transition ${isActive
                                        ? "text-black"
                                        : "text-gray-500 hover:text-black"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.name}

                                        <motion.span
                                            layoutId="navIndicator"
                                            className="absolute left-0 -bottom-2 h-[2px] bg-blue-600 rounded-full"
                                            animate={{
                                                width: isActive ? "100%" : "0%",
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}

                    </nav>

                    {/* Desktop Button */}
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                        }}
                        whileTap={{
                            scale: 0.98,
                        }}
                        className="hidden lg:flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow-md hover:bg-blue-700 transition"
                    >
                        <a
                            href="#waitlist"
                        >
                            Request Access
                        </a>
                        <motion.div
                            whileHover={{ x: 4 }}
                        >
                            <ArrowRight size={18} />
                        </motion.div>
                    </motion.button>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden"
                    >
                        {isOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>

                </div>
                <div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.25 }}
                                className="mx-auto mt-4 max-w-sm rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl"
                            >

                                <div className="flex flex-col items-center gap-7">

                                    {navItems.map((item) => (

                                        <NavLink
                                            key={item.name}
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-lg font-medium text-gray-700 hover:text-black transition ${isOpen ? "rounded-none" : "lg:rounded-full"
                                                }`}
                                        >
                                            {item.name}
                                        </NavLink>

                                    ))}

                                    <button className="mt-3 flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-white">
                                        Request access
                                        <ArrowRight size={18} />
                                    </button>

                                </div>

                            </motion.div>

                        )}

                    </AnimatePresence>

                </div>

            </div>
        </header>
    );
}

export default Navbar;