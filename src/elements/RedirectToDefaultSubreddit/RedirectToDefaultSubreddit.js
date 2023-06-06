// React module imports.
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// Local imports.
import subredditList from '../../assets/data/subreddits.json';


const RedirectToDefaultSubreddit = () => {
    const navigate = useNavigate();
    
    // Get first subreddit from list.
    const defaultSubreddit = subredditList[0];
  
    useEffect(() => {
        navigate(`/${defaultSubreddit}`);
    }, [navigate]);

    return null;  // This component does not render anything
};

export default RedirectToDefaultSubreddit;