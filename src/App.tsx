import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";
import { Navbar } from "./components//Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogues } from "./components/Dialoges/Dialogues";
import { Music } from "./components/Music/Music";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./components/Settings/Settings";

import { FriendsPage } from "./components/Friends/FriendsPage";
import { IState } from "./redux/store";

interface IProps {
  store: IState;
}
export const App = (props: any) => {
  let appElement = [
    {
      path: "/profile",
      element: <Profile store={props.store} />
    },
    {
      path: "/dialogues/*",
      element: <Dialogues store={props.store} />
    },
    {
      path: "/news",
      element: <News />
    },
    {
      path: "/music",
      element: <Music />
    },
    {
      path: "/settings",
      element: <Settings />
    },
    {
      path: "/friends",
      element: <FriendsPage store={props.store} />
    }
  ];

  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Navbar store={props.store} />
        <div className="content">
          <Routes>
            {appElement.map((element) => (
              <Route path={element.path} element={element.element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};
