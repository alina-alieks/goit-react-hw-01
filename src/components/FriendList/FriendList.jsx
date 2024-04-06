import css from "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"

export default function FriendList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem friend={friend} />
	            </li>
            ))}
        </ul>
    )
}
