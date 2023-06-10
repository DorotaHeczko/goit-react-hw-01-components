import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={css.item} key={id}>
    <span className={`${css.status} ${isOnline ? css.true : ''}`}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width={48} />
    <p className={css.name}>{name}</p>
  </li>
);




FriendList.propTypes = {
  friends: PropTypes.array,
};

const { string, bool, number } = PropTypes;

FriendListItem.propTypes = {
  avatar: string,
  name: string,
  isOnline: bool,
  id: number,
};


