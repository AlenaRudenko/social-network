import { IDialogueMess } from "../../../redux/store";

interface IProps {
  message: IDialogueMess["message"];
  newMessageBody: string;
  myMessages: IDialogueMess[];
  addMessage: () => void;
  onHandleChanges: (value: string) => void;
}

export const Message = (props: IProps) => {
  const onHandleChanges = (event: any) => {
    props.onHandleChanges(event.target.value);
  };
  const addMessage = () => {
    props.addMessage();
  };
  return (
    <div className="message">
      <div className="first">
        <span>{props.message}</span>
      </div>
      {props.myMessages.map((message) => {
        if (message.id === "0") {
          return (
            <div className="second">
              <span>{message.message}</span>
            </div>
          );
        } else return "";
      })}
      <div className="answer__container">
        <input
          value={props.newMessageBody}
          type="text"
          className="answer__input"
          onChange={onHandleChanges}
        />
        <button onClick={addMessage} className="send__button">
          send
        </button>
      </div>
    </div>
  );
};
