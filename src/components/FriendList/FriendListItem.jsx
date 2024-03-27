import css from "./FriendListItem.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div>
      <img
        className={css.FriendListItemImage}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.FriendListItemName}>{name}</p>
      {isOnline ? (
        <p className={css.FriendListItemStatusOn}>Online</p>
      ) : (
        <p className={css.FriendListItemStatusOff}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
