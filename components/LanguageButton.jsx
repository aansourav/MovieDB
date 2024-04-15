"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    const langs = [
        {
            code: "en",
            language: "English",
        },
        {
            code: "bn",
            language: "Bangla",
        },
    ];
    const found = langs.find((lang) => pathname.includes(lang.code));
    const [selectedLang, setSelectedLang] = useState(found ?? langs[0]);
    const [showMenu, setShowMenu] = useState(false);

    const handleLangChange = (langCode) => {
        setSelectedLang(langs.find((lang) => lang.code === langCode));
        setShowMenu(false);
        const preferredLang = langs.find((lang) => lang.code === langCode);
        localStorage.setItem("preferredLang", JSON.stringify(preferredLang));
        router.push(`/${langCode}`);
    };

    return (
        <div className="flex gap-4 items-center">
            <div className="relative">
                <button
                    className="flex items-center gap-2"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <Image
                        src={`/assets/${
                            selectedLang.code === "en" ? "usa" : "bd"
                        }.png`}
                        alt={selectedLang.language}
                        height={100}
                        width={165}
                        className="max-w-8"
                    />
                    {selectedLang.language}
                </button>
                {showMenu && (
                    <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-slate-700 p-2 z-10 shadow-lg">
                        {langs.map((lang) => (
                            <li
                                key={lang.code}
                                onClick={() => handleLangChange(lang.code)}
                                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 hover:text-slate-700"
                            >
                                <Image
                                    src={`/assets/${
                                        lang.code === "en" ? "usa" : "bd"
                                    }.png`}
                                    alt={lang.language}
                                    height={100}
                                    width={165}
                                    className="max-w-8"
                                />
                                {lang.language}
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageButton;
