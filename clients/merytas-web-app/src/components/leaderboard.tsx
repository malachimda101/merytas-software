import React, { useState, Component } from "react";
import "../assets/styles/home/leaderBoard.css";

const monthBoard = [
  {
    userName: "malachimda101",
    percentage: 50,
  },
  {
    userName: "churndog",
    percentage: 42,
  },
  {
    userName: "xbaby",
    percentage: 25,
  },
  {
    userName: "ldaddy",
    percentage: 18,
  },
];

const weekBoard = [
  {
    userName: "churndog",
    percentage: 22,
  },
  {
    userName: "malachimda101",
    percentage: 18,
  },
  {
    userName: "ldaddy",
    percentage: 10,
  },
  {
    userName: "xbaby",
    percentage: 7,
  },
  {
    userName: "shap",
    percentage: 6.969,
  },
  {
    userName: "matty",
    percentage: 5,
  },
  {
    userName: "jober",
    percentage: 4,
  },
  {
    userName: "qhot",
    percentage: -4,
  },
  {
    userName: "bass",
    percentage: -5,
  },
  {
    userName: "dick",
    percentage: -7,
  },
];

const yearBoard = [
  {
    userName: "ldaddy",
    percentage: 17,
  },
  {
    userName: "churndog",
    percentage: 12,
  },
  {
    userName: "malachimda101",
    percentage: 10,
  },
  {
    userName: "xbaby",
    percentage: 4,
  },
];

const allTimeBoard = [
  {
    userName: "malachimda101",
    percentage: 104,
  },
  {
    userName: "churndog",
    percentage: 17,
  },
  {
    userName: "ldaddy",
    percentage: 0,
  },
  {
    userName: "xbaby",
    percentage: -10,
  },
];

const sortOptions = [
  { label: "1 Week", value: weekBoard },
  { label: "1 Month", value: monthBoard },
  { label: "1 Year", value: yearBoard },
  { label: "All Time", value: allTimeBoard },
];

interface SortOption {
  label: string,
  value: LeaderOption[]
}

interface LeaderOption {
  userName: string,
  percentage: number
}


const LeaderBoard = () => {
  const [sortBy, setsortBy] = useState<SortOption>({ label: "1 Week", value: weekBoard });
  const [displaySort, setDisplaySort] = useState<boolean>(false);

  const handleSortChange = (option: SortOption) => {
    setDisplaySort(!displaySort);
    setsortBy(option);
  };

  return (
    <>
      <div className="leaderboard">
        <p className="leaderboard-text">LEADERBOARD</p>
        <hr className="leaderboard-line"></hr>
        <div>
          Sort by:&nbsp;
          <u
            className="sort-selector"
            onClick={() => setDisplaySort(!displaySort)}
          >
            {sortBy.label}
          </u>
          {displaySort && (
            <div>
              <ul className="sort-options-list">
                {sortOptions.map((option, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleSortChange(option)}
                    style={{ cursor: "pointer" }}
                    className="sort-option"
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="leaderboard-list">
            {sortBy.value.map((leader, idx) => (
              <li className="leaderboard-list-item" key={idx}>
                {idx + 1 + ". " + leader.userName + " "}
                <p
                  className={
                    leader.percentage >= 0 ? "pos-percent" : "neg-percent"
                  }
                >
                  &nbsp; {leader.percentage + "%"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
