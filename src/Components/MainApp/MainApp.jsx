import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import FullComment from "../FullComment/FullComment";
import AddComment from "../AddComment/AddComment";
import axios from "axios";
const MainApp = () => {
    const [comments, setComments] = useState([]);
    const [clickedComment, setClickedComment] = useState(null);
    // useEffect(() => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/comments")
    //         .then((res) => {
    //             setComments(res.data.slice(0, 4));
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data);
    };

    const handleClickedComments = (id) => {
        setClickedComment(id);
    };

    const hanlePostComment = (comments) => {
        axios
            .post("http://localhost:3001/comments", {
                ...comments,
            })
            .then((res) => {
                return axios.get("http://localhost:3001/comments");
            })
            .then((res) => setComments(res.data));
    };
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-center justify-center">
                {comments.length > 0 ? (
                    comments.map((item) => (
                        <Comments
                            key={item.id}
                            name={item.name}
                            email={item.email}
                            onClick={() => handleClickedComments(item.id)}
                        />
                    ))
                ) : (
                    <p>Loading ...</p>
                )}
            </div>
            <FullComment commentId={clickedComment} />
            <AddComment addNew={hanlePostComment} />
        </div>
    );
};

export default MainApp;
