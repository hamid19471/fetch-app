import axios from "axios";
import React, { useState } from "react";

const AddComment = ({ addNew }) => {
    const [addComment, setAddComment] = useState({
        name: "",
        email: "",
        body: "",
    });

    const handleChange = (e) => {
        setAddComment({
            ...addComment,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="w-full py-12 bg-violet-500 rounded-xl">
            <div className="flex flex-col gap-7">
                <h2 className="font-bold text-2xl text-center ">
                    Add New Comment
                </h2>
                <div className="flex flex-col mx-auto w-96 gap-3">
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter Full Name"
                        className="outline-none bg-slate-700 p-2 rounded-md placeholder:text-sm placeholder:uppercase"
                    />
                    <input
                        type="emain"
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter Emain Address"
                        className="outline-none bg-slate-700 p-2 rounded-md placeholder:text-sm placeholder:uppercase"
                    />
                    <input
                        type="textarea"
                        name="body"
                        onChange={handleChange}
                        placeholder="Enter Comment"
                        className="outline-none bg-slate-700 p-2 rounded-md placeholder:text-sm placeholder:uppercase"
                    />
                </div>
                <button
                    className="bg-blue-700 mx-auto p-2 rounded-full shadow-md transition-all hover:scale-105 text-sm"
                    onClick={() => addNew(addComment)}
                >
                    Add Comment
                </button>
            </div>
        </div>
    );
};

export default AddComment;
