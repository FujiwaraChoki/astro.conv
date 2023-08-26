import Link from "next/link";
import Lottie from "react-lottie";

import FileTypeChooser from '@/components/FileTypeChooser';
import dragndrop from "../../public/dragndrop.json";
import FileContext from "@/contexts/FileContext";
import FileDataContext from "@/contexts/FileDataContext";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

const UploadArea = () => {
    const [resultFileType, setResultFileType] = useState("");
    const { fileData, setFileData } = useContext(FileDataContext);
    const [open, setOpen] = useState(false);
    const { file, setFile } = useContext(FileContext);

    const router = useRouter();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: dragndrop,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Set File Data
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
            setFileData(e.target.result);
        };
    };

    useEffect(() => {
        console.log(file);
    }, [file]);

    useEffect(() => {
        if (file && fileData && resultFileType) {
            router.push(`/convert?type=${resultFileType}`);
        }
    }, [resultFileType]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-3">{file ? 'Choose your file-type' : 'Upload your file'}</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <FileTypeChooser
                    fileType={resultFileType}
                    setFileType={setResultFileType}
                    open={open}
                    setOpen={setOpen}
                />
                {file ? (
                    <button type="button" onClick={() => setOpen(true)} className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                        Choose
                    </button>
                ) : (
                    <div className="flex flex-col items-center justify-center w-96 h-96 border-2 border-dashed border-gray-400 rounded-lg">
                        <Lottie options={defaultOptions} height={350} width={350} />
                    </div>
                )}
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
                {
                    !file && (
                        <button
                            className="transition p-3 mt-5 ease-in-out delay-150 bg-indigo-500 font-medium text-white text-xl rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"
                            onClick={() => {
                                document.querySelector('input[type="file"]').click();
                            }}
                        >
                            Choose a file
                        </button>
                    )
                }
            </div>
        </div >
    );
};

export default UploadArea;
