"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionImage = motion(Image);

export default function Dashboard() {
    const [open, setOpen] = useState(0);

    const faq = [
        {
            q: "What courses do you offer?",
            a: "We offer a wide range of courses in science, technology, engineering, mathematics, humanities, and social sciences.",
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
        <div className="container mx-auto py-16 px-4 lg:px-12 flex flex-col lg:flex-row items-center gap-10 lg:mt-10">

            {/* IMAGE SIDE */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
                <MotionImage
                    src="/assets/faq-img.png"
                    alt="Dashboard Preview"
                    width={500}
                    height={500}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="rounded-xl shadow-lg w-full max-w-md lg:max-w-lg"
                />

                {/* Floating Students Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="hidden lg:block absolute bottom-36 left-6 bg-white shadow-md px-6 py-4 rounded-lg w-44"
                >
                    <p className="text-gray-600 text-sm">Total Students</p>

                    <div className="flex -space-x-2 mt-2">
                        {["1","2","3","4"].map((n) => (
                            <Image
                                key={n}
                                src={`/assets/faq-thumb-${n}.png`}
                                width={35}
                                height={35}
                                className="rounded-full border object-cover"
                                alt=""
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* FAQ Section */}
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
                            className="border rounded-lg border-gray-300 p-4 cursor-pointer bg-white transition hover:shadow-md"
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <div className="font-semibold flex justify-between text-base md:text-lg">
                                {item.q}
                                <motion.span
                                    animate={{ rotate: open === i ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    ▼
                                </motion.span>
                            </div>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={open === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="mt-2 text-gray-600">{item.a}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
