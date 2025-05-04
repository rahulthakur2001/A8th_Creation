import React, { useState } from "react";
import PostApiFile from "../APIs/PostApiFile";
import { toast, ToastContainer } from "react-toastify";

const Admin_Upload = () => {
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        setPreviews(selectedFiles.map((file) => URL.createObjectURL(file)));
    };

    const handleUploadImage = async () => {
        if (files.length === 0 || !title || !category) {
            toast.error("Title, category, and at least one image are required.");
            return;
        }

        const formData = new FormData();
        files.forEach((file) => formData.append("image", file));
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);

        try {
            setLoading(true);
            const res = await PostApiFile("image/admin/upload", formData);

            toast.success(res.message || "Upload successful!", {
                onClose: () => {
                    setFiles([]);
                    setPreviews([]);
                    setTitle("");
                    setCategory("");
                    setDescription("");
                }
            });

        } catch (err) {
            toast.error(err.message || "Upload failed");
        } finally {
            setLoading(false);
        }

    };


    const removeImage = (index) => {
        const newFiles = files.filter((_, i) => i !== index);
        const newPreviews = previews.filter((_, i) => i !== index);
        setFiles(newFiles);
        setPreviews(newPreviews);
    };

    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg max-w-8xl mx-auto">
            <ToastContainer />
            {/* Upload Box */}
            <div className="flex flex-col items-center justify-center w-full mb-5 bg-gray-800 rounded-lg shadow p-4">
                <h2 className="text-2xl font-semibold mb-1">Upload your files</h2>
                <p className="text-xs text-gray-400 mb-6">
                    File should be .png, .jpg, .jpeg
                </p>

                <form
                    className="relative w-full h-40 bg-gray-700 rounded-lg shadow-inner"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault();
                        const droppedFiles = Array.from(e.dataTransfer.files);
                        setFiles(droppedFiles);
                        setPreviews(droppedFiles.map((file) => URL.createObjectURL(file)));
                    }}
                >
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="file-upload"
                        className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                    >
                        <p className="z-10 text-xs font-light text-gray-400">
                            Click or Drag & Drop
                        </p>
                        <svg
                            className="z-10 w-8 h-8 text-cyan-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                    </label>
                </form>

                {/* Previews */}
                {previews.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        {previews.map((src, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={src}
                                    alt={`preview-${index}`}
                                    className="w-full h-32 object-cover rounded border border-gray-600"
                                />
                                <button
                                    onClick={() => removeImage(index)}
                                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded opacity-80 group-hover:opacity-100"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Input Fields */}
            <div className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Title *"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded placeholder-gray-400"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
                >
                    <option value="">Select Category *</option>
                    <option value="General">General</option>
                    <option value="Photography">Photography</option>
                    <option value="Art">Art</option>
                    <option value="Design">Design</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded placeholder-gray-400"
                />
                <button
                    onClick={handleUploadImage}
                    className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-900 flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8z"
                                ></path>
                            </svg>
                            Uploading...
                        </span>
                    ) : (
                        "Upload"
                    )}
                </button>
            </div>
        </div>
    );
};

export default Admin_Upload;
