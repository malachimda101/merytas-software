import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/home/trending.css";

const likeBoard: string[] = [
  "VALUEINVESTING",
  "AMCFANATICS",
  "EVSTOCKS",
  "TSLALOVERS",
  "BITCOINGANG",
  "ETHEREUM",
  "SOLARPOWER",
  "WEEDSTONKS",
  "CRYPTOSLOOTS",
  "BONDBITCHES",
];
const postBoard: string[] = [
  "VALUEINVESTING",
  "EVSTOCKS",
  "AMCFANATICS",
  "BITCOINGANG",
  "BONDBITCHES",
  "WEEDSTONKS",
  "ETHEREUM",
  "TSLALOVERS",
  "SOLARPOWER",
  "CRYPTOSLOOTS",
];
const commentBoard: string[] = [
  "AMCFANATICS",
  "CRYPTOSLOOTS",
  "BITCOINGANG",
  "ETHEREUM",
  "VALUEINVESTING",
  "TSLALOVERS",
  "SOLARPOWER",
  "WEEDSTONKS",
  "EVSTOCKS",
  "BONDBITCHES",
];

const sortOptions: SortOption[] = [
  { label: "Likes", value: likeBoard },
  { label: "Comments", value: commentBoard },
  { label: "Recent Posts", value: postBoard },
];

interface SortOption {
    label: string,
    value: string[]
}

const Trending: React.FC = () => {
  const [sortBy, setsortBy] = useState<SortOption>({ label: "Likes", value: likeBoard });
  const [displaySort, setDisplaySort] = useState<boolean>(false);

  const handleSortChange = (option: SortOption) => {
    setDisplaySort(!displaySort);
    setsortBy(option);
  };

  return (
    <>
      <div className="trending">
        <p className="trending-text">TRENDING</p>
        <hr className="trending-line"></hr>
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
                {sortOptions.map((option: SortOption, idx: number) => (
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
        </div>
        <ul className="trending-list">
          {sortBy.value.map((trending: string, idx: number) => (
            <li className="trending-list-item" key={idx}>
              {idx + 1 + "."} &nbsp;
              <Link style={{ color: "black" }} to={`/forums/${trending}`}>
                {trending}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Trending;
