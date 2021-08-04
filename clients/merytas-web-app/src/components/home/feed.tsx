import React, { Component } from "react";
import FeedPost from "./feedPost";
import "../../assets/styles/home/feed.css";
import blank_profile from "../../assets/images/blank_profile.png";

const feedPost1 = {
  userName: "xbaby123",
  firstName: "Xavier",
  lastName: "Cardoza",
  content: "Just bought 10 shares of TSLA plan to hold for atleast one month.",
  dataTime: new Date().toDateString(),
  percent: 10.5,
  likeNumber: 52,
  comments: 9,
  status: "Open",
  forum: "TSLALOVERS",
  img: blank_profile,
  returnPercent: 12.2,
  likeStatus: false,
};

const feedPost2 = {
  userName: "danielsmac",
  firstName: "Daniel",
  lastName: "Mac",
  content:
    "Just sold my AMC shares nice little profit for over a 2 month period.",
  dataTime: new Date().toDateString(),
  percent: 14.15,
  likeNumber: 79,
  comments: 13,
  status: "Closed",
  forum: "AMCFANATICS",
  img: blank_profile,
  returnPercent: 19.56,
  likeStatus: true,
};

interface FeedProps {
    forum: string
}

const Feed: React.FC<FeedProps> = ({ forum }) => { 
  return (
    <>
      <div className="feed">
        <div className="feed-title">FEED</div>
        <hr className="feed-line"></hr>
        <FeedPost
          userName={feedPost1.userName}
          firstName={feedPost1.firstName}
          lastName={feedPost1.lastName}
          content={feedPost1.content}
          dateTime={feedPost1.dataTime}
          percent={feedPost1.percent}
          likeNumber={feedPost1.likeNumber}
          comments={feedPost1.comments}
          status={feedPost1.status}
          forum={feedPost1.forum}
          img={feedPost1.img}
          returnPercent={feedPost1.returnPercent}
          likeStatus={feedPost1.likeStatus}
        />
        <FeedPost
          userName={feedPost2.userName}
          firstName={feedPost2.firstName}
          lastName={feedPost2.lastName}
          content={feedPost2.content}
          dateTime={feedPost2.dataTime}
          percent={feedPost2.percent}
          likeNumber={feedPost2.likeNumber}
          comments={feedPost2.comments}
          status={feedPost2.status}
          forum={feedPost2.forum}
          img={feedPost2.img}
          returnPercent={feedPost2.returnPercent}
          likeStatus={feedPost2.likeStatus}
        />
      </div>
    </>
  );
};

export default Feed;
