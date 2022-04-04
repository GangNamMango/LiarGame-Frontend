import GlobalStyle from "../GlobalStyles";
import WaitingRoomContainer from "../components/WaitingRoomContainer";
import { PopUpProvider } from "../Context";
const WaitingRoomPage = () => {
  return (
    <>
      <PopUpProvider>
        <GlobalStyle />
        <WaitingRoomContainer />
      </PopUpProvider>
    </>
  );
};

export default WaitingRoomPage;
