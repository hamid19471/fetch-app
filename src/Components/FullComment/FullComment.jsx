import React, { useState, useEffect } from "react";
import axios from "axios";
const FullComment = ({ commentId, setComments, setClickedComment }) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        if (commentId) {
            getFullComment();
        }
    }, [commentId]);

    const getFullComment = async () => {
        const { data } = await axios.get(
            `http://localhost:3001/comments/${commentId}`,
        );
        setComment(data);
    };

    if (!commentId) return <p>Select Comment</p>;

    const handleDeleteComment = async () => {
        try {
            await axios.delete(`http://localhost:3001/comments/${commentId}`);
            const { data } = await axios.get("http://localhost:3001/comments/");
            setComments(data);
            setComment([]);
            setClickedComment(null);
        } catch (error) {}
    };

    return (
        <div className="flex items-start justify-center bg-violet-500 my-9 rounded-xl">
            <div className="flex flex-col py-8 gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex gap-3 mx-auto">
                        <p className="font-bold w-auto px-1 text-xl bg-slate-100 text-slate-800 rounded-lg">
                            Name:
                        </p>
                        <span>{comment.name}</span>
                    </div>
                    <div className="flex gap-3 mx-auto">
                        <p className="font-bold w-auto px-1 text-xl bg-slate-100 text-slate-800 rounded-lg">
                            E-Mail Address:
                        </p>
                        <span>{comment.email}</span>
                    </div>
                </div>
                <div className="flex flex-col  gap-3 text-center  bg-slate-100 text-slate-800 rounded-lg">
                    <p className="font-bold w-auto px-1 text-xl">
                        Description:
                    </p>
                    <p className="w-[900px] mx-auto">{comment.body}</p>
                </div>
                <button
                    className="bg-red-600 py-2 px-4 mx-auto rounded-lg mt-10"
                    onClick={handleDeleteComment}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FullComment;
