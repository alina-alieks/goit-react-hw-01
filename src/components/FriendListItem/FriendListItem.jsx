import css from "./FriendListItem.module.css"
import clsx from "clsx"

export default function FriendListItem({ friend }) {
    return (
        <div>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            <p className={clsx(css.isOnline ? "isOnline" : "isOffline")}>{friend.isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}