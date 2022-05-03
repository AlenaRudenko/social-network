import { IState } from "../../redux/store";
import { MyPostsContainer } from "./MyPosts/MyPostContainer";
import "./profile.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

interface IProps {
  store: IState;
}
export const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};
