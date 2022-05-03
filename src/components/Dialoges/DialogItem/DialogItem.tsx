import { NavLink } from "react-router-dom";
import { IDialogueItem, ISidebarItem } from "../../../redux/state";

export interface IProps {
  user: ISidebarItem | undefined;
  name: IDialogueItem["name"];
  id: IDialogueItem["id"];
}

// один элемент диалога
export const DialogItem = (props: IProps) => {
  let path = "/dialogues/" + props.id;
  console.log(props.user);
  let color =
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
  return (
    <div className="dialoge">
      {props.user?.avatar ? (
        <img src={props.user.avatar} alt="" />
      ) : (
        <div className="ava" style={{ background: color }}></div>
      )}
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
