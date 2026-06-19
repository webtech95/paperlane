import { ArrowRight, CheckCircle2, Search, FileText, RotateCcw } from "lucide-react";
import { BrainCircuit, FileSearch, Network, BookOpen, ArrowDown } from "lucide-react";
import { Star, Mail, Users } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import {
    Upload,
    Sparkles,
    FileDown,
    ShieldCheck,
    BadgeCheck,
    Lock,

} from "lucide-react";

const logos = [
    "Harvard",
    "MIT",
    "Stanford",
    "Oxford",
    "Cambridge",
    "ETH Zurich",
];



function Home() {

    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const handleSynthesize = () => {
        if (!query.trim()) return;

        setLoading(true);
        setDone(false);

        setTimeout(() => {
            setLoading(false);
            setDone(true);
        }, 2500);
    };
    return (

        <main>

            {/* // Hero */}
            <section className="relative overflow-hidden bg-[#F8FAFC] pt-36 pb-24">
                {/* Background */}
                <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-200/30 blur-3xl" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                                🚀 AI Research Assistant
                            </span>

                            <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
                                From raw research
                                <br />
                                <span className="text-blue-600">to refined insight.</span>
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                                Read hundreds of research papers, generate literature reviews,
                                summarize findings, and cite every source accurately using AI.
                            </p>

                            {/* Waitlist */}
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-14 flex-1 rounded-full border border-gray-300 bg-white px-6 outline-none focus:border-blue-600"
                                />

                                <button className="flex h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 font-medium text-white transition hover:bg-blue-700">
                                    Join Waitlist
                                    <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Trust */}
                            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={18} />
                                    Citation-backed
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={18} />
                                    AI Literature Review
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" size={18} />
                                    Trusted by Researchers
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Dashboard */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">
                                {/* Search */}
                                <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-4 py-3">
                                    <Search size={18} className="text-gray-400" />
                                    <span className="text-gray-500">
                                        LLMs in Healthcare Research...
                                    </span>
                                </div>

                                {/* Stats */}
                                <div className="mt-6 grid grid-cols-3 gap-4">
                                    <div className="rounded-2xl bg-blue-50 p-4">
                                        <p className="text-2xl font-bold text-blue-600">148</p>
                                        <span className="text-sm text-gray-500">Papers</span>
                                    </div>

                                    <div className="rounded-2xl bg-green-50 p-4">
                                        <p className="text-2xl font-bold text-green-600">96%</p>
                                        <span className="text-sm text-gray-500">Accuracy</span>
                                    </div>

                                    <div className="rounded-2xl bg-purple-50 p-4">
                                        <p className="text-2xl font-bold text-purple-600">28</p>
                                        <span className="text-sm text-gray-500">Citations</span>
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="mt-8 rounded-2xl border p-5">
                                    <h3 className="font-semibold text-gray-900">
                                        Literature Summary
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-gray-600">
                                        Large Language Models have significantly improved
                                        clinical documentation, diagnosis support and patient
                                        outcome prediction across recent studies.
                                    </p>

                                    <div className="mt-5 space-y-3">
                                        {[
                                            "Nature Medicine (2025)",
                                            "PubMed Clinical Review",
                                            "IEEE AI Healthcare",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                                            >
                                                <FileText size={18} className="text-blue-600" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom */}
                                <div className="mt-6 flex items-center justify-between rounded-2xl bg-blue-600 px-5 py-4 text-white">
                                    <div>
                                        <p className="text-lg font-semibold">AI Analysis Complete</p>
                                        <p className="text-sm opacity-80">
                                            Generated with verified citations.
                                        </p>
                                    </div>

                                    <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600">
                                        Ready
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                animate={{ y: [-8, 8, -8] }}
                                transition={{ repeat: Infinity, duration: 5 }}
                                className="absolute -left-10 top-12 hidden rounded-2xl bg-white p-4 shadow-xl lg:block"
                            >
                                📄 500+ PDFs Processed
                            </motion.div>

                            <motion.div
                                animate={{ y: [8, -8, 8] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute -right-8 bottom-10 hidden rounded-2xl bg-white p-4 shadow-xl lg:block"
                            >
                                📚 100% Source Linked
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* // Logo Bar */}

            <section className="border-y border-gray-200 bg-white py-10">
                <div className="mx-auto max-w-7xl px-6">

                    <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
                        Trusted by researchers from
                    </p>

                    <motion.div
                        animate={{ x: [0, -400] }}
                        transition={{
                            repeat: Infinity,
                            duration: 18,
                            ease: "linear",
                        }}
                        className="flex w-max gap-20"
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="text-3xl font-bold text-gray-300"
                            >
                                {logo}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Problem */}

            <section className="bg-[#F8FAFC] py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .7 }}
                            viewport={{ once: true }}
                        >

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                The Problem
                            </span>

                            <h2 className="mt-8 text-5xl font-bold leading-tight text-gray-900">
                                Research shouldn't
                                <br />
                                feel overwhelming.
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">
                                Researchers spend countless hours opening PDFs,
                                switching between tabs, checking citations,
                                and manually creating literature reviews.
                            </p>

                            <div className="mt-12 space-y-5">

                                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                                    <FileText className="text-blue-600" />

                                    <div>
                                        <h3 className="font-semibold">
                                            Hundreds of PDFs
                                        </h3>

                                        <p className="text-gray-500">
                                            Reading everything takes weeks.
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                                    <Search className="text-green-600" />

                                    <div>
                                        <h3 className="font-semibold">
                                            Endless Searching
                                        </h3>

                                        <p className="text-gray-500">
                                            Important findings stay hidden.
                                        </p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow">

                                    <BookOpen className="text-purple-600" />

                                    <div>
                                        <h3 className="font-semibold">
                                            Citation Chaos
                                        </h3>

                                        <p className="text-gray-500">
                                            Cross-checking references wastes time.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}
                            viewport={{ once: true }}
                            className="relative"
                        >

                            <div className="rounded-[32px] bg-white p-8 shadow-2xl">

                                <div className="flex items-center justify-between border-b pb-5">

                                    <h3 className="text-xl font-bold">
                                        Research Workspace
                                    </h3>

                                    <BrainCircuit className="text-blue-600" />
                                </div>

                                <div className="mt-8 space-y-4">

                                    {[
                                        "Cancer Treatment.pdf",
                                        "AI Healthcare.pdf",
                                        "Nature Review.pdf",
                                        "IEEE Medical.pdf",
                                        "Clinical Report.pdf",
                                        "Research Notes.pdf",
                                        "PubMed Article.pdf",
                                    ].map((pdf) => (

                                        <motion.div
                                            key={pdf}
                                            whileHover={{ x: 6 }}
                                            className="flex items-center justify-between rounded-xl border p-4"
                                        >

                                            <div className="flex items-center gap-3">

                                                <FileText className="text-red-500" size={18} />

                                                <span>{pdf}</span>

                                            </div>

                                        </motion.div>

                                    ))}

                                </div>

                                <div className="my-10 flex justify-center">

                                    <ArrowDown
                                        className="animate-bounce text-blue-600"
                                        size={40}
                                    />

                                </div>

                                <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">

                                    <h3 className="text-xl font-semibold">
                                        AI Literature Review
                                    </h3>

                                    <p className="mt-3 leading-7 text-blue-100">
                                        Instead of reading 150 papers individually,
                                        Research AI extracts key findings,
                                        compares methodologies,
                                        identifies trends,
                                        and generates an evidence-backed literature review
                                        with verified citations.
                                    </p>

                                </div>

                            </div>

                            {/* Floating Cards */}

                            <motion.div

                                animate={{
                                    y: [-8, 8, -8],
                                }}

                                transition={{
                                    repeat: Infinity,
                                    duration: 5,
                                }}

                                className="absolute -left-10 top-20 hidden rounded-2xl bg-white px-6 py-4 shadow-xl lg:block"

                            >
                                📄 148 Papers Imported
                            </motion.div>

                            <motion.div

                                animate={{
                                    y: [8, -8, 8],
                                }}

                                transition={{
                                    repeat: Infinity,
                                    duration: 4,
                                }}

                                className="absolute -right-8 bottom-10 hidden rounded-2xl bg-white px-6 py-4 shadow-xl lg:block"

                            >
                                ✅ 100% Source Linked
                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= FEATURES ================= */}

            <section className="bg-white py-28">

                <div className="mx-auto max-w-7xl px-6">

                    {/* Heading */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                        className="mx-auto max-w-3xl text-center"
                    >

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                            Features
                        </span>

                        <h2 className="mt-8 text-5xl font-bold text-gray-900">
                            Everything you need to
                            <span className="text-blue-600"> accelerate research.</span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Read, understand, compare and cite hundreds of papers
                            in minutes instead of weeks.
                        </p>

                    </motion.div>

                    {/* Cards */}

                    <div className="mt-20 grid gap-8 lg:grid-cols-3">

                        {/* Card 1 */}

                        <motion.div

                            whileHover={{
                                y: -10
                            }}

                            transition={{
                                duration: .3
                            }}

                            className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg"

                        >

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                                <BrainCircuit
                                    size={34}
                                    className="text-blue-600"
                                />

                            </div>

                            <h3 className="mt-8 text-2xl font-bold">
                                AI Literature Review
                            </h3>

                            <p className="mt-5 leading-8 text-gray-600">

                                Upload hundreds of papers.

                                Research AI automatically creates
                                literature reviews,
                                identifies trends,
                                compares methodologies
                                and summarizes findings.

                            </p>

                            {/* Mockup */}

                            <div className="mt-10 rounded-3xl bg-slate-50 p-5">

                                <div className="rounded-xl bg-white p-4 shadow">

                                    <div className="h-2 w-28 rounded bg-blue-500"></div>

                                    <div className="mt-4 space-y-2">

                                        <div className="h-2 rounded bg-gray-200"></div>

                                        <div className="h-2 w-5/6 rounded bg-gray-200"></div>

                                        <div className="h-2 w-4/6 rounded bg-gray-200"></div>

                                    </div>

                                </div>

                            </div>

                            <button className="mt-8 flex items-center gap-2 text-blue-600 font-semibold">

                                Learn More

                                <ArrowRight
                                    size={18}
                                />

                            </button>

                        </motion.div>

                        {/* Card 2 */}

                        <motion.div

                            whileHover={{
                                y: -10
                            }}

                            transition={{
                                duration: .3
                            }}

                            className="group rounded-[30px] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white shadow-xl"

                        >

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

                                <FileSearch
                                    size={34}
                                />

                            </div>

                            <h3 className="mt-8 text-2xl font-bold">

                                Smart Citation Engine

                            </h3>

                            <p className="mt-5 leading-8 text-blue-100">

                                Every insight links back
                                to the original paper.

                                No hallucinated references.

                                Accurate citations every time.

                            </p>

                            {/* Citation */}

                            <div className="mt-10 rounded-3xl bg-white/10 p-5 backdrop-blur">

                                <div className="rounded-xl bg-white/10 p-4">

                                    <div className="flex justify-between">

                                        <span>Nature 2025</span>

                                        <span>Verified</span>

                                    </div>

                                    <div className="mt-4 h-2 rounded bg-white/30"></div>

                                    <div className="mt-3 h-2 w-4/5 rounded bg-white/30"></div>

                                    <div className="mt-3 h-2 w-3/5 rounded bg-white/30"></div>

                                </div>

                            </div>

                            <button className="mt-8 flex items-center gap-2 font-semibold">

                                Explore

                                <ArrowRight
                                    size={18}
                                />

                            </button>

                        </motion.div>

                        {/* Card 3 */}

                        <motion.div

                            whileHover={{
                                y: -10
                            }}

                            transition={{
                                duration: .3
                            }}

                            className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg"

                        >

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

                                <Network
                                    size={34}
                                    className="text-green-600"
                                />

                            </div>

                            <h3 className="mt-8 text-2xl font-bold">

                                Knowledge Graph

                            </h3>

                            <p className="mt-5 leading-8 text-gray-600">

                                Discover hidden relationships
                                between authors,
                                studies,
                                datasets
                                and research topics
                                with AI generated knowledge maps.

                            </p>

                            {/* Graph */}

                            <div className="relative mt-10 h-56 rounded-3xl bg-slate-50">

                                <div className="absolute left-1/2 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-600"></div>

                                <div className="absolute left-12 top-24 h-4 w-4 rounded-full bg-green-500"></div>

                                <div className="absolute right-12 top-24 h-4 w-4 rounded-full bg-purple-500"></div>

                                <div className="absolute bottom-8 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-red-500"></div>

                                <svg className="absolute inset-0 h-full w-full">

                                    <line
                                        x1="50%"
                                        y1="40"
                                        x2="60"
                                        y2="100"
                                        stroke="#CBD5E1"
                                        strokeWidth="2"
                                    />

                                    <line
                                        x1="50%"
                                        y1="40"
                                        x2="320"
                                        y2="100"
                                        stroke="#CBD5E1"
                                        strokeWidth="2"
                                    />

                                    <line
                                        x1="60"
                                        y1="100"
                                        x2="50%"
                                        y2="190"
                                        stroke="#CBD5E1"
                                        strokeWidth="2"
                                    />

                                    <line
                                        x1="320"
                                        y1="100"
                                        x2="50%"
                                        y2="190"
                                        stroke="#CBD5E1"
                                        strokeWidth="2"
                                    />

                                </svg>

                            </div>

                            <button className="mt-8 flex items-center gap-2 text-blue-600 font-semibold">

                                Visualize

                                <ArrowRight
                                    size={18}
                                />

                            </button>

                        </motion.div>

                    </div>

                </div>

            </section>


            <section className="bg-[#F8FAFC] py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                            Interactive Demo

                        </span>

                        <h2 className="mt-8 text-5xl font-bold">

                            Synthesize these papers.

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

                            Experience how Paperlane reads multiple papers,
                            compares evidence,
                            and produces a fully cited summary.

                        </p>

                    </div>

                    <div className="mx-auto mt-16 max-w-4xl rounded-[36px] border bg-white p-8 shadow-xl">

                        <div className="flex flex-col gap-4 md:flex-row">

                            <div className="relative flex-1">

                                <Search
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="text"
                                    placeholder="Example: AI in Healthcare"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="h-16 w-full rounded-full border pl-14 pr-5 outline-none focus:border-blue-600"
                                />

                            </div>

                            <button

                                onClick={handleSynthesize}

                                disabled={loading}

                                className="flex h-16 items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-white"

                            >

                                <Sparkles size={18} />

                                {loading ? "Analyzing..." : "Synthesize"}

                            </button>

                        </div>

                        <AnimatePresence>

                            {loading && (

                                <motion.div

                                    initial={{ opacity: 0 }}

                                    animate={{ opacity: 1 }}

                                    exit={{ opacity: 0 }}

                                    className="mt-10"

                                >

                                    <div className="flex items-center justify-between">

                                        <span>

                                            Reading papers...

                                        </span>

                                        <span>

                                            96%

                                        </span>

                                    </div>

                                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">

                                        <motion.div

                                            initial={{
                                                width: 0
                                            }}

                                            animate={{
                                                width: "96%"
                                            }}

                                            transition={{
                                                duration: 2.3
                                            }}

                                            className="h-full rounded-full bg-blue-600"

                                        />

                                    </div>

                                    <div className="mt-8 space-y-4">

                                        {[
                                            "Searching PubMed",
                                            "Comparing Nature articles",
                                            "Extracting evidence",
                                            "Generating citations"
                                        ].map((step, index) => (

                                            <motion.div

                                                key={step}

                                                initial={{
                                                    opacity: 0,
                                                    x: -20
                                                }}

                                                animate={{
                                                    opacity: 1,
                                                    x: 0
                                                }}

                                                transition={{
                                                    delay: index * .4
                                                }}

                                                className="flex items-center gap-3"

                                            >

                                                <FileText className="text-blue-600" />

                                                {step}

                                            </motion.div>

                                        ))

                                        }

                                    </div>

                                </motion.div>

                            )}

                        </AnimatePresence>

                        <AnimatePresence>

                            {done && (

                                <motion.div

                                    initial={{
                                        opacity: 0,
                                        y: 40
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    className="mt-10 rounded-3xl border bg-[#F8FAFC] p-8"

                                >

                                    <div className="flex items-center gap-3 text-green-600">

                                        <CheckCircle2 />

                                        <h3 className="text-xl font-bold">

                                            Synthesis Complete

                                        </h3>

                                    </div>

                                    <div className="mt-8 space-y-6">

                                        <div>

                                            <h4 className="font-semibold">

                                                Summary

                                            </h4>

                                            <p className="mt-2 text-gray-600 leading-8">

                                                Across 152 analyzed papers,
                                                AI-assisted diagnostic systems consistently improved
                                                clinical decision accuracy while reducing
                                                literature review time by more than 60%.

                                                Most studies recommend combining
                                                AI assistance with expert human validation.

                                            </p>

                                        </div>

                                        <div>

                                            <h4 className="font-semibold">

                                                Sources

                                            </h4>

                                            <div className="mt-4 flex flex-wrap gap-3">

                                                {[
                                                    "Nature Medicine (2025)",
                                                    "PubMed",
                                                    "IEEE Xplore",
                                                    "Elsevier",
                                                ].map((item) => (

                                                    <span

                                                        key={item}

                                                        className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700"

                                                    >

                                                        {item}

                                                    </span>

                                                ))

                                                }

                                            </div>

                                        </div>

                                        <button

                                            onClick={() => {
                                                setDone(false);
                                                setQuery("");
                                            }}

                                            className="mt-8 flex items-center gap-2 rounded-full border px-6 py-3"

                                        >

                                            <RotateCcw size={18} />

                                            Try Another Search

                                        </button>

                                    </div>

                                </motion.div>

                            )}

                        </AnimatePresence>

                    </div>

                </div>

            </section>



            <section className="bg-[#F8FAFC] py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                            How It Works
                        </span>

                        <h2 className="mt-8 text-5xl font-bold text-gray-900">
                            Four simple steps.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                            Research AI automates the entire literature review workflow
                            while keeping every citation linked to its original source.
                        </p>

                    </div>

                    <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                icon: <Upload size={32} />,
                                title: "Upload Papers",
                                desc: "Import PDFs, DOI links, PubMed results or Zotero libraries."
                            },
                            {
                                icon: <BrainCircuit size={32} />,
                                title: "AI Understands",
                                desc: "Reads every paper, extracts findings and compares evidence."
                            },
                            {
                                icon: <Sparkles size={32} />,
                                title: "Generate Insights",
                                desc: "Creates summaries, literature reviews and evidence maps."
                            },
                            {
                                icon: <FileDown size={32} />,
                                title: "Export",
                                desc: "Download reports with APA, MLA and IEEE citations."
                            },
                        ].map((item, index) => (

                            <motion.div

                                key={index}

                                whileHover={{
                                    y: -8
                                }}

                                className="relative rounded-[28px] bg-white p-8 shadow-lg"

                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                                    {item.icon}

                                </div>

                                <div className="absolute right-6 top-6 text-5xl font-bold text-gray-100">

                                    0{index + 1}

                                </div>

                                <h3 className="mt-8 text-2xl font-bold">

                                    {item.title}

                                </h3>

                                <p className="mt-4 leading-8 text-gray-600">

                                    {item.desc}

                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>


            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* Left */}

                        <motion.div

                            initial={{
                                opacity: 0,
                                x: -40
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}

                            viewport={{
                                once: true
                            }}

                        >

                            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                                Trust & Accuracy
                            </span>

                            <h2 className="mt-8 text-5xl font-bold text-gray-900 leading-tight">

                                Every insight is
                                backed by
                                verified citations.

                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Unlike generic AI chatbots,
                                Research AI never invents references.

                                Every paragraph,
                                every statement
                                and every conclusion
                                links directly to the original paper.

                            </p>

                            <div className="mt-12 space-y-5">

                                <div className="flex items-center gap-4">

                                    <CheckCircle2 className="text-green-600" />

                                    <span>
                                        Verified citations
                                    </span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <CheckCircle2 className="text-green-600" />

                                    <span>
                                        Evidence-based summaries
                                    </span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <CheckCircle2 className="text-green-600" />

                                    <span>
                                        Hallucination protection
                                    </span>

                                </div>

                                <div className="flex items-center gap-4">

                                    <CheckCircle2 className="text-green-600" />

                                    <span>
                                        Citation confidence score
                                    </span>

                                </div>

                            </div>

                        </motion.div>

                        {/* Right */}

                        <motion.div

                            initial={{
                                opacity: 0,
                                x: 40
                            }}

                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}

                            viewport={{
                                once: true
                            }}

                            className="rounded-[36px] bg-gradient-to-br from-blue-600 to-cyan-500 p-10 text-white shadow-2xl"

                        >

                            <div className="flex items-center justify-between">

                                <h3 className="text-3xl font-bold">

                                    Citation Report

                                </h3>

                                <ShieldCheck size={40} />

                            </div>

                            <div className="mt-10 space-y-5">

                                {[
                                    "Nature Medicine 2025",
                                    "PubMed Clinical Review",
                                    "IEEE AI Journal",
                                    "Springer Research",
                                    "The Lancet"
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center justify-between rounded-2xl bg-white/10 p-5 backdrop-blur"
                                    >

                                        <span>

                                            {item}

                                        </span>

                                        <BadgeCheck />

                                    </div>

                                ))}

                            </div>

                            <div className="mt-10 rounded-2xl bg-white p-6 text-gray-900">

                                <div className="flex items-center gap-3">

                                    <Lock className="text-blue-600" />

                                    <h4 className="font-bold">

                                        AI Confidence

                                    </h4>

                                </div>

                                <div className="mt-6 h-4 rounded-full bg-gray-200">

                                    <div className="h-4 w-[96%] rounded-full bg-green-500"></div>

                                </div>

                                <p className="mt-3 text-sm text-gray-500">

                                    Citation Accuracy

                                    <span className="font-bold text-green-600">

                                        96%

                                    </span>

                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= TESTIMONIALS ================= */}

            <section className="bg-[#F8FAFC] py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                            Testimonials
                        </span>

                        <h2 className="mt-8 text-5xl font-bold text-gray-900">
                            Researchers love using Research AI.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                            Save hours every week with AI-powered literature reviews,
                            citation tracking and evidence-backed summaries.
                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                name: "Sarah Johnson",
                                role: "PhD Candidate",
                                review:
                                    "Research AI reduced my literature review from three weeks to just one afternoon. Every citation was perfectly linked.",
                            },
                            {
                                name: "David Lee",
                                role: "Research Scientist",
                                review:
                                    "Finally an AI tool that doesn't invent references. The citation accuracy is incredible.",
                            },
                            {
                                name: "Emily Carter",
                                role: "Medical Researcher",
                                review:
                                    "The knowledge graph helped me discover papers I would never have found manually.",
                            },
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="rounded-[30px] bg-white p-8 shadow-lg"
                            >

                                <div className="mb-6 flex gap-1">

                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={18}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    ))}

                                </div>

                                <p className="leading-8 text-gray-600">

                                    "{item.review}"

                                </p>

                                <div className="mt-8">

                                    <h3 className="font-bold text-lg">

                                        {item.name}

                                    </h3>

                                    <p className="text-gray-500">

                                        {item.role}

                                    </p>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>


        </main>

    );
}

export default Home;




