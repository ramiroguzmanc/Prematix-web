import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Auth";
import firebase from "firebase";

export const MenuVideoNeo = ({ joinCode, setJoinCode, setPage }) => {
  const { currentUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const db = firebase.firestore();
      try {
        db.collection("users")
          .doc(currentUser.email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setIsAdmin(doc.data().adminUser);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  if (currentUser && isAdmin) {
    return (
      <div className="home">
        <div className="create box">
          <button onClick={() => setPage("create")}>Create Call</button>
        </div>
      </div>
    );
  }else{
    return (
      <div className='home'>
      <div className='answer box'>
        <input
          value={joinCode}
          onChange={e => setJoinCode(e.target.value)}
          placeholder='Join with Code'
        />
        <button onClick={() => setPage('join')}>Answer</button>
      </div>
    </div>
    )
  }
};
