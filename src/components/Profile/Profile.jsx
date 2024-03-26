import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsNums}>{stats.followers}</span>
        </li>

        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsNums}>{stats.views}</span>
        </li>

        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsNums}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
