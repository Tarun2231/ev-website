import { useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];
  // if the function setherCount usestate is 0,1,2 it will display the images only when theplayStatus is false
  const [heroCount, setheroCount] = useState(2);

  // if the usestate us true it will display the video.
  const [playStatus, setplayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero

        // in the hero component we will pass the props
        // 1st we will pass setplaystatus using that we can change the valiue of playstatus either true or false
        // using that ever video in the backround will be playes or paused.
        setplayStatus={setplayStatus}

        // next we will pass the heroData
        heroData={heroData}

        // we will pass the herocount
        heroCount={heroCount}

        // we will pass the setheroCount and playstatus
        setheroCount={setheroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
