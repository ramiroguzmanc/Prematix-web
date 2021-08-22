import React,{useState} from 'react'
import CallMenu from '../components/CallMenu'
import CallVideo from '../components/CallVideo'

export const NeonatalView = () => {
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
