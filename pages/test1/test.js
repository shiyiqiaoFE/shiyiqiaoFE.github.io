import Link from "next/link";
import React, {useState} from "react";
import {console} from "next/dist/compiled/@edge-runtime/primitives/console";
import Button from '@mui/material/Button';
// import Image from "next/image";
// import pika from "./pika.jpg"
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
export default function FirstPost({allPostsData}) {
    // console.log(React.useState())
    const [likes, setLikes]=useState(0)
    function handleClick() {
        setLikes(likes + 1);
    }
    return <div>
        <h1>First Post </h1>
        <button onClick={handleClick}>Likes ({likes})</button>
        <Link href="/"><Button variant="contained">Back</Button></Link>
        <ul >
            {allPostsData.map(({ id, date, title }) => (
                <li  key={id}>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
                </li>
            ))}
        </ul>
        {/*<Image*/}
        {/*    src={ require('./pika.jpg') } // Route of the image file*/}
        {/*    height={144} // Desired size with correct aspect ratio*/}
        {/*    width={144} // Desired size with correct aspect ratio*/}
        {/*    alt="Your Name"*/}
        {/*/>*/}
    </div>;
}
