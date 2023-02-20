import { GlobalStyle } from "./GlobalStyle"


import { Profile } from "./Profile/Profile"
import dataProfile from "../data/user.json"

import { Statistics } from "./Stats/Statistics"
import stats from "../data/data.json"

import { FriendList } from "./Friends/Friends"
import friends from "../data/friends.json"


export const App = () => {
    return(<div>
        <Profile
            username={dataProfile.username}
            tag={dataProfile.tag}
            location={dataProfile.location}
            avatar={dataProfile.avatar}
            stats={dataProfile.stats}/>        
        <Statistics title="Upload stats" stats={stats}/>
        <FriendList friends={friends} />;
        <GlobalStyle/>
        </div>
    )
}