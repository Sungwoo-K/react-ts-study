interface WelcomeMessageProps {
  name?: string;
}

const WelcomeMessage = ({ name = "chatGPT" }: WelcomeMessageProps) => {
  return (
    <div>
      <h1 style={{ color: "green" }}>Welcome, {name}! </h1>
      <p>This is an example of JSX in React.</p>
    </div>
  );
};

export default WelcomeMessage;
