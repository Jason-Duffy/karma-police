import React from "react";
import '../stylesheets/SubredditMenu.css';

const SubredditMenu = () => {
    return (
        <div className="subredditMenu">
            <p>Subreddit</p>
            <ul>
                <li><button>r/radiohead</button></li>
                <li><button>r/britishproblems</button></li>
                <li><button>r/PizzaCrimes</button></li>
                <li><button>r/ProgrammerHumor</button></li>
                <li><button>r/softwaregore</button></li>
                <li><button>r/badcode</button></li>
                <li><button>r/AmITheAsshole</button></li>
                <li><button>r/chemicalreactiongifs</button></li>
                <li><button>r/programming</button></li>
                <li><button>r/UKhiking</button></li>
                <li><button>r/shittyrobots</button></li>
            </ul>
        </div>
    );
};

export default SubredditMenu;