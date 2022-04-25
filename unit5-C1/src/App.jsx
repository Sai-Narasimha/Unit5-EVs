import {useState} from 'react'

function App() {
  const [score,setScore] = useState(76)
  const [wickets,setWickets] = useState(2)
  const [ball,setBall] = useState(50)

  function indiaWon(){
    if(score > 100){
      return "India won"
    }
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{""}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">
            {
              // show wicket here
              wickets
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              ball
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>setScore(score+1)}>Add 1</button>
        <button className="addScore4" onClick={()=>setScore(score+4)}>Add 4</button>
        <button className="addScore6" onClick={()=>setScore(score+6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>setWickets(wickets+1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>setBall(ball+1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1 className="status">{indiaWon(score)}</h1>
   
    </div>
  );
}

export default App;
