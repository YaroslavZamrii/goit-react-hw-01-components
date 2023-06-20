export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li class="item" key={id}>
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
