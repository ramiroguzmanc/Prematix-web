import React,{useState} from 'react'
import { MenuVideoNeo } from '../components/MenuVideoNeo';
import { NeonatalVideo } from '../components/NeonatalVideo';

const NeonatalView = () => {
  const [currentPage, setCurrentPage] = useState('view');
  const [joinCode, setJoinCode] = useState('');

  return (
    <div className="App">
      {currentPage === "view" ? (
        <MenuVideoNeo
          joinCode={joinCode}
          setJoinCode={setJoinCode}
          setPage={setCurrentPage}
        />
      ) : (
        <NeonatalVideo
          mode={currentPage}
          callId={joinCode}
          setPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default NeonatalView;
