import { Profile } from "./Profile/UserProfileHome";
import { FriendList } from "./FriendList/FriendList";
import { Statistics } from "./Statistics/UserStatistic";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </>
  );
};
