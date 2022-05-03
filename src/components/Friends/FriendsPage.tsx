import { ISidebarItem } from "../../redux/store";
import "./FriendItem/friends.css";

interface IProps {
  sideBar: ISidebarItem[];
}

export const FriendsPage = (props: any) => {
  const state = props.store.getState().sideBar;
  return (
    <div className="friends__list">
      {state.map((friend) => (
        <div className="friendsPage">
          <div className="friend__pic">
            <img src={friend.avatar} alt="" />
          </div>

          <span>{friend.name}</span>
        </div>
      ))}
    </div>
  );
};
