import { useState } from "react";
import FacialExpression  from "./components/FacialExpression";

import MoodSongs from "./components/MoodSongs";



const App = () => {
  const [Songs, setSongs] = useState([
    
  ])
  return (<>
  <FacialExpression setSongs={setSongs}/>
  <MoodSongs Songs={Songs}/>
  
  </>);

  
}

export default App