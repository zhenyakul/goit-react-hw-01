import "./App.css";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import Transactions from "./Transactions/Transactions";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};

export default App;
