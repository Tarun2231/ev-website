import { useState } from "react"
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  let heroDate=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  // if the function setherCount usestate is 0,1,2 it will display the images only when theplayStatus is false
  const [heroCount,setheroCount]=useState(2);

  // if the usestate us true it will display the video.
  const [playStatus,setplayStatus]=useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
    </div>
  )
}

export default App
