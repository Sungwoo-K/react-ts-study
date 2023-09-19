const Alert = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  const handleClickClose = () => {
    onClose();
  };
  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClickClose}>닫기</button>
    </div>
  );
};

export default Alert;
