// React module imports.
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Local imports. 
import Card from './Card/Card';
import { setSubredditData, selectSubredditData } from "../../redux/subredditDataSlice";
import { selectSubreddit } from "../../redux/subredditSlice";
import { selectSort } from "../../redux/sortSlice";
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

            // Fetch the user data for each post
            const postsWithUserData = await Promise.all(
                data.data.children.map(async child => {
                    const post = {
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
                    };

                    // Fetch the user data
                    const userDataResponse = await fetch(`https://www.reddit.com/user/${post.username}/about.json`);
                    const userData = await userDataResponse.json();

                    // Add the user data to the post, only keeping the fields we need
                    post.userData = {
                        username: userData.data.name,
                        karma: userData.data.total_karma,
                        pfp: userData.data.icon_img
                    };

                    return post;
                })
            );

            // Update your app's state or Redux store with the fetched subreddits
            dispatch(setSubredditData(postsWithUserData));
        } catch (error) {
            console.error("Error fetching subreddits:", error);
            // Handle error appropriately
        }
    };


    // Call the fetchSubreddits function to trigger the API request and update Redux state
    useEffect(() => {
        fetchSubreddits();
        window.scrollTo(0, 0); // Go to top of page. 
    }, [currentSubreddit]);

    // Create a new, sorted array of posts based on sort state.
    const sortOrder = useSelector(selectSort);
    let sortedSubredditData = [];

    if (sortOrder === "descending") {
        sortedSubredditData = [...subredditData]
        .sort((a, b) => b.userData.karma - a.userData.karma);
    } else {
        sortedSubredditData = [...subredditData]
        .sort((a, b) => a.userData.karma - b.userData.karma);
    }


    return (
        <div>
            {sortedSubredditData.length > 0 ? (
                sortedSubredditData
                    .map((post, i) => (
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