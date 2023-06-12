// React module imports.
import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// Local imports. 
import Card from './Card/Card';
import NoSearchResultsCard from "./NoSearchResultsCard/NoSearchResultsCard";
import ErrorCard from "./ErrorCard/ErrorCard";
import { setSubredditData, selectSubredditData } from "../../redux/subredditDataSlice";
import { selectSort } from "../../redux/sortSlice";
import { selectArrestedUsers } from "../../redux/arrestedSlice";
import { selectSearchResults, selectNoResults } from "../../redux/searchResultsSlice";
// Style imports.


const Posts = () => {

    // Get and manage current subreddit and subreddit data. 
    const dispatch = useDispatch();
    const subredditData = useSelector(selectSubredditData);
    const arrestedUsers = useSelector(selectArrestedUsers);
    const searchResults = useSelector(selectSearchResults);
    const noResults = useSelector(selectNoResults);

    // Get current subreddit from URL params. 
    let { subreddit } = useParams();
    subreddit = "r/" + subreddit;

    // Local state to store returned error code.
    const [error, setError] = useState(null);

    // Helper function to fetch subreddit, post and user data.
    const fetchSubreddits = useCallback(async (subreddit) => {

        if (!subreddit) {
            console.error("Subreddit not defined!");
            return;
        }

        try {
            const subredditName = subreddit;
            const response = await fetch(`https://www.reddit.com/${subredditName}.json`);
            await setError(response.status);

            if (response.status) {

                console.error(`${error}`);
                return;
            }

            const data = await response.json();

            const posts = data.data.children.map(async (child) => {
                const post = {
                    postId: child.data.id,
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

                // Check if there is crosspost data & map to post data. 
                if (child.data.crosspost_parent_list) {
                    const crosspost = child.data.crosspost_parent_list[0];
                    post.postTitle = crosspost.title;
                    post.created = crosspost.created;
                    post.comments = crosspost.num_comments;
                    post.url = crosspost.url;
                    post.postText = crosspost.selftext_html;
                    post.media = crosspost.media;
                    post.isVideo = crosspost.is_video;
                    post.pollData = crosspost.poll_data;
                    post.galleryData = crosspost.gallery_data;
                    post.mediaMetaData = crosspost.media_metadata;
                    post.urlOverridden = crosspost.url_overridden_by_dest;
                }

                // Fetch and add user data.

                // If user is deleted, add filler data to prevent errors.
                if (post.username === '[deleted]') {
                    post.userData = {
                        username: '[deleted]',
                        karma: 0,
                        pfp: ""
                    };
                } else {
                    try {
                        const userResponse = await fetch(`https://www.reddit.com/user/${child.data.author}/about.json`);
                        const userData = await userResponse.json();
                        // Add the user data to the post, only keeping the fields we need
                        post.userData = {
                            username: userData.data.name,
                            karma: userData.data.total_karma,
                            pfp: userData.data.icon_img
                        };

                    } catch (error) {
                        console.error("Error during user fetch:", error);
                    }
                }

                return post;
            });

            Promise.all(posts)
                .then(resolvedPosts => {
                    dispatch(setSubredditData(resolvedPosts));
                });

        } catch (error) {
            console.error("Error during fetch:", error);
        }
    }, [dispatch]);


    // Call the fetchSubreddits function to trigger the API request and update Redux state
    useEffect(() => {
        fetchSubreddits(subreddit);
        window.scrollTo(0, 0); // Go to top of page.
    }, [subreddit, fetchSubreddits]);

    // Filter posts by checking if post author is in arrested users list
    let filteredPosts = subredditData.filter(post => !arrestedUsers.includes(post.username));

    // Check if there are search results and filter posts accordingly
    if (searchResults.length > 0) {
        filteredPosts = filteredPosts.filter(post => searchResults.includes(post.postId));
    }

    // Create a new, sorted array of posts based on sort order.
    const sortOrder = useSelector(selectSort);
    let sortedSubredditData = [];

    if (sortOrder === "descending") {
        sortedSubredditData = [...filteredPosts]
            .sort((a, b) => b.userData.karma - a.userData.karma);
    } else {
        sortedSubredditData = [...filteredPosts]
            .sort((a, b) => a.userData.karma - b.userData.karma);
    }

    return (
        <div>
          {error ? (
            <ErrorCard error={error} />
          ) : noResults ? (
            <NoSearchResultsCard />
          ) : (
            sortedSubredditData.length > 0 ? (
              sortedSubredditData.map((post, i) => (
                <Card
                  post={post}
                  key={i}
                />
              ))
            ) : (
              <></> // loading card here?
            )
          )}
        </div>
      );
    };
export default Posts;