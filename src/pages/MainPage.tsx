import LookList from "../components/lookidsmain/LookList";
import TodayLookList from "../components/lookidsmain/TodayLookList";
import TabBar from "../components/lookidsmain/TabBar";
import LinksNav from "../components/lookidsmain/LinksNav";
import MobileNavTabBar from "../components/layout/MobileNavTabBar";
import { MainHeader } from "../components/layout/Header";
import { LookidsGlobalStyle } from "../components/lookidsmain/LookkidsGlobalStyle";
import ToastUIContainer from "../components/common/ToastUI";
import TimeCheck from "../components/lookidsmain/TimeCheck";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { fetchUser } from "../apis/AuthApi";
import { fetchUserSuccess } from "../redux/modules/userSlice";
// const checkFairy = (fairy: string) => {
//   return fairy !== null;
// };

const MainPage = () => {
  // const dispatch = useDispatch();
  // const { data, isLoading, isError } = useQuery("user", fetchUser);
  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }
  // if (isError) {
  //   return <span>Error</span>;
  // }

  // const hasFairy = checkFairy(data.fairy);

  return (
    <>
      <TimeCheck />
      <LookidsGlobalStyle />
      <MainHeader />
      <ToastUIContainer />
      <TabBar />
      <LookList />
      <LinksNav />
      <TodayLookList />
      <MobileNavTabBar />
    </>
  );
};

export default MainPage;
