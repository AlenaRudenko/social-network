// контейнер сообщения

import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../../redux/dialoguesReducer";
import { IDialogueMess } from "../../../redux/store";

import { Message } from "./Message";

interface IProps {
  message: IDialogueMess["message"];
  newMessageBody: string;
  myMessages: IDialogueMess[];
}

export const MessageContainer = (props: any) => {
  const onHandleChanges = (value: string) => {
    props.store.dispatch(updateNewMessageBodyCreator(value));
  };
  const addMessage = () => {
    props.store.dispatch(sendMessageCreator());
    props.store.dispatch(updateNewMessageBodyCreator(""));
  };
  return (
    <Message
      message={props.message}
      newMessageBody={props.newMessageBody}
      myMessages={props.myMessages}
      addMessage={addMessage}
      onHandleChanges={onHandleChanges}
    />
  );
};
