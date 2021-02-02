import React from "react";
import Sky from 'react-sky';
import logo1 from "./assets/coding.png"
import logo2 from "./assets/binary-code.png"
import logo3 from "./assets/code.png"
import logo4 from "./assets/structure.png"
import logo5 from "./assets/browser.png"
function App() {
  
   
  
    return (
      <>
      <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: logo1,  /* You can pass as many images as you want */
            2: logo1,
            3: logo2,
            4: logo2,
            5: logo3,
            6: logo3,
            7: logo4,
            8: logo4,
            9: logo5,
            10: logo5,
            
            /* 3: your other image... */
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={20} /* Pass the number of images Sky will render chosing randomly */
          time={10} /* time of animation */
          size={'100px'} /* size of the rendered images */
          background={'#263238'} /* color of background */
        />
      </>
    );
  
    }
export default App;
