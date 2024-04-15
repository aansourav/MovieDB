export default async function Home({ children, modal }) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}
