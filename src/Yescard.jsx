import React from "react";
import gifImage from "./assets/giphy.webp";

function Yescard() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-warning">
      
      <div 
        className="card text-center shadow-lg p-4 border-0"
        style={{ width: "350px", borderRadius: "15px" }}
      >

        <img
          src={gifImage}
          alt="Friendship gif"
          className="img-fluid rounded mb-3"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <h2 className="text-success fw-bold">
          Yayyyy! 🎉
        </h2>

        <p className="fs-5 text-muted">
          Now we are together forever 💕✨
        </p>

        <div className="mt-3">
          <button className="btn btn-primary px-4 rounded-pill">
            Celebrate 🎊
          </button>
        </div>

      </div>
    </div>
  );
}

export default Yescard;