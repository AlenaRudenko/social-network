import "./dialogues.css";
import { DialogItem } from "./DialogItem/DialogItem";

import { Routes, Route } from "react-router-dom";
import { MessageContainer } from "./Message/MessageContainer";

// компонент диалогов
export const Dialogues = (props) => {
  const state = props.store.getState().dialoguesPage;
  let messagesElements = state.messages.map((message) => (
    <Route
      path={message.id}
      element={
        <MessageContainer
          store={props.store}
          message={message.message}
          newMessageBody={state.newMessageBody}
          myMessages={state.messages}
        />
      }
    />
  ));

  return (
    <div className="dialogues">
      <div className="dialogues__items">
        {state.dialoguesData.map((dialogue) => (
          <DialogItem
            user={props.store
              .getState()
              .sideBar.find((item) => item.id === dialogue.id)}
            name={dialogue.name}
            id={dialogue.id}
          />
        ))}
      </div>
      <div className="messages">
        <Routes>{messagesElements}</Routes>
        <div> </div>
      </div>
    </div>
  );
};
