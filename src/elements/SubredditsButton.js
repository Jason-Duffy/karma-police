import React from "react";

const SubredditsButton = () => {
    return (
        <div className="subreddits-button">
            <button
                type="button"
                style={buttonStyle}
                onClick={changeSubreddit(subreddit)}
            />
        </div>
    );
};

export default SubredditsButton;