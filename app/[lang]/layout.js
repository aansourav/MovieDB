import { getDictionary } from "./dictionaries";


export default async function Home({ children, modal, params: { lang } }) {
    const dictionary = await getDictionary(lang);

    return (
        <>
            {modal}


            {children}

        </>
    );
}
