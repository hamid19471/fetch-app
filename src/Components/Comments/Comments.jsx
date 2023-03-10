import React from "react";

const Comments = ({ name, email, onClick }) => {
    return (
        <div
            className=" w-60 h-60 bg-violet-500 flex items-center justify-center rounded-lg shadow-lg shadow-violet-700"
            onClick={onClick}
        >
            <div className="flex flex-col gap-4 text-center">
                <p className="font-bold w-[70px] mx-auto text-xl bg-slate-100 text-slate-800 rounded-lg">
                    Name
                </p>
                <p className="font-light text-sm">{name}</p>
                <span className="border border-b-1 border-slate-900"></span>
                <p className="font-bold w-[70px] mx-auto text-xl bg-slate-100 text-slate-800 rounded-lg ">
                    E-Mail
                </p>
                <p className="font-light text-sm">{email}</p>
            </div>
        </div>
    );
};

export default Comments;
