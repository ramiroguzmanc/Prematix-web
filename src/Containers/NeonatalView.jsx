import React,{useState, useEffect, useContext} from 'react'
import { AuthContext } from "../Auth";
import firebase from "firebase";

export const NeonatalView = () => {
  const [currentPage, setCurrentPage] = useState('view');
  const [joinCode, setJoinCode] = useState('');
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

  if(currentUser && isAdmin) {
    return (
      null
    )
  }
  return (
    <div>
      
    </div>
  )
}
