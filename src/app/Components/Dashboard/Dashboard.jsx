"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Dashboard() {
    const [open, setOpen] = useState(0);

    const faq = [
        {
            q: "What courses do you offer?",
            a: "We offer a wide range of courses in various subjects, including science, technology, engineering, mathematics, humanities, and social sciences.",
        },
        {
            q: "How can teachers effectively manage a diverse classroom?",
            a: "Teachers can use inclusive strategies, differentiated instruction, and positive reinforcement.",
        },
        {
            q: "How is special education delivered in inclusive classrooms?",
            a: "Support is provided through specialized plans, aids, and trained educators.",
        },
    ];

    return (
        <div className="container mx-auto py-16 px-4 lg:px-12 flex flex-col lg:flex-row items-center gap-10">

            {/* IMAGE SIDE */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
                <motion.img
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    src="/assets/faq-img.png"
                    alt="Dashboard Preview"
                    className="rounded-xl shadow-lg w-full max-w-md lg:max-w-lg"
                />

                {/* Floating Students Box */}
                <div className="hidden lg:block absolute bottom-40 left-4 bg-white shadow-md px-6 py-4 rounded-lg  w-44">
                    <p className="text-gray-600 text-sm">Total Students</p>
                    <div className="flex -space-x-2 mt-2">
                        <Image src="/assets/faq-thumb-1.png" width={35} height={35} className="rounded-full border" alt="" />
                        <Image src="/assets/faq-thumb-2.png" width={35} height={35} className="rounded-full border" alt="" />
                        <Image src="/assets/faq-thumb-3.png" width={35} height={35} className="rounded-full border" alt="" />
                        <Image src="/assets/faq-thumb-4.png" width={35} height={35} className="rounded-full border" alt="" />
                    </div>
                </div>
            </div>

            {/* FAQ SECTION */}
            <div className="w-full lg:w-1/2">
                <span className="text-sm bg-base-100 shadow-md px-4 py-2 rounded-full">
                    Most Asked Question
                </span>

                <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                    Powerful Dashboard And High Performance Framework
                </h2>

                <div className="mt-6 space-y-4">
                    {faq.map((item, i) => (
                        <div
                            key={i}
                            className="border rounded-lg border-gray-300 p-4 cursor-pointer bg-white"
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <div className="font-semibold flex justify-between text-base md:text-lg">
                                {item.q}
                                <span>{open === i ? "▲" : "▼"}</span>
                            </div>

                            {open === i && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-2 text-gray-600"
                                >
                                    {item.a}
                                </motion.p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
