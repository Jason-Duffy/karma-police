// React module imports.
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Local imports. 
import Card from './Card/Card';
import { setSubredditData, selectSubredditData } from "../../redux/subredditDataSlice";
import { selectSubreddit } from "../../redux/subredditSlice";
// Style imports.


const Posts = () => {

    // Get and manage current subreddit and subreddit data. 
    const dispatch = useDispatch();
    const subredditData = useSelector(selectSubredditData);
    const currentSubreddit = useSelector(selectSubreddit);

    const fetchSubreddits = async () => {
        try {
            const subredditName = currentSubreddit;
            const response = await fetch(`https://www.reddit.com/${subredditName}.json`);
            const data = await response.json();

            // Extract the relevant information from the data
            const newSubredditData = data.data.children.map(child => ({
                postTitle: child.data.title,
                username: child.data.author,
                created: child.data.created,
                comments: child.data.num_comments,
                postHint: child.data.post_hint,
                url: child.data.url,
                postText: child.data.selftext_html,
                media: child.data.media,
                isVideo: child.data.is_video,
                pollData: child.data.poll_data,
                galleryData: child.data.gallery_data,
                mediaMetaData: child.data.media_metadata,
                crossposts: child.data.crosspost_parent_list,
                urlOverridden: child.data.url_overridden_by_dest
            }));

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
        window.scrollTo(0,0); // Go to top of page. 
    }, [currentSubreddit]);

    return (
        <div>
            {subredditData.length > 0 ? (
                subredditData.map((post, i) => (
                    <Card
                        post={post}
                        key={i}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Posts;