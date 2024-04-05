import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({name, tag, location, image, stats}) {
    
    return (
        <div className={css.wrapperUser}>
            <div className={css.wrapperUderDiscribe}>
                <img className={css.imageUser}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span className={css.textStatsItem}>Followers</span>
                    <span className={css.textStatsItemValue}>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.textStatsItem}>Views</span>
                    <span className={css.textStatsItemValue}>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.textStatsItem}>Likes</span>
                    <span className={css.textStatsItemValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}