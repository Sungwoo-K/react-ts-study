import react_icon from "./assets/react-icon.png";
import intro from "./assets/intro.mp4";
import WelcomeMessage from "./components/WelcomeMessage";
import Button from "./components/Button";

const App = () => {
  const handleClickPrimaryButten = () => {
    alert("Click me!!");
  };
  const handleClickSecondaryButten = () => {
    alert("Cancel");
  };

  return (
    <div>
      <img src={react_icon} alt="react icon" height={16} />
      <span>Hello, React!!</span>
      <div>
        <video width={480} height={270} controls loop autoPlay muted>
          <source src={intro} type="video/mp4" />
        </video>
      </div>
      <WelcomeMessage name={"React Typescript"} />
      <Button
        label={"Click me"}
        color={"primary"}
        onClick={handleClickPrimaryButten}
      />
      <Button
        label={"Cancle"}
        color={"secondary"}
        onClick={handleClickSecondaryButten}
      />
    </div>
  );
};

export default App;
