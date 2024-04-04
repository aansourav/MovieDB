"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const modalRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (!modalRef.current?.open) {
            modalRef.current?.showModal();
        }
    }, []);

    const onHide = () => {
        router.back();
    };

    return createPortal(
        <dialog
            ref={modalRef}
            onClose={onHide}
            className="shadow-teal-800 shadow-xl border border-teal-700 flex flex-col px-8 rounded-md dark:bg-body bg-white dark:text-white text-dark"
        >
            <span className="flex justify-end">
                <Image
                    onClick={onHide}
                    className="bg-white rounded-full my-4 hover:shadow-md hover:bg-gray-300 p-1"
                    src="/assets/icons/xmark.svg"
                    alt="close"
                    width={30}
                    height={30}
                />
            </span>
            {children}
        </dialog>,
        document.getElementById("modal-root-content")
    );
};

export default Modal;
