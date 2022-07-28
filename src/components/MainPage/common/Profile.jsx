import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfileImg from "../../../elem/ProfileImg";

const Profile = ({ img, nickname, userId, rank }) => {
  return (
    <WrapProfile>
      <ProfileImg size="size3" rank={rank} src={img} />
      <p>
        <Link to={`/search/article/${nickname}/${userId}/1`}>{nickname}</Link>
      </p>
    </WrapProfile>
  );
};

export default Profile;

const WrapProfile = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  p {
    font-size: 14px;
    font-weight: 300;
    color: var(--gray3);
  }
`;
