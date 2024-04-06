import css from "./FriendListItem.module.css"
import clsx from "clsx"

export default function FriendListItem({ friend }) {
    return (
        <div className={css.wrapperCardFriend}>
            <img className={css.friendImg} src={friend.avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{friend.name}</p>
            <p className={clsx(friend.isOnline ? css.isOnline : css.isOffline)}>{friend.isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}