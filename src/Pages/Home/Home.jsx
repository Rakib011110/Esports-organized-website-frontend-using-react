import FeatureGames from "./Components/FeatureGames/FeatureGames";
import { Helmet } from "react-helmet-async";
import FlipCard from "./Components/Fetured/FlipCard";
import ReviewSection from "./Components/ReviewSection/ReviewSection";
import "./Home.css";
import SiteStates from "./Components/SiteStates/SiteStates";
import Banner from "./Components/Banner";
import LatestGallery from "./Components/LatestGallery/LatestGallery";
import BlogAndNews from "./Components/BlogAndNews";
import StayConnect from "./Components/StayConnect/StayConnect";
import OurTeamMembers from "./Components/OurTeamMembers/OurTeamMembers";
import Category from "./Components/Category/Category";
import PrizePoolJoin from "./Components/PrizePoolJoin/PrizePoolJoin";
import Newsletter from "../Newsletter/Newsletter";
const Home = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <Helmet>
        <title>Titans Arena || Home</title>
      </Helmet>
      <div id="#top">
        <Banner />
      </div>

      <div className="max-w-[1280px] mx-auto">
        <FlipCard />
        <Category />
        <PrizePoolJoin />
        <div className="w-full">
          <FeatureGames />
        </div>
        <SiteStates />
        <LatestGallery />
        <BlogAndNews />
        <ReviewSection />
        {/* <OurTeamMembers /> */}
        <Newsletter />
        <StayConnect />
      </div>
    </div>
  );
};

export default Home;
