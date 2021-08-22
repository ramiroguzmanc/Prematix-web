import React,{useState} from 'react'
import CallMenu from '../components/CallMenu'
import CallVideo from '../components/CallVideo'
import "../css/call.css";

const VideoCall = () => {
  const [currentPage, setCurrentPage] = useState('view');
  const [joinCode, setJoinCode] = useState('');
  return (
    <div className="App">
      {currentPage === "view" ? (
        <CallMenu
          joinCode={joinCode}
          setJoinCode={setJoinCode}
          setPage={setCurrentPage}
        />
      ) : (
        <CallVideo
          mode={currentPage}
          callId={joinCode}
          setPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default VideoCall;
