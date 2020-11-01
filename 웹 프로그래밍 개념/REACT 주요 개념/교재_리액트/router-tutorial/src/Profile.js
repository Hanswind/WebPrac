import React from "react";

const data = {
  velopert: {
    name: "KIM",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "HONG",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = ({ match }) => {
  console.log(match, match.params);
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
