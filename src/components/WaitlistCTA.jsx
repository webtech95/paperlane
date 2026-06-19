import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Users,
    BookOpen,
    ShieldCheck,
} from "lucide-react";

function WaitlistCTA() {
    const [email, setEmail] = useState("");
    const [joined, setJoined] = useState(false);
    const [error, setError] = useState("");
    const [count, setCount] = useState(2487);

    useEffect(() => {
        if (!joined) return;

        const timer = setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 600);

        return () => clearTimeout(timer);
    }, [joined]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setError("");
        setJoined(true);
    };

    return (
        <section id="waitlist" className="relative overflow-hidden py-15">

            <div className="mx-auto max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="relative overflow-hidden rounded-[42px] border border-blue-200 bg-gradient-to-br from-blue-700 via-sky-600 to-indigo-700 p-10 shadow-[0_30px_100px_rgba(37,99,235,.35)] md:p-16"
                >

                    {/* Animated Background */}

                    <div className="absolute inset-0">

                        <motion.div
                            animate={{
                                x: [-30, 50, -30],
                                y: [-20, 20, -20],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
                        />

                        <motion.div
                            animate={{
                                x: [40, -40, 40],
                                y: [30, -30, 30],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl"
                        />

                    </div>

                    <div className="relative z-10 text-center">

                        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-xl">

                            <Sparkles size={16} />

                            Early Access Waitlist

                        </span>

                        <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">

                            From raw research
                            <br />

                            to refined insight.

                        </h2>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">

                            Join researchers, universities and R&D teams using AI
                            to search literature, compare evidence,
                            verify citations and publish faster.

                        </p>

                        {/* Form */}

                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 md:flex-row"
                        >

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-16 flex-1 rounded-full border-2 border-white/30 bg-white/95 px-7 text-gray-900 outline-none transition-all placeholder:text-gray-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/30"
                            />

                            <motion.button
                                whileHover={{
                                    scale: 1.04,
                                    y: -2,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                type="submit"
                                disabled={joined}
                                className="flex h-16 items-center justify-center gap-2 rounded-full bg-gray-900 px-10 font-semibold text-white shadow-xl transition hover:bg-black disabled:bg-green-600"
                            >

                                {joined ? "You're In!" : "Request Early Access"}

                                {!joined && <ArrowRight size={18} />}

                            </motion.button>

                        </form>

                        {error && (

                            <p className="mt-2 text-red-200">

                                {error}

                            </p>

                        )}

                        {joined && (

                            <motion.div

                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-300/30 bg-green-500/20 px-6 py-3 text-white backdrop-blur"

                            >

                                <CheckCircle2 />

                                Thanks! You're officially on the waitlist.

                            </motion.div>

                        )}

                        {/* Stats */}

                        <div className="mt-10 grid gap-6 md:grid-cols-4">

                            {[
                                {
                                    icon: <Users size={26} />,
                                    number: `${count.toLocaleString()}+`,
                                    label: "Researchers Waiting",
                                },
                                {
                                    icon: <BookOpen size={26} />,
                                    number: "2M+",
                                    label: "Research Papers",
                                },
                                {
                                    icon: <ShieldCheck size={26} />,
                                    number: "96%",
                                    label: "Citation Accuracy",
                                },
                                {
                                    icon: <Sparkles size={26} />,
                                    number: "12×",
                                    label: "Faster Reviews",
                                },
                            ].map((item, index) => (

                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: index * 0.15,
                                        duration: 0.6,
                                    }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03,
                                    }}
                                    className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl"
                                >

                                    <div className="mb-2 flex justify-center text-white">

                                        {item.icon}

                                    </div>

                                    <h3 className="text-4xl font-bold text-white">

                                        {item.number}

                                    </h3>

                                    <p className="mt-2 text-blue-100">

                                        {item.label}

                                    </p>

                                </motion.div>

                            ))}

                        </div>

                        {/* Trust Badges */}

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">

                            {[
                                "Free during beta",
                                "No credit card required",
                                "Verified citations",
                                "Priority early access",
                            ].map((item, index) => (

                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white backdrop-blur"
                                >

                                    <CheckCircle2
                                        size={16}
                                        className="text-green-300"
                                    />

                                    {item}

                                </motion.div>

                            ))}

                        </div>

                        {/* Bottom Note */}

                        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-blue-100">

                            Research AI is currently in private beta.
                            Early access members receive priority onboarding,
                            unlimited beta access, and the opportunity to help shape
                            the future of AI-powered academic research.

                        </p>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default WaitlistCTA;