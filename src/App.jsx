import React, { useState } from "react";
import cutedoll from "./assets/cutedoll.gif";
import Yescard from "./Yescard";

function App() {
  const [showYesCard, setShowYesCard] = useState(false);
  const [showNoBox, setShowNoBox] = useState(false);
  const [position, setPosition] = useState({ top: "0px", left: "0px" });

  // No button ko random jagah bhejne ke liye
  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 200);
    const randomLeft = Math.floor(Math.random() * 200);

    setPosition({
      top: randomTop + "px",
      left: randomLeft + "px",
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-warning">

      <div className="card text-center shadow-lg p-4 position-relative" style={{ width: "350px", height:"450px" }}>

        {!showYesCard ? (
          <>
            <img
              src={cutedoll}
              alt="Friendship gif"
              className="img-fluid rounded mb-3"
              style={{ height: "180px", objectFit: "cover" }}
            />

            <h4 className="text-danger mb-3">
              Do you love me 💕
            </h4>

            <div className="d-flex justify-content-around position-relative">

              {/* YES BUTTON */}
              <button
                className="btn btn-success px-4"
                onClick={() => setShowYesCard(true)}
              >
                Yes 💖
              </button>

              {/* NO BUTTON (RUNNING) */}
              <button
                className="btn btn-danger position-absolute"
                style={{ top: position.top, left: position.left }}
                onMouseEnter={moveButton}
                onClick={() => setShowNoBox(true)}
              >
                No 😜
              </button>

            </div>

            {/* NO CONDITION BOX */}
            {showNoBox && (
              <div className="alert alert-warning mt-4 text-start">
                <h6>Think Again 😢</h6>
                <ul>
                  <li>I am a good friend 🤝</li>
                  <li>I will help you always 💪</li>
                  <li>Friendship is forever 💖</li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Yescard />
        )}

      </div>
    </div>
  );
}

export default App;