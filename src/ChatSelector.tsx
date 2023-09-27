type Props = {
  onSelect: (path: string, title: string) => void;
  path: string;
  title: string;
};

function ChatSelector({ path, title, onSelect }: Props) {
  return (
    <p>
      <button onClick={() => onSelect(path, title)}>{title}</button>
    </p>
  );
}

export default ChatSelector;
