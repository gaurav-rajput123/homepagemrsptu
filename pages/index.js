import { useEffect } from "react";
import HomeAbout1 from "../src/components/Home/HomeAbout1";
import HomeBanner1 from "../src/components/Home/HomeBanner1";
import HomeFeatures from "../src/components/Home/HomeFeatures";
import HomeHero from "../src/components/Home/HomeHero";
import HomeIPage from "../src/components/Home/HomeIPage";
import HomeSelect from "../src/components/Home/HomeSelect";
import Demo1 from "./home";


const index = () => {

  
  return (
    <>
  
    <div id="page" className="page-wrapper demo" onLoad={()=>{window.scrollTo("0px","0px")}}>
      <Demo1/>
    </div>
    </>
  );
};

export default index;
