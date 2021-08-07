import React, { useEffect, useState, Component } from "react";
import "../assets/styles/home/navbar.css";
import { Input } from "reactstrap";
import { Redirect, Link } from "react-router-dom";
import blank_profile from "../assets/images/blank_profile.png";

const profile1 = {
  firstName: "Malachi",
  lastName: "Ashley",
  userName: "malachimda101",
};

const forums: Forums[] = [
  { label: "TSLALOVERS", value: "0" },
  { label: "AMCFANATICS", value: "1" },
  { label: "AMCFANATICSKNock", value: "2" },
];

interface Forums {
  label: string,
  value: string,
}

interface NavBarProps {
  title: string
}

const filterForums = (forums: Forums[], query: string) => {
  if (!query) {
    return forums;
  }
  return forums.filter((forum) => {
    const forumName = forum.label.toLowerCase();
    return forumName.slice(0, query.length) == query.toLowerCase();
  });
};

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cursor, setCursor] = useState(-1);
  const filteredForums = filterForums(forums, searchTerm);
  const [goToForum, setGoToForum] = useState(false);

  const userId = "ad3d2af1-2372-4ea1-ac96-c7cf1aab4f09";

  useEffect(() => {
    fetch(`http://localhost:8080/api/users/${userId}`).then(response => response.json()).then(data => console.log(data));
  },[])

  function handleSearchBarChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    setCursor(-1);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.key, "e")
    if (e.key === "ArrowUp" && cursor > -1) {
      e.preventDefault();
      setCursor((cursor) => cursor - 1);
    } else if (e.key === "ArrowDown"  && cursor < filteredForums.length - 1) {
      e.preventDefault();
      setCursor((cursor) => cursor + 1);
    } else if (e.key === "Enter" && cursor > -1) {
      setSearchTerm(filteredForums[cursor].label);
      if (filteredForums[cursor].label === title) {
        setSearchTerm("");
        return;
      }
      setGoToForum(true);
    }
  }

  function handleSearchClick(e: any) {
    setSearchTerm(e.target.innerHTML);
    if (e.target.innerHTML === title) {
      setSearchTerm("");
      return;
    }
    setGoToForum(true);
  }

  if (goToForum) {
    return <Redirect to={`/forums/${searchTerm}`} />;
  }

  return (
    <>
      <div className="navbar">
        <div className="title-text">{title}</div>
        <div className="user-profile">
          <div className="profile-img-container">
            <img className="profile-img" src={blank_profile}></img>
          </div>
          <div className="user-info">
            <div className="profile-name">{profile1.firstName + " " + profile1.lastName}</div>
          <div className="username">{"@" + profile1.userName}</div>
        </div>
        </div>
      </div>
      <hr className="nav-line"></hr>
      <div className="search-bar-container">
        <Input
          className="search-bar"
          value={searchTerm}
          onChange={(e:  React.ChangeEvent<HTMLInputElement>) => handleSearchBarChange(e)}
          placeholder="Search"
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
          spellCheck={false}
        />
        {filteredForums.length !== 0 && searchTerm.length !== 0 ? (
          <div className="search-list-container">
            <ul className="search-list">
              {filteredForums.map((forum, idx) => (
                <li
                  className={
                    cursor === idx
                      ? "search-list-item-active"
                      : "search-list-item"
                  }
                  key={idx}
                  onClick={(e: any) => handleSearchClick(e)}
                >
                  {forum.label}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NavBar;
