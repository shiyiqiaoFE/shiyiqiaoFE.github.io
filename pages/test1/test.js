import Link from "next/link";
import React, {useState} from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
// import Image from "next/image";
// import pika from "./pika.jpg"

export default function FirstPost() {
    // console.log(React.useState())
    const [likes, setLikes]=useState(0)
    function handleClick() {
        setLikes(likes + 1);
    }
    console.log(likes)
    return <div>
        <h1>First Post </h1>
        <button onClick={handleClick}>Likes ({likes})</button>
        <Link href='/'>back</Link>
        {/*<Image*/}
        {/*    src={ require('./pika.jpg') } // Route of the image file*/}
        {/*    height={144} // Desired size with correct aspect ratio*/}
        {/*    width={144} // Desired size with correct aspect ratio*/}
        {/*    alt="Your Name"*/}
        {/*/>*/}
    </div>;
}
