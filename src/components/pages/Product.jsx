import { motion } from "framer-motion";
import {
    Search,
    ArrowRight,
    FileText,
    BrainCircuit,
    CheckCircle2,
    BookOpen,
} from "lucide-react";

import {
    ShieldCheck,
    BadgeCheck,
    GitCompareArrows,
    NotebookPen,
    Download,
    Database,
    BookMarked,
} from "lucide-react";
import FadeIn from "../FadeIn"



function Product() {

    return (

        <main>
            {/* ================= PRODUCT HERO ================= */}

            < section className="relative overflow-hidden bg-[#F8FAFC] pt-36 pb-28" >

                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl"></div>

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div

                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .7 }}

                        >

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                                Product

                            </span>

                            <h1 className="mt-8 text-6xl font-bold leading-tight text-gray-900">

                                The AI engine built
                                for modern research.

                            </h1>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Search thousands of papers,
                                compare findings,
                                generate literature reviews,
                                and receive answers backed by verified citations.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <button className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-white hover:bg-blue-700">

                                    Try Research AI

                                    <ArrowRight size={18} />

                                </button>

                                <button className="rounded-full border border-gray-300 px-7 py-4">

                                    Watch Demo

                                </button>

                            </div>

                            <div className="mt-10 grid grid-cols-3 gap-5">

                                <div>

                                    <h3 className="text-4xl font-bold text-blue-600">

                                        2M+

                                    </h3>

                                    <p className="text-gray-500">

                                        Research Papers

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-4xl font-bold text-blue-600">

                                        96%

                                    </h3>

                                    <p className="text-gray-500">

                                        Citation Accuracy

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-4xl font-bold text-blue-600">

                                        12x

                                    </h3>

                                    <p className="text-gray-500">

                                        Faster Reviews

                                    </p>

                                </div>

                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div

                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}

                            className="relative"

                        >

                            <div className="rounded-[36px] border border-gray-200 bg-white p-8 shadow-2xl">

                                <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-5 py-4">

                                    <Search className="text-gray-400" />

                                    <span className="text-gray-500">

                                        Large Language Models in Healthcare

                                    </span>

                                </div>

                                <div className="mt-8 grid grid-cols-3 gap-4">

                                    <div className="rounded-2xl bg-blue-50 p-5">

                                        <h3 className="text-3xl font-bold text-blue-600">

                                            142

                                        </h3>

                                        <p className="text-gray-500">

                                            Papers

                                        </p>

                                    </div>

                                    <div className="rounded-2xl bg-green-50 p-5">

                                        <h3 className="text-3xl font-bold text-green-600">

                                            38

                                        </h3>

                                        <p className="text-gray-500">

                                            Journals

                                        </p>

                                    </div>

                                    <div className="rounded-2xl bg-purple-50 p-5">

                                        <h3 className="text-3xl font-bold text-purple-600">

                                            96%

                                        </h3>

                                        <p className="text-gray-500">

                                            Match

                                        </p>

                                    </div>

                                </div>

                                <div className="mt-8 rounded-3xl border p-6">

                                    <h3 className="font-bold">

                                        AI Summary

                                    </h3>

                                    <p className="mt-4 leading-8 text-gray-600">

                                        Research AI analyzed 142 publications
                                        and found strong evidence supporting
                                        transformer-based models for clinical
                                        decision support systems.

                                    </p>

                                </div>

                                <div className="mt-6 space-y-4">

                                    {[
                                        "Nature Medicine",
                                        "PubMed Review",
                                        "IEEE Healthcare",
                                    ].map((paper) => (

                                        <div
                                            key={paper}
                                            className="flex items-center justify-between rounded-xl border p-4"
                                        >

                                            <div className="flex items-center gap-3">

                                                <FileText className="text-red-500" />

                                                <span>{paper}</span>

                                            </div>

                                            <CheckCircle2 className="text-green-500" />

                                        </div>

                                    ))}

                                </div>

                            </div>

                            <motion.div

                                animate={{
                                    y: [-8, 8, -8]
                                }}

                                transition={{
                                    repeat: Infinity,
                                    duration: 5
                                }}

                                className="absolute -left-8 top-10 hidden rounded-2xl bg-white p-4 shadow-xl lg:block"

                            >

                                📚 2 Million Papers

                            </motion.div>

                            <motion.div

                                animate={{
                                    y: [8, -8, 8]
                                }}

                                transition={{
                                    repeat: Infinity,
                                    duration: 4
                                }}

                                className="absolute -right-8 bottom-12 hidden rounded-2xl bg-white p-4 shadow-xl lg:block"

                            >

                                🤖 AI Powered

                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </ section>

            {/* ================= LITERATURE SEARCH ================= */}

            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 50,
                                scale: 0.95,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                            }}
                        >
                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                Literature Search
                            </span>

                            <h2 className="mt-8 text-5xl font-bold">
                                Search.
                                <br />
                                Read.
                                <br />
                                Understand.
                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">
                                Research AI searches thousands of papers,
                                extracts the most relevant evidence,
                                groups findings,
                                and automatically creates literature syntheses.
                            </p>

                            <div className="mt-10 space-y-6">

                                <div className="flex gap-4">
                                    <BrainCircuit className="text-blue-600" />
                                    <div>
                                        <h3 className="font-semibold">
                                            AI reads every paper
                                        </h3>
                                        <p className="text-gray-500">
                                            No manual reading required.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <BookOpen className="text-blue-600" />
                                    <div>
                                        <h3 className="font-semibold">
                                            Compare methodologies
                                        </h3>
                                        <p className="text-gray-500">
                                            Identify agreements and conflicts instantly.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <CheckCircle2 className="text-green-600" />
                                    <div>
                                        <h3 className="font-semibold">
                                            Generate evidence summaries
                                        </h3>
                                        <p className="text-gray-500">
                                            Organized by topic and citation.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        {/* RIGHT */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 50,
                                scale: 0.95,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut",
                            }}
                        >
                            <div className="space-y-5">

                                {[
                                    "Clinical AI.pdf",
                                    "Nature Review.pdf",
                                    "PubMed.pdf",
                                    "Healthcare Survey.pdf",
                                    "IEEE Analysis.pdf",
                                ].map((paper) => (

                                    <div
                                        key={paper}
                                        className="flex items-center justify-between rounded-2xl bg-white p-5 shadow"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText className="text-red-500" />
                                            <span>{paper}</span>
                                        </div>

                                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                                            Analyzed
                                        </span>
                                    </div>

                                ))}

                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>


            {/* ================= ALWAYS CITED ANSWERS ================= */}
            < section className="bg-[#F8FAFC] py-20" >

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* Left */}

                        <motion.div

                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}

                        >

                            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                                Citation Accuracy

                            </span>

                            <h2 className="mt-8 text-5xl font-bold leading-tight text-gray-900">

                                Every answer
                                comes with
                                verified citations.

                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Research AI never invents sources.

                                Every statement,
                                summary and conclusion
                                links back to the original paper.

                            </p>

                            <div className="mt-12 space-y-6">

                                <div className="flex gap-4">

                                    <ShieldCheck className="text-green-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            No Hallucinated References

                                        </h3>

                                        <p className="text-gray-500">

                                            Every citation is verified.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <BadgeCheck className="text-blue-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Confidence Score

                                        </h3>

                                        <p className="text-gray-500">

                                            AI shows confidence for every answer.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <CheckCircle2 className="text-green-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Source Linked

                                        </h3>

                                        <p className="text-gray-500">

                                            Jump directly to the original publication.

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                        {/* Right */}

                        <motion.div

                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}

                            className="rounded-[32px] bg-white p-8 shadow-2xl"

                        >

                            <h3 className="text-2xl font-bold">

                                AI Generated Answer

                            </h3>

                            <p className="mt-6 leading-8 text-gray-600">

                                Large Language Models significantly improve
                                clinical documentation efficiency,
                                although performance varies depending
                                on dataset quality and model architecture.

                            </p>

                            <div className="mt-10 space-y-4">

                                {[
                                    "Nature Medicine (2025)",
                                    "IEEE Transactions",
                                    "PubMed Clinical Review",
                                    "Springer AI Journal"
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center justify-between rounded-xl border p-4"
                                    >

                                        <div className="flex items-center gap-3">

                                            <FileText className="text-red-500" />

                                            {item}

                                        </div>

                                        <BadgeCheck className="text-green-500" />

                                    </div>

                                ))}

                            </div>

                            <div className="mt-8 rounded-2xl bg-green-50 p-5">

                                <h4 className="font-bold text-green-700">

                                    Citation Confidence

                                </h4>

                                <div className="mt-4 h-3 rounded-full bg-green-200">

                                    <div className="h-3 w-[97%] rounded-full bg-green-500"></div>

                                </div>

                                <p className="mt-2 text-sm text-green-700">

                                    97% Verified Sources

                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </ section>

            {/* ================= COMPARE FINDINGS ================= */}
            <FadeIn delay={0.2}>
                <section section className="bg-white py-20" >

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center">

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                                Compare Research

                            </span>

                            <h2 className="mt-8 text-5xl font-bold">

                                Compare findings
                                across hundreds of papers.

                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

                                Instantly discover where researchers agree,
                                disagree,
                                or identify emerging trends
                                across multiple publications.

                            </p>

                        </div>

                        <div className="mt-20 rounded-[36px] bg-[#F8FAFC] p-10">

                            <div className="grid gap-8 lg:grid-cols-3">

                                {[
                                    {
                                        title: "Nature",
                                        color: "bg-blue-500"
                                    },
                                    {
                                        title: "PubMed",
                                        color: "bg-green-500"
                                    },
                                    {
                                        title: "IEEE",
                                        color: "bg-purple-500"
                                    }
                                ].map((paper) => (

                                    <motion.div

                                        whileHover={{ y: -8 }}

                                        key={paper.title}

                                        className="rounded-3xl bg-white p-6 shadow-lg"

                                    >

                                        <div className="flex items-center justify-between">

                                            <h3 className="font-bold">

                                                {paper.title}

                                            </h3>

                                            <div className={`h-4 w-4 rounded-full ${paper.color}`}></div>

                                        </div>

                                        <div className="mt-8 space-y-4">

                                            <div className="rounded-xl bg-gray-100 p-4">

                                                Transformer Accuracy

                                                <div className="mt-2 h-2 rounded-full bg-gray-300">

                                                    <div className={`h-2 w-[90%] rounded-full ${paper.color}`}></div>

                                                </div>

                                            </div>

                                            <div className="rounded-xl bg-gray-100 p-4">

                                                Dataset Size

                                                <div className="mt-2 h-2 rounded-full bg-gray-300">

                                                    <div className={`h-2 w-[75%] rounded-full ${paper.color}`}></div>

                                                </div>

                                            </div>

                                            <div className="rounded-xl bg-gray-100 p-4">

                                                Clinical Validation

                                                <div className="mt-2 h-2 rounded-full bg-gray-300">

                                                    <div className={`h-2 w-[82%] rounded-full ${paper.color}`}></div>

                                                </div>

                                            </div>

                                        </div>

                                    </motion.div>

                                ))}

                            </div>

                            <div className="mt-12 flex justify-center">

                                <button className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white hover:bg-blue-700">

                                    Compare Papers

                                    <GitCompareArrows size={18} />

                                </button>

                            </div>

                        </div>

                    </div>

                </section >
            </FadeIn>
            {/* ================= NOTES & EXPORT ================= */}

            <section section className="bg-[#F8FAFC] py-20" >

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div

                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}

                        >

                            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">

                                Notes & Export

                            </span>

                            <h2 className="mt-8 text-5xl font-bold leading-tight text-gray-900">

                                Organize your
                                research effortlessly.

                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Save important insights, highlight findings,
                                organize notes into projects and export your
                                references directly into your favorite citation manager.

                            </p>

                            <div className="mt-12 space-y-6">

                                <div className="flex gap-4">

                                    <NotebookPen className="text-purple-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Smart Research Notes

                                        </h3>

                                        <p className="text-gray-500">

                                            Highlight important findings while reading.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <Database className="text-blue-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Organize Projects

                                        </h3>

                                        <p className="text-gray-500">

                                            Create folders for every research topic.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <Download className="text-green-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Export References

                                        </h3>

                                        <p className="text-gray-500">

                                            Zotero, Mendeley, EndNote & BibTeX.

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

                            <div className="flex items-center justify-between border-b pb-6">

                                <h3 className="text-2xl font-bold">

                                    Research Workspace

                                </h3>

                                <BookMarked className="text-blue-600" />

                            </div>

                            <div className="mt-8 space-y-5">

                                {[
                                    "Clinical AI improves diagnosis accuracy by 18%",
                                    "Transformer models outperform CNNs",
                                    "Need larger patient datasets",
                                    "Future work includes multimodal AI",
                                ].map((note) => (

                                    <div
                                        key={note}
                                        className="rounded-2xl border p-5"
                                    >

                                        <div className="flex items-start gap-3">

                                            <CheckCircle2 className="mt-1 text-green-600" />

                                            <p>{note}</p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">

                                <button className="rounded-2xl bg-blue-600 py-4 text-white">

                                    Export BibTeX

                                </button>

                                <button className="rounded-2xl border py-4">

                                    Export Zotero

                                </button>

                                <button className="rounded-2xl border py-4">

                                    Mendeley

                                </button>

                                <button className="rounded-2xl border py-4">

                                    EndNote

                                </button>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section >
        </main >
    );
};

export default Product;