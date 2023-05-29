// React module imports.
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Local imports. 
import Card from './Card/Card';
import { setSubredditData, selectSubredditData } from "../../redux/subredditDataSlice";
import { selectSubreddit } from "../../redux/subredditSlice";
// Style imports.


const Posts = () => {

    const dispatch = useDispatch();
    const subredditData = useSelector(selectSubredditData);
    const currentSubreddit = useSelector(selectSubreddit);


    const fetchSubreddits = async () => {
        try {
            const subredditName = currentSubreddit;
            const response = await fetch(`https://www.reddit.com/${subredditName}.json`);
            const data = await response.json();

            // Extract the relevant information from the data
            const newSubredditData = data.data.children.map(child => child.data);

            // Update your app's state or Redux store with the fetched subreddits
            dispatch(setSubredditData(newSubredditData));
        } catch (error) {
            console.error("Error fetching subreddits:", error);
            // Handle error appropriately
        }
    };

    // Call the fetchSubreddits function to trigger the API request and update Redux state
    useEffect(() => {
        fetchSubreddits();
    }, [currentSubreddit]);

    // ...

    return (
        <div>
            {
                subredditData.map((post, i) => {
                    return (
                        <Card
                            title={post.title}
                            username={post.author}
                            imageUrl={post.url}
                            key={i}
                        />
                    )
                })
            }
            <Card />
        </div>
    );
};

export default Posts;