// React module imports.
import React from "react";
// Local imports.
// Style imports.

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