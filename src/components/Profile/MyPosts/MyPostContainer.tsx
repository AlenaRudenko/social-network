import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/profileReducer";

import { MyPosts } from "./MyPosts";
import "./MyPosts.css";

export const MyPostsContainer = (props) => {
  const state = props.store.getState().profilePage;
  const onHandleChange = (value: string) => {
    props.store.dispatch(updateNewPostActionCreator(value));
  };
  const addValue = () => {
    if (state.newPostText) {
      props.store.dispatch(addPostActionCreator());
    }
  };

  return (
    <MyPosts
      updateNewPostText={onHandleChange}
      addPost={addValue}
      postsData={state.postsData}
      newPostText={state.newPostText}
    />
  );
};
