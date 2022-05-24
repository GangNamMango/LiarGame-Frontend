import React from "react";
import GlobalStyle from "../GlobalStyles";
import WaitingRoomContainer from "../components/WaitingRoomContainer";
import WaitVote from "../components/Game/WaiteVote";

const VoteWaitPage = () => {
  return (
    <>
      <GlobalStyle />
      <WaitVote/>
    </>
  );
};

export default VoteWaitPage;
