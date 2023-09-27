import { useState } from "react";
import "./App.css";
import Content from "./Content";
import OpenChatFrame from "./OpenChatFrame";

type Chat = {
  path: string;
  title: string;
};

function App() {
  const [leftChat, setLeftChat] = useState<Chat>({
    path: "/community/dgegb-daaaa-aaaar-arlhq-cai/channel/12148470416168947889486180374669069959",
    title: "Announcements",
  });
  const [rightChat, setRightChat] = useState<Chat>({
    path: "/community/dgegb-daaaa-aaaar-arlhq-cai/channel/20429314036340368324663327710074551214",
    title: "Bug Reports",
  });
  return (
    <>
      <div className="left">
        <OpenChatFrame {...leftChat} />
      </div>
      <Content
        onSelectLeftChat={(path, title) => setLeftChat({ path, title })}
        onSelectRightChat={(path, title) => setRightChat({ path, title })}
      />
      <div className="right">
        <OpenChatFrame {...rightChat} />
      </div>
    </>
  );
}

export default App;
