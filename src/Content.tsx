import ChatSelector from "./ChatSelector";
import "./Content.css";

type Props = {
  onSelectLeftChat: (path: string, title: string) => void;
  onSelectRightChat: (path: string, title: string) => void;
};

function Content({ onSelectLeftChat, onSelectRightChat }: Props) {
  return (
    <div className="content">
      <div className="header">
        <h3>VaultBet</h3>
      </div>
      <div className="middle">
        <div className="left">
          <h4>Choose a link to change the chat to the left</h4>

          <ChatSelector
            onSelect={onSelectLeftChat}
            path="/community/dgegb-daaaa-aaaar-arlhq-cai/channel/12148470416168947889486180374669069959"
            title="Announcements"
          />

          <ChatSelector
            onSelect={onSelectLeftChat}
            path="/community/dgegb-daaaa-aaaar-arlhq-cai/channel/174681535352094284612163711348576298496"
            title="Product Feedback"
          />

          <ChatSelector
            onSelect={onSelectLeftChat}
            path="/community/dgegb-daaaa-aaaar-arlhq-cai/channel/309853277321768416862922950227002295881"
            title="OpenChat Governance"
          />
        </div>

        <div className="right">
          <h4>Choose a link to change the chat to the right</h4>
          <ChatSelector
            onSelect={onSelectRightChat}
            path="/community/dgegb-daaaa-aaaar-arlhq-cai/channel/20429314036340368324663327710074551214"
            title="Bug Reports"
          />
          <ChatSelector
            onSelect={onSelectRightChat}
            path="/community/dgegb-daaaa-aaaar-arlhq-cai/channel/48403750671377195823995198515253191094"
            title="Feature Requests"
          />
          <ChatSelector
            onSelect={onSelectRightChat}
            path="/community/dgegb-daaaa-aaaar-arlhq-cai/channel/223994530455756160083190842770858638357"
            title="OpenChat Help"
          />
        </div>
      </div>
      <div className="footer">
        <h3>Footer</h3>
      </div>
    </div>
  );
}

export default Content;
