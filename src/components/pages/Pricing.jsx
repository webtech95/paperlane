import { useState } from "react";
import {
    Check,
    ArrowRight,
    Sparkles,
    Users,
    Rocket,
    Minus, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../FadeIn"

function Pricing() {

    const [yearly, setYearly] = useState(false);

    const [open, setOpen] = useState(0);


    const faqs = [
        {
            question: "Can I use Research AI for free?",
            answer:
                "Yes. The Free plan lets you explore the platform with limited AI searches and basic literature reviews.",
        },
        {
            question: "How accurate are the citations?",
            answer:
                "Every AI-generated answer is linked back to its original research paper. We prioritize verified sources to reduce hallucinations.",
        },
        {
            question: "Can I export to Zotero or Mendeley?",
            answer:
                "Absolutely. Pro and Team plans support Zotero, Mendeley, EndNote, BibTeX and RIS exports.",
        },
        {
            question: "Is my research private?",
            answer:
                "Yes. Your documents are encrypted in transit and at rest. Team plans include advanced security and access controls.",
        },
        {
            question: "Can my university purchase team access?",
            answer:
                "Yes. Team plans are designed for universities, labs and enterprise R&D departments with centralized billing and collaboration.",
        },
    ];



    return (
        <main>
            {/* Hero */}

            <section className="relative overflow-hidden bg-[#F8FAFC] pt-36 pb-15">


                <div className="mx-auto max-w-7xl px-6">

                    <div className="text-center">

                        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

                            Pricing

                        </span>

                        <h1 className="mt-8 text-6xl font-bold text-gray-900">

                            Simple pricing
                            for every researcher.

                        </h1>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">

                            Whether you're writing your first paper or leading
                            an enterprise research team,
                            there's a plan designed for you.

                        </p>

                        {/* Toggle */}

                        <div className="mt-12 inline-flex rounded-full bg-white p-2 shadow-lg">

                            <button
                                onClick={() => setYearly(false)}
                                className={`rounded-full px-6 py-3 transition ${!yearly
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600"
                                    }`}
                            >
                                Monthly
                            </button>

                            <button
                                onClick={() => setYearly(true)}
                                className={`rounded-full px-6 py-3 transition ${yearly
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-600"
                                    }`}
                            >
                                Yearly
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* Pricing Card */}
            <FadeIn>
                <section className="bg-white pb-15">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="grid gap-8 lg:grid-cols-3">

                            {/* FREE */}

                            <motion.div

                                whileHover={{ y: -8 }}

                                className="rounded-[36px] border bg-white p-10 shadow"

                            >

                                <h3 className="text-3xl font-bold">

                                    Free

                                </h3>

                                <p className="mt-4 text-gray-500">

                                    Perfect for students.

                                </p>

                                <h2 className="mt-10 text-6xl font-bold">

                                    ₹0

                                </h2>

                                <p className="text-gray-500">

                                    Forever

                                </p>

                                <div className="mt-10 space-y-5">

                                    {[
                                        "25 AI searches / month",
                                        "Basic literature review",
                                        "APA citations",
                                        "Export BibTeX",
                                        "Community support",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="flex gap-3"
                                        >

                                            <Check className="text-green-600" />

                                            {item}

                                        </div>

                                    ))

                                    }

                                </div>

                                <button className="mt-12 w-full rounded-full border py-4 font-semibold">

                                    Start Free

                                </button>

                            </motion.div>

                            {/* PRO */}

                            <motion.div

                                whileHover={{ scale: 1.03 }}

                                className="relative rounded-[36px] bg-gradient-to-br from-blue-600 to-cyan-500 p-10 text-white shadow-2xl"

                            >

                                <div className="absolute right-8 top-8 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-600">

                                    Most Popular

                                </div>

                                <div className="flex items-center gap-3">

                                    <Sparkles />

                                    <h3 className="text-3xl font-bold">

                                        Pro <span>    {yearly ? "/year" : "/month"}
                                        </span>

                                    </h3>

                                </div>

                                <p className="mt-4 text-blue-100">

                                    Best for researchers.

                                </p>

                                <h2 className="mt-10 text-6xl font-bold">

                                    {yearly ? "₹799" : "₹999"}

                                </h2>

                                <p className="text-blue-100">

                                    per month

                                </p>

                                <div className="mt-10 space-y-5">

                                    {[
                                        "Unlimited AI searches",
                                        "AI literature reviews",
                                        "Compare papers",
                                        "Verified citations",
                                        "Knowledge Graph",
                                        "Export to Zotero",
                                        "Priority support",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="flex gap-3"
                                        >

                                            <Check />

                                            {item}

                                        </div>

                                    ))

                                    }

                                </div>

                                <button className="mt-12 flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-semibold text-blue-600">

                                    Request Access

                                    <ArrowRight size={18} />

                                </button>

                            </motion.div>

                            {/* TEAM */}

                            <motion.div

                                whileHover={{ y: -8 }}

                                className="rounded-[36px] border bg-white p-10 shadow"

                            >

                                <div className="flex items-center gap-3">

                                    <Users />

                                    <h3 className="text-3xl font-bold">

                                        Team

                                    </h3>

                                </div>

                                <p className="mt-4 text-gray-500">

                                    For universities & companies.

                                </p>

                                <h2 className="mt-10 text-5xl font-bold">

                                    Custom

                                </h2>

                                <p className="text-gray-500">

                                    Contact Sales

                                </p>

                                <div className="mt-10 space-y-5">

                                    {[
                                        "Unlimited everything",
                                        "Shared workspace",
                                        "Admin dashboard",
                                        "SSO",
                                        "Private datasets",
                                        "API access",
                                        "Dedicated success manager",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="flex gap-3"
                                        >

                                            <Check className="text-green-600" />

                                            {item}

                                        </div>

                                    ))

                                    }

                                </div>

                                <button className="mt-12 flex w-full items-center justify-center gap-2 rounded-full border py-4 font-semibold">

                                    Contact Sales

                                    <Rocket size={18} />

                                </button>

                            </motion.div>

                        </div>

                    </div>

                </section>
            </FadeIn>


            {/* FEATURE MATRIX */}
            <FadeIn delay={0.2}>
                <section className="bg-[#F8FAFC] py-15">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center">

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                Compare Plans
                            </span>

                            <h2 className="mt-8 text-5xl font-bold text-gray-900">
                                Choose the plan
                                that's right for you.
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                                Every plan includes verified citations,
                                AI-powered research and secure cloud storage.
                            </p>

                        </div>

                        <div className="mt-20 overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-xl">

                            {/* Header */}

                            <div className="grid grid-cols-4 bg-blue-600 text-white">

                                <div className="p-6 text-xl font-bold">
                                    Features
                                </div>

                                <div className="p-6 text-center font-semibold">
                                    Free
                                </div>

                                <div className="bg-blue-700 p-6 text-center font-semibold">
                                    Pro ⭐
                                </div>

                                <div className="p-6 text-center font-semibold">
                                    Team
                                </div>

                            </div>

                            {[
                                ["AI Searches", "25 / month", "Unlimited", "Unlimited"],
                                ["Literature Reviews", "Basic", "Advanced", "Advanced"],
                                ["Citation Accuracy", "✓", "✓", "✓"],
                                ["Compare Papers", "—", "✓", "✓"],
                                ["Knowledge Graph", "—", "✓", "✓"],
                                ["Reference Export", "BibTeX", "All Formats", "All Formats"],
                                ["Shared Workspace", "—", "—", "✓"],
                                ["Private Projects", "—", "✓", "✓"],
                                ["API Access", "—", "—", "✓"],
                                ["Priority Support", "—", "✓", "Dedicated"],
                                ["Custom Branding", "—", "—", "✓"],
                                ["Admin Dashboard", "—", "—", "✓"],
                            ].map((row, index) => (

                                <div
                                    key={index}
                                    className="grid grid-cols-4 border-t"
                                >

                                    <div className="p-6 font-medium">

                                        {row[0]}

                                    </div>

                                    {[1, 2, 3].map((col) => (

                                        <div
                                            key={col}
                                            className="flex items-center justify-center p-6 text-center"
                                        >

                                            {row[col] == "✓"

                                                ?

                                                <Check className="text-green-600" />

                                                :

                                                row[col] == "—"

                                                    ?

                                                    <Minus className="text-gray-400" />

                                                    :

                                                    row[col]}

                                        </div>

                                    ))}

                                </div>

                            ))}

                        </div>

                    </div>

                </section>
            </FadeIn>
            {/* ================= TRUST SECTION ================= */}

            <FadeIn delay={0.3}>
                <section className="bg-white py-15">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="grid gap-8 md:grid-cols-3">

                            <div className="rounded-[30px] border bg-[#F8FAFC] p-8">

                                <h3 className="text-2xl font-bold">

                                    🔒 Secure by Design

                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">

                                    Your uploaded papers remain private,
                                    encrypted and protected.

                                </p>

                            </div>

                            <div className="rounded-[30px] border bg-[#F8FAFC] p-8">

                                <h3 className="text-2xl font-bold">

                                    📚 Verified Citations

                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">

                                    Every answer includes references
                                    linked directly to the original publication.

                                </p>

                            </div>

                            <div className="rounded-[30px] border bg-[#F8FAFC] p-8">

                                <h3 className="text-2xl font-bold">

                                    ⚡ Lightning Fast

                                </h3>

                                <p className="mt-5 leading-8 text-gray-600">

                                    Process hundreds of papers
                                    in minutes instead of weeks.

                                </p>

                            </div>

                        </div>

                    </div>

                </section>
            </FadeIn>

            {/* ================= FAQ ================= */}
            <FadeIn>
                <section className="bg-[#F8FAFC] py-15">

                    <div className="mx-auto max-w-5xl px-6">

                        <div className="text-center">

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                                FAQ

                            </span>

                            <h2 className="mt-8 text-5xl font-bold">

                                Frequently Asked Questions

                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">

                                Everything you need to know before getting started.

                            </p>

                        </div>

                        <div className="mt-20 space-y-5">

                            {faqs.map((faq, index) => (

                                <div
                                    key={index}
                                    className="overflow-hidden rounded-3xl border bg-white shadow-sm"
                                >

                                    <button

                                        onClick={() => setOpen(open === index ? -1 : index)}

                                        className="flex w-full items-center justify-between p-7 text-left"

                                    >

                                        <h3 className="text-lg font-semibold">

                                            {faq.question}

                                        </h3>

                                        <motion.div

                                            animate={{
                                                rotate: open === index ? 180 : 0
                                            }}

                                        >

                                            <ChevronDown />

                                        </motion.div>

                                    </button>

                                    <AnimatePresence>

                                        {open === index && (

                                            <motion.div

                                                initial={{
                                                    height: 0,
                                                    opacity: 0
                                                }}

                                                animate={{
                                                    height: "auto",
                                                    opacity: 1
                                                }}

                                                exit={{
                                                    height: 0,
                                                    opacity: 0
                                                }}

                                                className="overflow-hidden"

                                            >

                                                <p className="px-7 pb-7 leading-8 text-gray-600">

                                                    {faq.answer}

                                                </p>

                                            </motion.div>

                                        )}

                                    </AnimatePresence>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>
            </FadeIn>






        </main>
    );
};

export default Pricing;