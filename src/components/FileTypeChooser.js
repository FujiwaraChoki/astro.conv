import Link from "next/link";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const FileTypeChooser = ({ fileType, setFileType, open, setOpen }) => {
    const [search, setSearch] = useState("");
    const [fileTypes, setFileTypes] = useState([
        { fileType: "mp4", category: "Video" },
        { fileType: "webm", category: "Video" },
        { fileType: "gif", category: "Image" },
        { fileType: "png", category: "Image" },
        { fileType: "jpg", category: "Image" },
        { fileType: "jpeg", category: "Image" },
        { fileType: "svg", category: "Image" },
        { fileType: "pdf", category: "Document" },
        { fileType: "txt", category: "Document" },
        { fileType: "doc", category: "Document" },
        { fileType: "docx", category: "Document" },
        { fileType: "xls", category: "Document" },
        { fileType: "xlsx", category: "Document" },
        { fileType: "ppt", category: "Document" },
        { fileType: "pptx", category: "Document" },
        { fileType: "mp3", category: "Audio" },
        { fileType: "wav", category: "Audio" },
        { fileType: "ogg", category: "Audio" }
    ]);

    const handleClose = () => {
        setOpen(false);
    };

    const SearchInput = () => {
        const handleSearchChange = (e) => {
            setSearch(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Perform search or submit form
            console.log("Search query:", search);
        };

        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaSearch />
                    </div>
                    <input
                        value={search}
                        onChange={handleSearchChange}
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Search
                    </button>
                </div>
            </form>
        );
    };

    useEffect(() => {
        if (search === "") {
            setFileTypes([
                { fileType: "mp4", category: "Video" },
                { fileType: "webm", category: "Video" },
                { fileType: "gif", category: "Image" },
                { fileType: "png", category: "Image" },
                { fileType: "jpg", category: "Image" },
                { fileType: "jpeg", category: "Image" },
                { fileType: "svg", category: "Image" },
                { fileType: "pdf", category: "Document" },
                { fileType: "txt", category: "Document" },
                { fileType: "doc", category: "Document" },
                { fileType: "docx", category: "Document" },
                { fileType: "xls", category: "Document" },
                { fileType: "xlsx", category: "Document" },
                { fileType: "ppt", category: "Document" },
                { fileType: "pptx", category: "Document" },
                { fileType: "mp3", category: "Audio" },
                { fileType: "wav", category: "Audio" },
                { fileType: "ogg", category: "Audio" }
            ]);
        } else {
            const filteredFileTypes = fileTypes.filter((fileType) => {
                return fileType.fileType.toLowerCase().includes(search.toLowerCase());
            });

            setFileTypes(filteredFileTypes);
        }
    }, [search]);

    return (
        open && (
            <div
                id="filetype-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <div className="relative w-full max-w-md max-h-[80vh]">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            onClick={handleClose}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>
                        <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                                File Types
                            </h3>
                        </div>
                        <div className="p-6">
                            <SearchInput />
                            <br />
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Choose one of the following File Types.
                            </p>
                            <ul className="my-4 space-y-3">
                                {
                                    fileTypes.map((fileType) => (
                                        <li
                                            key={fileType.fileType}
                                        >
                                            <button
                                                onClick={() => {
                                                    setFileType(fileType.fileType);
                                                    setOpen(false);
                                                }}
                                                className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                            >
                                                <span className="flex-1 ml-3 whitespace-nowrap">{fileType.fileType}</span>
                                                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                                                    {fileType.category}
                                                </span>
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 mr-2"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="question-circle"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                                        />
                                    </svg>
                                    Didn't find your file type? Open an issue.
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    );
};

export default FileTypeChooser;
