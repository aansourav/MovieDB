// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// const Modal = ({ children }) => {
//     const modalRef = useRef(null);
//     const router = useRouter();

//     useEffect(() => {
//         if (!modalRef.current?.open) {
//             modalRef.current?.showModal();
//         }
//     }, []);

//     const onHide = () => {
//         router.back();
//     };

//     return createPortal(
//         <dialog
//             ref={modalRef}
//             onClose={onHide}
//             className="shadow-teal-800 shadow-xl border border-teal-700 flex flex-col px-8 rounded-md dark:bg-body bg-white dark:text-white text-dark"
//         >
//             <span className="flex justify-end">
//                 <Image
//                     onClick={onHide}
//                     className="bg-white rounded-full my-4 hover:shadow-md hover:bg-gray-300 p-1"
//                     src="/assets/icons/xmark.svg"
//                     alt="close"
//                     width={30}
//                     height={30}
//                 />
//             </span>
//             {children}
//         </dialog>,
//         document.getElementById("modal-root-content")
//     );
// };

// export default Modal;

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
    console.log("is modal showing?");
    const modalOverly = useRef(null);
    const modalWrapper = useRef(null);
    const router = useRouter();

    const onDisMiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(() => {
        (e) => {
            if (
                e.target === modalOverly.current ||
                e.target === modalWrapper.current
            ) {
                if (onDisMiss) onDisMiss();
            }
        };
    }, [onDisMiss, modalOverly, modalWrapper]);

    const onKeyDown = useCallback(() => {
        (e) => {
            if (e.key === "Escape") onDisMiss();
        };
    }, [onDisMiss]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);

        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return createPortal(
        <div
            ref={modalOverly}
            onClick={onClick}
            className="fixed bg-black bg-opacity-70 inset-0 z-50 h-full overflow-y-auto min-h-screen"
        >
            <section
                ref={modalWrapper}
                className="absolute left-0 top-0 w-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50"
            >
                <div className="relative w-11/12 mx-auto bg-slate-900 p-4 my-9 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
                    <div className="flex absolute top-[-0.85rem] right-[-0.85rem] bg-slate-700 size-7 justify-center items-center border rounded-full cursor-pointer">
                        {/* <button className="text-white" onClick={onDisMiss}>
                            X
                        </button> */}
                        <Image
                            onClick={onDisMiss}
                            className="bg-white rounded-full my-4 hover:shadow-md hover:bg-gray-300 p-1 "
                            src="/assets/icons/xmark.svg"
                            alt="close"
                            width={30}
                            height={30}
                        />
                    </div>
                    {children}
                </div>
            </section>
        </div>,
        document.getElementById("modal-root-content")
    );
}
