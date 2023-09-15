interface ButtonProps {
  label: string;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ label, color = "primary", onClick }: ButtonProps) => {
  const buttonStyle =
    color === "primary"
      ? { backgroundColor: "blue", color: "white" }
      : { backgroundColor: "gray" };

  const handleClick = (e: React.MouseEvent) => {
    onClick && onClick();
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
