import NavBar from "../components/navbar";
import LeaderBoard from "../components/leaderboard";
import Feed from "../components/home/feed";
import Trending from "../components/home/trending";
import "../assets/styles/forums/forum.css";

interface ForumProps {
    props: {
      location: {
        pathname: string
      }
    }
}

const Forum: React.FC<ForumProps> = ({ props }): JSX.Element => {
  const forum: string = props.location.pathname.slice(8);
  return (
    <>
      <NavBar title={forum} />
      <div className="row">
        <div className="col">
          <LeaderBoard />
        </div>
        <div className="col">
          <Feed forum={forum} />
        </div>
        <div className="col">
          <Trending />
        </div>
      </div>
    </>
  );
};

export default Forum;