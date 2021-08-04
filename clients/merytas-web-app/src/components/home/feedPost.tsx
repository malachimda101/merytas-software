import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/home/feedPost.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";


interface FeedPostProps {
    userName: string,
    firstName: string,
    lastName: string,
    content: string,
    dateTime: string,
    percent: number,
    likeNumber: number,
    comments: number,
    status: string,
    forum: string,
    img: string,
    returnPercent: number,
    likeStatus: boolean
}

const FeedPost: React.FC<FeedPostProps> = ({
  userName,
  firstName,
  lastName,
  content,
  dateTime,
  percent,
  likeNumber,
  comments,
  status,
  forum,
  img,
  returnPercent,
  likeStatus,
}) => {
  const [liked, setLiked] = useState(likeStatus);
  const [likes, setLikes] = useState(likeNumber);
  const handleLikeChange = () => {
    setLiked(!liked);
    if (liked) {
      setLikes((likes) => likes - 1);
    } else {
      setLikes((likes) => likes + 1);
    }
  };
  return (
    <>
      <div className="feed-post">
        <div className="feed-row">
          <div className="user-profile-feed">
            <div className="profile-img-container-feed">
              <img className="profile-img-feed" src={img}></img>
            </div>
            <div className="user-info-feed">
              <div className="profile-name-feed">
                {firstName + " " + lastName}
              </div>
              <div className="username-feed">{"@" + userName}</div>
            </div>
            <div className="percent-container">
              <div
                className={percent >= 0 ? "year-return-pos" : "year-return-neg"}
              >
                Average Return
              </div>
              <div className="percent">{percent + "%"}</div>
            </div>
          </div>
          <div className="date-time">{dateTime}</div>
        </div>
        <div className="content">{content}</div>
        <div className="feed-info-row">
          <div className="likes">
            {liked ? (
              <AiTwotoneLike
                className="like-icon"
                onClick={() => handleLikeChange()}
              />
            ) : (
              <AiOutlineLike
                className="like-icon"
                onClick={() => handleLikeChange()}
              />
            )}
            <div className="like-number">{likes}</div>
          </div>
          <div className="comments">
            <FaRegComment className="comment-icon" />
            <div className="comment-number">{comments}</div>
          </div>
          <div className={"status-" + status.toLowerCase()}>
            {status.toUpperCase()} &nbsp;
            {status == "Open" ? (
              <div className="return-percent">
                Current Return:
                <p className="percent-return"> &nbsp; {returnPercent + "%"}</p>
              </div>
            ) : (
              <div className="return-percent">
                Total Return:
                <p className="percent-return">&nbsp; {returnPercent + "%"}</p>
              </div>
            )}
          </div>
          <div className="forum">
            <u>
              <Link to={`/forums/${forum}`}>{forum}</Link>
            </u>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedPost;
