import Profile from "../Profile/Profile";
import userData from "../../userData.json";

import clsx from "clsx";
import css from "./App.module.css";

  
export default function App() {
  
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  )
}


