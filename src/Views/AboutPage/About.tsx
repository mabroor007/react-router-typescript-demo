import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export const AboutPage: React.FC<Props> = ({ history }) => {

  const handleGotoSpecificAboutPage = () => {
    history.push("/About/mabroor", {
      peoples: ["Tina", "Mina", "Shiela"],
      mabroor: {
        name: "Mabroor Ahmad",
        age: "20",
        skill: "Full Stack Developer",
      },
    });
  };

  return (
    <div>
      <h3>AboutPage</h3>
      <button onClick={handleGotoSpecificAboutPage}>
        Go to Specific home page
      </button>
      <img src="http://picsum.photos/500" alt="A random image" />
    </div>
  );
};
