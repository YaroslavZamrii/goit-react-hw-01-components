import user from '../../user.json';
import { ProfileCard } from 'components/Profile/ProfileCard';

export const App = () => {
  return (
    <div>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
