"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    "/logos/01_changi_airport_group_logo.png",
    "/logos/02_lta_logo.jpg",
    "/logos/03_economic_group_holdings.jpeg",
    "/logos/04_sundat_logo.png",
    "/logos/05_bestway_cleaning_logo.webp",
    "/logos/06_aas_logo.png",
    "/logos/07_egh_eduquest_logo.png",
    "/logos/08_ex_style_logo.png",
    "/logos/09_seng_foo_logo.webp",
    "/logos/10_ppe_logo.jpeg",
    "/logos/11_bfsf_logo.jpg",
    "/logos/12_pawa_bakery.png",
    "/logos/13_nk_logo.jpeg",
    "/logos/14_lukumades_logo.webp",
    "/logos/15_saigon_legend_logo.jpg",
    "/logos/16_wufang_logo.png",
    "/logos/17_jie_bakery_logo.jpeg",
    "/logos/18_hao_jia_logo.jpeg",
    "/logos/19_grout_shield_logo.jpeg",
    "/logos/19_petale_tea_logo.png",
    "/logos/20_tnts_logo.png",
];

export function LogoCarousel() {
    return (
        <div className="w-full overflow-hidden relative py-8 bg-white">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex overflow-hidden">
                <motion.div
                    className="flex gap-16 items-center flex-nowrap"
                    animate={{
                        x: "-50%",
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Duplicate logos multiple times to ensure seamless loop on large screens */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="relative h-20 w-40 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                            <Image
                                src={logo}
                                alt={`Partner Logo ${index}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
