import { motion } from "framer-motion";
import FadeIn from "../FadeIn"
import {
    ArrowRight,
    Search,
    GraduationCap,
    BookOpen,
    FileText,
    CheckCircle2,
    BrainCircuit,
    Library,
} from "lucide-react";

import {
    Briefcase,
    BarChart3,
    GitCompareArrows,
    TrendingUp,
    Building2,
    Users,
    Zap,
    Clock3,
    Network,
    BookOpenCheck,
    ShieldCheck,
    Download,
    Sparkles

} from "lucide-react";


function UseCases() {

    return (
        <main>
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#F8FAFC] pt-36 pb-20">

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

                                Use Cases

                            </span>

                            <h1 className="mt-8 text-6xl font-bold leading-tight text-gray-900">

                                Built for every
                                research workflow.

                            </h1>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Whether you're publishing a thesis,
                                writing a systematic review,
                                or analyzing market intelligence,
                                Research AI helps you discover evidence faster.

                            </p>

                            <div className="mt-10 flex gap-5">

                                <button className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white">

                                    Request Access

                                    <ArrowRight size={18} />

                                </button>

                                <button className="rounded-full border px-8 py-4">

                                    Watch Demo

                                </button>

                            </div>

                            <div className="mt-12 grid grid-cols-3 gap-5">

                                <div>

                                    <h3 className="text-4xl font-bold text-blue-600">

                                        12x

                                    </h3>

                                    <p className="text-gray-500">

                                        Faster Reviews

                                    </p>

                                </div>

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

                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div

                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: .8 }}

                            className="relative"

                        >

                            <div className="rounded-[36px] bg-white p-8 shadow-2xl">

                                <div className="flex items-center gap-3 rounded-2xl border bg-gray-50 px-5 py-4">

                                    <Search className="text-gray-400" />

                                    <span className="text-gray-500">

                                        AI in Healthcare Research

                                    </span>

                                </div>

                                <div className="mt-8 rounded-3xl bg-blue-50 p-6">

                                    <h3 className="text-2xl font-bold">

                                        AI Literature Review

                                    </h3>

                                    <p className="mt-4 leading-8 text-gray-600">

                                        Research AI searched 143 papers,
                                        compared findings,
                                        grouped evidence,
                                        and generated a cited review.

                                    </p>

                                </div>

                                <div className="mt-8 space-y-4">

                                    {[
                                        "Nature Medicine",
                                        "PubMed",
                                        "IEEE",
                                        "Springer",
                                    ].map((paper) => (

                                        <div
                                            key={paper}
                                            className="flex items-center justify-between rounded-xl border p-4"
                                        >

                                            <div className="flex items-center gap-3">

                                                <FileText className="text-red-500" />

                                                {paper}

                                            </div>

                                            <CheckCircle2 className="text-green-500" />

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= ACADEMIC RESEARCHERS ================= */}

            <section className="bg-white py-20 ">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div

                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}

                            className="rounded-[36px] bg-[#F8FAFC] p-8"

                        >

                            <div className="rounded-3xl bg-white p-6 shadow-xl">

                                <div className="flex items-center justify-between">

                                    <h3 className="text-xl font-bold">

                                        Thesis Workspace

                                    </h3>

                                    <BrainCircuit className="text-blue-600" />

                                </div>

                                <div className="mt-8 space-y-5">

                                    {[
                                        "Collect 150 papers",
                                        "Extract key findings",
                                        "Compare methodologies",
                                        "Generate literature review",
                                        "Export APA citations",
                                    ].map((step) => (

                                        <div
                                            key={step}
                                            className="flex items-center gap-3 rounded-xl border p-4"
                                        >

                                            <CheckCircle2 className="text-green-600" />

                                            {step}

                                        </div>

                                    ))}

                                </div>

                                <div className="mt-8 rounded-2xl bg-blue-600 p-6 text-white">

                                    <h3 className="text-2xl font-bold">

                                        Outcome

                                    </h3>

                                    <p className="mt-4 leading-8 text-blue-100">

                                        Complete literature reviews
                                        up to 12× faster while maintaining
                                        accurate, traceable citations.

                                    </p>

                                </div>

                            </div>

                        </motion.div>



                        {/* RIGHT */}

                        <motion.div

                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}

                        >

                            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                                Academic Researchers

                            </span>

                            <h2 className="mt-8 text-5xl font-bold leading-tight">

                                Finish literature
                                reviews in days,
                                not weeks.

                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                From systematic reviews to PhD theses,
                                Research AI reads papers,
                                compares evidence,
                                organizes citations,
                                and creates publication-ready summaries.

                            </p>

                            <div className="mt-10 space-y-6">

                                <div className="flex gap-4">

                                    <GraduationCap className="text-blue-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Thesis Writing

                                        </h3>

                                        <p className="text-gray-500">

                                            Organize hundreds of references.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <BookOpen className="text-blue-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Literature Reviews

                                        </h3>

                                        <p className="text-gray-500">

                                            AI generates structured reviews.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <Library className="text-blue-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Citation Management

                                        </h3>

                                        <p className="text-gray-500">

                                            Export directly to Zotero & EndNote.

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= ANALYSTS & R&D ================= */}
            <section className="bg-[#F8FAFC] py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div

                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}

                        >

                            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">

                                Analysts & R&D Teams

                            </span>

                            <h2 className="mt-8 text-5xl font-bold leading-tight text-gray-900">

                                Turn thousands of
                                reports into
                                strategic insights.

                            </h2>

                            <p className="mt-8 text-lg leading-8 text-gray-600">

                                Research AI helps innovation teams,
                                analysts and R&D departments
                                compare technologies,
                                identify trends,
                                and generate evidence-backed reports
                                in minutes.

                            </p>

                            <div className="mt-12 space-y-6">

                                <div className="flex gap-4">

                                    <Briefcase className="text-blue-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Competitive Intelligence

                                        </h3>

                                        <p className="text-gray-500">

                                            Compare companies, patents and technologies.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <TrendingUp className="text-green-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Market Trends

                                        </h3>

                                        <p className="text-gray-500">

                                            Discover emerging technologies automatically.

                                        </p>

                                    </div>

                                </div>

                                <div className="flex gap-4">

                                    <Building2 className="text-purple-600" />

                                    <div>

                                        <h3 className="font-semibold">

                                            Internal Knowledge

                                        </h3>

                                        <p className="text-gray-500">

                                            Organize reports into searchable knowledge bases.

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

                            <div className="flex items-center justify-between">

                                <h3 className="text-2xl font-bold">

                                    Innovation Dashboard

                                </h3>

                                <BrainCircuit className="text-blue-600" />

                            </div>

                            <div className="mt-10 grid gap-5">

                                <div className="rounded-2xl bg-blue-50 p-5">

                                    <div className="flex items-center justify-between">

                                        <span>AI Healthcare</span>

                                        <span className="font-bold text-blue-600">

                                            +24%

                                        </span>

                                    </div>

                                </div>

                                <div className="rounded-2xl bg-green-50 p-5">

                                    <div className="flex items-center justify-between">

                                        <span>Medical Robotics</span>

                                        <span className="font-bold text-green-600">

                                            +17%

                                        </span>

                                    </div>

                                </div>

                                <div className="rounded-2xl bg-purple-50 p-5">

                                    <div className="flex items-center justify-between">

                                        <span>Drug Discovery AI</span>

                                        <span className="font-bold text-purple-600">

                                            +38%

                                        </span>

                                    </div>

                                </div>

                                <div className="rounded-2xl bg-orange-50 p-5">

                                    <div className="flex items-center justify-between">

                                        <span>Clinical NLP</span>

                                        <span className="font-bold text-orange-500">

                                            +19%

                                        </span>

                                    </div>

                                </div>

                            </div>

                            <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">

                                <h3 className="text-xl font-bold">

                                    Outcome

                                </h3>

                                <p className="mt-4 leading-8 text-blue-100">

                                    Discover research opportunities,
                                    identify market gaps,
                                    and generate executive-ready reports
                                    without manually reading hundreds of documents.

                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= COMPARISON ================= */}
            <FadeIn delay={0.2}>
                <section className="bg-white py-20">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center">

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                                Compare Use Cases

                            </span>

                            <h2 className="mt-8 text-5xl font-bold">

                                One platform.
                                Multiple research workflows.

                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">

                                Whether you're publishing academic papers
                                or building the next breakthrough product,
                                Research AI adapts to your workflow.

                            </p>

                        </div>

                        <div className="mt-20 overflow-hidden rounded-[36px] border border-gray-200">

                            <div className="grid grid-cols-3 bg-blue-600 text-white">

                                <div className="p-6 text-xl font-bold">

                                    Feature

                                </div>

                                <div className="flex items-center justify-center gap-2 p-6 font-semibold">

                                    <Users size={20} />

                                    Academic

                                </div>

                                <div className="flex items-center justify-center gap-2 p-6 font-semibold">

                                    <Briefcase size={20} />

                                    R&D Teams

                                </div>

                            </div>

                            {[
                                ["Literature Reviews", "✓", "✓"],
                                ["Citation Export", "✓", "✓"],
                                ["Compare Research", "✓", "✓"],
                                ["Patent Analysis", "—", "✓"],
                                ["Market Reports", "—", "✓"],
                                ["Systematic Reviews", "✓", "—"],
                                ["Knowledge Graph", "✓", "✓"],
                                ["Evidence Summaries", "✓", "✓"],
                            ].map((row, index) => (

                                <div
                                    key={index}
                                    className="grid grid-cols-3 border-t"

                                >

                                    <div className="p-6 font-medium">

                                        {row[0]}

                                    </div>

                                    <div className="flex items-center justify-center p-6">

                                        {row[1] == "✓"

                                            ?

                                            <CheckCircle2 className="text-green-600" />

                                            :

                                            "-"}

                                    </div>

                                    <div className="flex items-center justify-center p-6">

                                        {row[2] == "✓"

                                            ?

                                            <CheckCircle2 className="text-green-600" />

                                            :

                                            "-"}

                                    </div>

                                </div>

                            ))}

                        </div>

                        <div className="mt-12 flex justify-center">

                            <button className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-white hover:bg-blue-700">

                                Explore More

                                <ArrowRight size={18} />

                            </button>

                        </div>

                    </div>

                </section>
            </FadeIn>
            {/* ================= BENEFITS ================= */}
            <FadeIn delay={0.3}>
                <section className="bg-[#F8FAFC] py-20">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="text-center">

                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                Why Teams Choose Research AI
                            </span>

                            <h2 className="mt-8 text-5xl font-bold text-gray-900">
                                Everything your research team needs.
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">
                                Powerful AI tools that help researchers, analysts,
                                and innovation teams move from information overload
                                to confident decisions.
                            </p>

                        </div>

                        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                            {[
                                {
                                    icon: <Zap className="text-blue-600" />,
                                    title: "AI Literature Reviews",
                                    desc: "Generate structured literature reviews in minutes instead of weeks."
                                },
                                {
                                    icon: <BookOpenCheck className="text-green-600" />,
                                    title: "Always-Cited Answers",
                                    desc: "Every AI response links back to verified research papers."
                                },
                                {
                                    icon: <Network className="text-purple-600" />,
                                    title: "Knowledge Graph",
                                    desc: "Discover relationships between authors, topics and publications."
                                },
                                {
                                    icon: <ShieldCheck className="text-red-500" />,
                                    title: "Evidence Confidence",
                                    desc: "Know how reliable every AI-generated insight really is."
                                },
                                {
                                    icon: <Clock3 className="text-orange-500" />,
                                    title: "Save Time",
                                    desc: "Reduce weeks of manual reading into a few focused hours."
                                },
                                {
                                    icon: <Download className="text-cyan-600" />,
                                    title: "Export Anywhere",
                                    desc: "Export citations directly to Zotero, EndNote, Mendeley and BibTeX."
                                }

                            ].map((item, index) => (

                                <motion.div

                                    key={index}

                                    whileHover={{
                                        y: -8
                                    }}

                                    className="rounded-[28px] bg-white p-8 shadow-lg transition"

                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">

                                        {item.icon}

                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold">

                                        {item.title}

                                    </h3>

                                    <p className="mt-5 leading-8 text-gray-600">

                                        {item.desc}

                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                </section>
            </FadeIn>
            {/* ================= STATS ================= */}

            <FadeIn delay={0.4}>
                <section className="bg-white py-20">

                    <div className="mx-auto max-w-7xl px-6">

                        <div className="grid gap-8 text-center md:grid-cols-4">

                            {[
                                ["2M+", "Research Papers"],
                                ["96%", "Citation Accuracy"],
                                ["12×", "Faster Reviews"],
                                ["2500+", "Researchers Waiting"],
                            ].map((item, index) => (

                                <motion.div

                                    key={index}

                                    whileHover={{
                                        scale: 1.05
                                    }}

                                    className="rounded-3xl border bg-[#F8FAFC] p-10"

                                >

                                    <h2 className="text-5xl font-bold text-blue-600">

                                        {item[0]}

                                    </h2>

                                    <p className="mt-3 text-gray-600">

                                        {item[1]}

                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                </section>
            </FadeIn>
        </main>
    );
};

export default UseCases;