import { IPostdataItem } from "../../../../redux/state";
import "./Post.css";

export const Post = (props: IPostdataItem) => {
  return (
    <div>
      <div className="posts_item">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRoGlp3nyytKQkfv09-SDJXMwJ_SoKt7sY7A&usqp=CAU"
        />
        {props.message}
        <div>Like</div>
        {props.likesCount}
      </div>
    </div>
  );
};
