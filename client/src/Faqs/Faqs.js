import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse  from 'react-bootstrap/Collapse';

function Faqs() {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [openFour, setOpenFour] = useState(false);
  const [openFive, setOpenFive] = useState(false);
  const [openSix, setOpenSix] = useState(false);
  const [openSeven, setOpenSeven] = useState(false);
  const [openEight, setOpenEight] = useState(false);
  const [openNine, setOpenNine] = useState(false);
  const [openTen, setOpenTen] = useState(false);
  const [openEleven, setOpenEleven] = useState(false);
  const [openTwelve, setOpenTwelve] = useState(false);
  const [openThirteen, setOpenThirteen] = useState(false);
  const [openFourteen, setOpenFourteen] = useState(false);
  const [openFifteen, setOpenFifteen] = useState(false);
  const [openSixteen, setOpenSixteen] = useState(false);

  return (
    <>
      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px",}}>
            
                           <div className="card-header question" onClick={() => setOpenOne(!openOne)} style={{}}>
                             <div  >1. On which crops I can use drones for aerial spraying?</div>
                           </div>
                          <Collapse  in={openOne} style={{}}>
                          <div className="answer">
                              Typically field crops like paddy, sugarcane, red gram, cotton etc.
                          </div>
                          </Collapse>
                          
         </div>


      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenTwo(!openTwo)} style={{borderRadius:"0px"}}>
                             <div>2. What is the quantity of liquid will be sprayed from the drone per acre?</div>
                           </div>
                          <Collapse  in={openTwo} style={{}}>
                          <div className="answer">
                              Typically, 10 L liquid will be sprayed depending on the application.
                          </div>
                          </Collapse>
                          
         </div>

      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px",border:"none"}}>
            
                           <div className="card-header question" onClick={() => setOpenThree(!openThree)} style={{borderRadius:"0px"}}>
                             <div>3. How many acres can be sprayed by drone in a day?</div>
                           </div>
                          <Collapse  in={openThree} style={{}}>
                          <div className="answer">
                              On an average 15 to 20 acre is possible with supporting weather conditions.
                          </div>
                          </Collapse>
                          
         </div>


      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenFour(!openFour)} style={{borderRadius:"0px"}}>
                            <div>4. Does quantity of the medicine changes for the drone compared to manual spray?</div>
                           </div>
                          <Collapse  in={openFour} style={{}}>
                          <div className="answer">
                              No, as per the usual practice whatever will be sprayed for an acre with manual spray, the same amount of medicine will be dispersed.
                          </div>
                          </Collapse>
                          
         </div>
      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px",border:"none"}}>
            
                           <div className="card-header question" onClick={() => setOpenFive(!openFive)} style={{borderRadius:"0px"}}>
                             <div>5. Does all the medicine available in the market can be sprayed in the drone?</div>
                           </div>
                          <Collapse  in={openFive} style={{}}>
                          <div className="answer">
                              95% of the most of tested products are compatible with drone spray.
                          </div>
                          </Collapse>
                          
         </div>


      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenSix(!openSix)} style={{borderRadius:"0px"}}>
                             <div>6. How much water can be saved with optimized drone spray?</div>
                           </div>
                          <Collapse  in={openSix} style={{}}>
                          <div className="answer">
                              Atleast 80 to 90% of the water volume will be saved.
                          </div>
                          </Collapse>
                          
         </div>
      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenSeven(!openSeven)} style={{borderRadius:"0px"}}>
                            <div>7. Can I spray the medicine through drone in the night?</div>
                           </div>
                          <Collapse  in={openSeven} style={{}}>
                          <div className="answer">
                              No, drones cannot be used for aerial spraying in the night.
                          </div>
                          </Collapse>
                          
         </div>


      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenEight(!openEight)} style={{borderRadius:"0px"}}>
                             <div>8. My plot is quite steep, can i use drone?</div>
                           </div>
                          <Collapse  in={openEight} style={{}}>
                          <div className="answer">
                             Yes, all the MD series agricultural drone is integrated with terrain RADAR, which makes drone to adjust the terrain.
                          </div>
                          </Collapse>
                          
         </div>
      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenNine(!openNine)} style={{borderRadius:"0px"}}>
                             <div>9. My plot is irregular, if I use drones, will medicine get wasted?</div>
                           </div>
                          <Collapse  in={openNine} style={{}}>
                          <div className="answer">
                              No, with the GPS mapping, medicine will be dispersed precisely.
                          </div>
                          </Collapse>
                          
         </div>


      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenTen(!openTen)} style={{borderRadius:"0px"}}>
                             <div>10. Though my plot has a field crop, there is a electrical pole, is that fine to fly the drone?</div>
                           </div>
                          <Collapse  in={openTen} style={{}}>
                          <div className="answer">
                              Absolutely no problem, since all our MD series drones are equipped with obstacle avoidance RADAR, we can fly the drone.
                          </div>
                          </Collapse>
                          
         </div>
      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px",border:"none"}}>
            
                           <div className="card-header question" onClick={() => setOpenEleven(!openEleven)} style={{borderRadius:"0px"}}>
                             <div>11. How do you know, how much chemical is left?</div>
                           </div>
                          <Collapse  in={openEleven} style={{}}>
                          <div className="answer">
                              Data will be precisely indicated in the GCS (Ground Control Software).
                          </div>
                          </Collapse>
                          
         </div>


      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenTwelve(!openTwelve)} style={{borderRadius:"0px"}}>
                             <div>12. Can I use the adjuvants?</div>
                           </div>
                          <Collapse  in={openTwelve} style={{}}>
                          <div className="answer">
                              Yes, you can use adjuvants upon the advice from the agricultural experts.
                          </div>
                          </Collapse>
                          
         </div>
      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenThirteen(!openThirteen)} style={{borderRadius:"0px"}}>
                             <div>13. What is the spray swath of the drone?</div>
                           </div>
                          <Collapse  in={openThirteen} style={{}}>
                          <div className="answer">
                              Usually, spray swath of the drone would be 3 to 4 m.
                          </div>
                          </Collapse>
                          
         </div>


      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenFourteen(!openFourteen)} style={{borderRadius:"0px"}}>
                             <div>14. How fast drone can fly?</div>
                           </div>
                          <Collapse  in={openFourteen} style={{}}>
                          <div className="answer">
                              It can fly from a speed of 1 m/s to 9 m/s.
                          </div>
                          </Collapse>
                          
         </div>
      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px",border:"none"}}>
                           <div className="card-header question" onClick={() => setOpenFifteen(!openFifteen)} style={{borderRadius:"0px"}}>
                             <div>15. What is the application efficiency of the spray?</div>
                           </div>
                          <Collapse  in={openFifteen} style={{}}>
                          <div className="answer">
                              It is 30 times efficient vs manual operation.
                          </div>
                          </Collapse>
                          
         </div>


      <div className="card card-faq mt-1" style={{padding:"0px",borderRadius:"0px"}}>
            
                           <div className="card-header question" onClick={() => setOpenSixteen(!openSixteen)} style={{borderRadius:"0px"}}>
                             <div>16. What are the principle benefits of using agri drone?</div>
                           </div>
                          <Collapse  in={openSixteen} style={{}}>
                          <div className="answer">
                              Spray at faster pace, accuracy, lesser health hazardous, uniformity.
                          </div>
                          </Collapse>
                          
         </div>


    </>
  );
}

export default Faqs;