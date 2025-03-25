"use client";
import { FaRegThumbsUp } from "react-icons/fa6";
import { useState } from "react";

const Likebutton = (props) => {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(likes + 1)}>
      <FaRegThumbsUp /> {props.label}
      {likes > 1 ? "s" : ""} {likes}
    </button>
  );
};

export default Likebutton;
