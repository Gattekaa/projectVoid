import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PostCard from '../../../components/';


const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Vinicius Gabriel',
            username: 'vinihbieel',
            avatar: '/images/avatar/avatar_1.jpg'
        },
        title: "Primeiro Post",
        date: "October 27, 2121",
        description: "Teste",
        hashtags: "#nikitaolsen",
        image: "/images/posts/post_1.png"
    }
];

function Feed() {
    const classes = useStyles();

    return (
        <div className={classes.root}> 
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    )
}   
export default Feed;