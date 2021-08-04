import NavBar from "../components/navbar";
import LeaderBoard from "../components/leaderboard";
import Feed from "../components/home/feed";
import Trending from "../components/home/trending";
import "../assets/styles/home/home.css";

const Home: React.FC = () => {
  return (
    <>
      <NavBar title={"MERYTAS"} />
      <div className="row">
        <div className="col">
          <LeaderBoard />
        </div>
        <div className="col">
          <Feed />
        </div>
        <div className="col">
          <Trending />
        </div>
      </div>
    </>
  );
};

export default Home;
