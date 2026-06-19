import { motion } from "framer-motion";
import {
    BookOpen,
    FileText,
    GraduationCap,
    ArrowRight,
    Search,
    BrainCircuit,
    CheckCircle2,
    Clock3,
    ShieldCheck,
    Database,
    FileSearch,
    Workflow,
    Lock,
    Mail,
    Newspaper,
    Calendar,
} from "lucide-react";
import FadeIn from "../FadeIn"


function Resources() {
    return (
        <main>

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#F8FAFC] pt-36 pb-20">

                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl"></div>

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* Left */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .7 }}
                        >

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                Resources
                            </span>

                            <h1 className="mt-8 text-6xl font-bold leading-tight text-gray-900">

                                Learn better
                                research workflows.

                            </h1>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Discover practical guides,
                                AI research techniques,
                                citation best practices,
                                and workflow tutorials
                                trusted by researchers worldwide.

                            </p>

                            <div className="mt-10 flex gap-5">

                                <button className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white hover:bg-blue-700">

                                    Explore Guides

                                    <ArrowRight size={18} />

                                </button>

                                <button className="rounded-full border px-8 py-4">

                                    Read Blog

                                </button>

                            </div>

                            <div className="mt-12 grid grid-cols-3 gap-5">

                                <div>

                                    <h2 className="text-4xl font-bold text-blue-600">

                                        50+

                                    </h2>

                                    <p className="text-gray-500">

                                        Research Guides

                                    </p>

                                </div>

                                <div>

                                    <h2 className="text-4xl font-bold text-blue-600">

                                        100+

                                    </h2>

                                    <p className="text-gray-500">

                                        Articles

                                    </p>

                                </div>

                                <div>

                                    <h2 className="text-4xl font-bold text-blue-600">

                                        2M+

                                    </h2>

                                    <p className="text-gray-500">

                                        Papers Indexed

                                    </p>

                                </div>

                            </div>

                        </motion.div>

                        {/* Right */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            className="relative"
                        >

                            <div className="rounded-[36px] bg-white p-8 shadow-2xl">

                                <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-5 py-4">

                                    <Search className="text-gray-400" />

                                    <span className="text-gray-500">

                                        Search research guides...

                                    </span>

                                </div>

                                <div className="mt-8 space-y-4">

                                    {[
                                        "How to write a literature review",
                                        "Systematic review checklist",
                                        "Finding quality research papers",
                                        "Avoid citation mistakes",
                                        "Using AI responsibly in research",
                                    ].map((guide) => (

                                        <div
                                            key={guide}
                                            className="flex items-center justify-between rounded-xl border p-5"
                                        >

                                            <div className="flex items-center gap-3">

                                                <BookOpen className="text-blue-600" />

                                                {guide}

                                            </div>

                                            <ArrowRight size={18} />

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= RESEARCH GUIDES ================= */}
            <FadeIn>
                <section className="bg-white py-20">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center">

                            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                                Research Guides

                            </span>

                            <h2 className="mt-8 text-5xl font-bold">

                                Master every stage
                                of academic research.

                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

                                Practical step-by-step guides designed for students,
                                researchers and innovation teams.

                            </p>

                        </div>

                        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                            {[
                                {
                                    icon: <GraduationCap className="text-blue-600" />,
                                    title: "Literature Reviews",
                                    desc: "Learn how to collect, organize and summarize hundreds of papers.",
                                    time: "8 min read"
                                },
                                {
                                    icon: <BrainCircuit className="text-purple-600" />,
                                    title: "AI Research Workflow",
                                    desc: "Use AI responsibly while maintaining academic integrity.",
                                    time: "10 min read"
                                },
                                {
                                    icon: <FileText className="text-green-600" />,
                                    title: "Citation Best Practices",
                                    desc: "Avoid citation mistakes and improve research quality.",
                                    time: "6 min read"
                                },
                                {
                                    icon: <Search className="text-orange-500" />,
                                    title: "Finding Evidence",
                                    desc: "Search databases efficiently using AI-assisted queries.",
                                    time: "7 min read"
                                },
                                {
                                    icon: <CheckCircle2 className="text-red-500" />,
                                    title: "Systematic Reviews",
                                    desc: "Learn PRISMA workflow and evidence synthesis.",
                                    time: "12 min read"
                                },
                                {
                                    icon: <Clock3 className="text-cyan-600" />,
                                    title: "Research Productivity",
                                    desc: "Reduce weeks of work into a few focused hours.",
                                    time: "5 min read"
                                }
                            ].map((guide, index) => (

                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 60,
                                        scale: 0.95,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.15,
                                        ease: "easeOut",
                                    }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.03,
                                        transition: {
                                            duration: 0.25,
                                        },
                                    }}
                                    className="rounded-[30px] border bg-[#F8FAFC] p-8 shadow"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow">
                                        {guide.icon}
                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold">
                                        {guide.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-gray-600">
                                        {guide.desc}
                                    </p>

                                    <div className="mt-8 flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            {guide.time}
                                        </span>

                                        <button className="font-semibold text-blue-600">
                                            Read →
                                        </button>
                                    </div>
                                </motion.div>
                            ))

                            }

                        </div>

                    </div>

                </section>
            </FadeIn>
            {/* ================= METHODOLOGY ================= */}

            <section className="bg-[#F8FAFC] py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div

                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}

                        >

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                                Research Methodology

                            </span>

                            <h2 className="mt-8 text-5xl font-bold leading-tight">

                                Every insight
                                starts with
                                trustworthy evidence.

                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Research AI doesn't simply generate answers.

                                It retrieves relevant papers,
                                extracts evidence,
                                compares findings,
                                verifies citations,
                                and produces transparent summaries
                                backed by academic sources.

                            </p>

                            <div className="mt-12 space-y-6">

                                <div className="flex gap-4">

                                    <Database className="text-blue-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Millions of Research Papers

                                        </h3>

                                        <p className="text-gray-500">

                                            Search across trusted academic databases.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <BrainCircuit className="text-purple-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            AI Evidence Extraction

                                        </h3>

                                        <p className="text-gray-500">

                                            AI identifies findings instead of copying text.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <ShieldCheck className="text-green-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Citation Verification

                                        </h3>

                                        <p className="text-gray-500">

                                            Every answer links back to its original source.

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div

                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}

                            className="rounded-[36px] bg-white p-8 shadow-2xl"

                        >

                            <h3 className="text-2xl font-bold">

                                Research Workflow

                            </h3>

                            <div className="mt-10 space-y-5">

                                {[
                                    "Search Academic Databases",
                                    "Retrieve Relevant Papers",
                                    "Extract Key Findings",
                                    "Compare Evidence",
                                    "Generate AI Summary",
                                    "Attach Verified Citations",
                                ].map((step, index) => (

                                    <div
                                        key={step}
                                        className="flex items-center gap-5 rounded-2xl border p-5"
                                    >

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">

                                            {index + 1}

                                        </div>

                                        <span>

                                            {step}

                                        </span>

                                    </div>

                                ))}

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= CITATION ================= */}

            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                            Citation Integrity

                        </span>

                        <h2 className="mt-8 text-5xl font-bold">

                            Built for trustworthy research.

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

                            Transparency is at the core of every AI-generated answer.
                            Every citation can be inspected,
                            verified and exported.

                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 lg:grid-cols-3">

                        {[
                            {
                                icon: <ShieldCheck className="text-green-600" />,
                                title: "Verified Sources",
                                desc: "Every answer is backed by real academic publications."
                            },
                            {
                                icon: <Lock className="text-blue-600" />,
                                title: "Transparent AI",
                                desc: "Know exactly where every statement comes from."
                            },
                            {
                                icon: <FileSearch className="text-purple-600" />,
                                title: "Evidence First",
                                desc: "Research AI prioritizes evidence instead of guessing."
                            },
                            {
                                icon: <Workflow className="text-orange-500" />,
                                title: "Structured Workflow",
                                desc: "Every summary follows the same transparent process."
                            },
                            {
                                icon: <CheckCircle2 className="text-green-600" />,
                                title: "Confidence Score",
                                desc: "Understand how reliable every generated insight is."
                            },
                            {
                                icon: <ArrowRight className="text-cyan-600" />,
                                title: "Export References",
                                desc: "APA, MLA, IEEE, BibTeX, RIS and EndNote supported."
                            }
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                    scale: 0.95,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.03,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }}
                                className="rounded-[30px] border bg-[#F8FAFC] p-8 shadow"
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow">

                                    {item.icon}

                                </div>

                                <h3 className="mt-8 text-2xl font-bold">

                                    {item.title}

                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">

                                    {item.desc}

                                </p>

                            </motion.div>

                        ))

                        }

                    </div>

                </div>

            </section>

            {/* ================= FEATURED BLOG ================= */}
            <section className="bg-[#F8FAFC] py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">

                            Featured Articles

                        </span>

                        <h2 className="mt-8 text-5xl font-bold">

                            Learn from experts.

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

                            Explore practical articles about AI research,
                            literature reviews,
                            academic writing,
                            and evidence synthesis.

                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 lg:grid-cols-3">

                        {[
                            {
                                image:
                                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
                                title: "How AI is Transforming Literature Reviews",
                                category: "AI Research",
                                read: "8 min read",
                            },
                            {
                                image:
                                    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
                                title: "Avoiding Citation Errors in Academic Writing",
                                category: "Academic Writing",
                                read: "6 min read",
                            },
                            {
                                image:
                                    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=80",
                                title: "Building Better Research Workflows",
                                category: "Productivity",
                                read: "10 min read",
                            }

                        ].map((blog, index) => (

                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                    ease: "easeOut",
                                }}
                                whileHover={{
                                    y: -12,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }}


                                className="overflow-hidden rounded-[32px] bg-white shadow-xl"

                            >

                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="h-full w-full object-cover transition duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-8">

                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">

                                        {blog.category}

                                    </span>

                                    <h3 className="mt-6 text-2xl font-bold">

                                        {blog.title}

                                    </h3>

                                    <div className="mt-6 flex items-center justify-between">

                                        <div className="flex items-center gap-2 text-gray-500">

                                            <Clock3 size={16} />

                                            {blog.read}

                                        </div>

                                        <button className="font-semibold text-blue-600">

                                            Read →

                                        </button>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= NEWSLETTER ================= */}
            {/* <section className="bg-white py-20">

                <div className="mx-auto max-w-5xl px-6">

                    <div className="rounded-[40px] border bg-[#F8FAFC] p-14 text-center">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white">

                            <Newspaper size={34} />

                        </div>

                        <h2 className="mt-8 text-5xl font-bold">

                            Stay ahead of research.

                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">

                            Get monthly research workflows,
                            AI updates,
                            productivity tips,
                            and evidence-based guides delivered to your inbox.

                        </p>

                        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-5 md:flex-row">

                            <div className="relative flex-1">

                                <Mail
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input

                                    type="email"

                                    placeholder="Enter your email"

                                    className="h-16 w-full rounded-full border bg-white pl-14 pr-5 outline-none focus:border-blue-600"

                                />

                            </div>

                            <button className="rounded-full bg-blue-600 px-10 py-4 font-semibold text-white hover:bg-blue-700">

                                Subscribe

                            </button>

                        </div>

                    </div>

                </div>

            </section> */}


        </main>
    );
};

export default Resources;