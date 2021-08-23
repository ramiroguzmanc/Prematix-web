import React from 'react'
import "../css/call.css";

const CallMenu = ({joinCode, setJoinCode, setPage}) => {
  return (
    <div className="home">
      <div className="create box">
        <button onClick={() => setPage("create")}>Create Call</button>
      </div>

      <div className="answer box">
        <input
          value={joinCode}
          onChange={(e) => setJoinCode(e.target.value)}
          placeholder="Join with Code"
          style={{ marginBottom: "5px" }}
        />
        <button onClick={() => setPage("join")}>Answer</button>
      </div>
    </div>
  );
}

export default CallMenu
