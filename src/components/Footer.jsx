import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedin,
    FaXTwitter,
} from "react-icons/fa6";

function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-[#F8FAFC]">

            <div className="mx-auto max-w-7xl px-6 py-20">

                {/* Top */}

                <div className="grid gap-12 lg:grid-cols-4">

                    {/* Logo */}

                    <div>

                        <h2 className="text-3xl font-bold text-blue-600">
                            Research AI
                        </h2>

                        <p className="mt-5 leading-8 text-gray-600">
                            AI-powered literature reviews,
                            evidence synthesis, citation verification,
                            and research workflows for modern researchers,
                            universities, and R&D teams.
                        </p>

                        {/* Social */}

                        <div className="mt-8 flex gap-4">

                            {[
                                FaGithub,
                                FaLinkedin,
                                FaXTwitter,
                            ].map((Icon, index) => (

                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{
                                        y: -5,
                                        scale: 1.15,
                                    }}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow hover:border-blue-600 hover:text-blue-600 transition"
                                >
                                    <Icon size={18} />
                                </motion.a>

                            ))}

                        </div>

                    </div>

                    {/* Product */}

                    <div className="text-center">

                        <h3 className="text-lg font-semibold">
                            Product
                        </h3>

                        <ul className="mt-6 space-y-4 text-gray-600">


                            <li>
                                <Link to="/" className="hover:text-blue-600">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/product" className="hover:text-blue-600">
                                    Literature Search
                                </Link>
                            </li>

                            <li>
                                <Link to="/pricing" className="hover:text-blue-600">
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link to="/use-cases" className="hover:text-blue-600">
                                    Use Cases
                                </Link>
                            </li>

                            <li>
                                <Link to="/resources" className="hover:text-blue-600">
                                    Resources
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Company */}

                    <div className="text-center">

                        <h3 className="text-lg font-semibold">
                            Company
                        </h3>

                        <ul className="mt-6 space-y-4 text-gray-600">

                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Blog
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Careers
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                    {/* Legal */}

                    <div className="text-center" >

                        <h3 className="text-lg font-semibold">
                            Legal
                        </h3>

                        <ul className="mt-6 space-y-4 text-gray-600">

                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Terms of Service
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    Security
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

                {/* Divider */}

                <div className="my-16 h-px bg-gray-200"></div>

                {/* Citation & Academic Note */}

                <div className="grid gap-10 lg:grid-cols-2">

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="rounded-3xl border bg-white p-8 shadow-sm"
                    >

                        <h3 className="text-xl font-bold text-gray-900">
                            Citation Integrity
                        </h3>

                        <p className="mt-5 leading-8 text-gray-600">

                            Every AI-generated insight is accompanied by
                            verifiable citations from trusted academic sources.

                            Research AI prioritizes transparency,
                            evidence-based reasoning,
                            and citation accuracy to support responsible research.

                        </p>

                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="rounded-3xl border bg-white p-8 shadow-sm"
                    >

                        <h3 className="text-xl font-bold text-gray-900">
                            Academic Use Notice
                        </h3>

                        <p className="mt-5 leading-8 text-gray-600">

                            Research AI assists researchers by organizing,
                            summarizing, and comparing scientific literature.

                            Users should always review original sources and
                            verify citations before publication,
                            teaching, or professional academic use.

                        </p>

                    </motion.div>

                </div>

                {/* Bottom */}

                <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-8 md:flex-row">

                    <p className="text-gray-500">

                        © 2026 Research AI. All rights reserved.

                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-gray-500">

                        <span>Evidence First</span>

                        <span>•</span>

                        <span>Trusted Citations</span>

                        <span>•</span>

                        <span>Built for Researchers</span>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;