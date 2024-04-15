import "server-only";

const dictionaries = {
    en: () => import("../[lang]/dictionaries/en.json").then((module) => module.default),
    bn: () => import("../[lang]/dictionaries/bn.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
