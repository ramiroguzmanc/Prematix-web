import React, { useState, useRef, useContext, useEffect } from 'react';
import { AuthContext } from '../Auth';
import firebase from 'firebase/app';
import '../css/call.css';

import { ReactComponent as HangupIcon } from '../icons/hangup.svg';
import { ReactComponent as MoreIcon } from '../icons/more-vertical.svg';
import { ReactComponent as CopyIcon } from '../icons/copy.svg';

const firestore = firebase.firestore();

//Initialize WebRTC
const servers = {
  iceServers: [
    {
      urls: [
        'stun:stun3.l.google.com:19302',
        'stun:stun4.l.google.com:19302',
        'stun:stun.nextcloud.com:443',
        'stun:stun.webcalldirect.com:3478',
      ],
    },
  ],
  iceCandidatePoolSize: 10,
};

const pc = new RTCPeerConnection(servers);

export const NeonatalVideo = ({ mode, callId, setPage }) => {
  const { currentUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  const [webcamActive, setWebCamActive] = useState(false);
  const [roomId, setRoomId] = useState(callId);

  const localRef = useRef();
  const remoteRef = useRef();

  useEffect(() => {
    if (currentUser) {
      const db = firebase.firestore();
      try {
        db.collection('users')
          .doc(currentUser.email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setIsAdmin(doc.data().adminUser);
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!');
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const setupSources = async () => {
    console.log('setupSources');
    const localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    const remoteStream = new MediaStream();

    localStream.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });

    pc.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStream.addTrack(track);
      });
    };

    localRef.current.srcObject = localStream;
    remoteRef.current.srcObject = remoteStream;

    setWebCamActive(true);

    if (mode === 'create') {
      console.log('in create');
      const callDoc = firestore.collection('neonatalview').doc();
      const offerCandidates = callDoc.collection('offerCandidates');
      const answerCandidates = callDoc.collection('answerCandidates');

      setRoomId(callDoc.id);

      pc.onicecandidate = (event) => {
        event.candidate && offerCandidates.add(event.candidate.toJSON());
      };

      const offerDescription = await pc.createOffer();
      await pc.setLocalDescription(offerDescription);

      const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
      };

      await callDoc.set({ offer });

      callDoc.onSnapshot((snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
          const answerDescription = new RTCSessionDescription(data.answer);
          pc.setRemoteDescription(answerDescription);
        }
      });

      answerCandidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            // let data = change.doc.data();
            // pc.addIceCandidate(new RTCIceCandidate(data))
            const candidate = new RTCIceCandidate(change.doc.data());
            pc.addIceCandidate(candidate);
          }
        });
      });
    } else if (mode === 'join') {
      console.log('in join');
      const callDoc = firestore.collection('neonatalview').doc(callId);
      const answerCandidates = callDoc.collection('answerCandidates');
      const offerCandidates = callDoc.collection('offerCandidates');

      pc.onicecandidate = (event) => {
        event.candidate && answerCandidates.add(event.candidate.toJSON());
      };

      const callData = (await callDoc.get()).data();

      const offerDescription = callData.offer;
      await pc.setRemoteDescription(
        new RTCSessionDescription(offerDescription)
      );

      const answerDescription = await pc.createAnswer();
      await pc.setLocalDescription(answerDescription);

      const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp,
      };

      await callDoc.update({ answer });

      offerCandidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let data = change.doc.data();
            pc.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      });
    }
    pc.onconnectionstatechange = (event) => {
      if (pc.connectionState === 'disconnected') {
        hangUp();
      }
    };
  };

  const hangUp = async () => {
    pc.close();

    if (roomId) {
      let roomRef = firestore.collection('neonatalview').doc(roomId);
      await roomRef
        .collection('answerCandidates')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });
      await roomRef
        .collection('offerCandidates')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.delete();
          });
        });
      await roomRef.delete();
    }

    window.location.reload();
  };
  if (currentUser && isAdmin) {
    console.log(remoteRef);
    return (
      <div className="videos">
        <video ref={localRef} autoPlay playsInline className="local" muted />
        <video ref={remoteRef} autoPlay playsInline className="remotew" />
        <div className="buttonsContainer">
          <button
            onClick={hangUp}
            disabled={!webcamActive}
            className="hangup button"
          >
            <HangupIcon />
          </button>
          <div tabIndex={0} role="button" className="more button">
            <MoreIcon />
            <div className="popover">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(roomId);
                }}
              >
                <CopyIcon /> Copy joining code
              </button>
            </div>
          </div>
        </div>
        {!webcamActive && (
          <div className="modalContainerview">
            <div className="modalview">
              <h3>Turn on your camera and microphone and start the call</h3>
              <div className="containerview">
                <button onClick={() => setPage('home')} className="secondary">
                  Cancel
                </button>
                <button onClick={setupSources}>Start</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="videos">
        <video
          ref={localRef}
          autoPlay={false}
          playsInline
          className="localvideo"
          muted
        />
        <video ref={remoteRef} autoPlay playsInline className="remote" />
        <div className="buttonsContainer">
          <button
            onClick={hangUp}
            disabled={!webcamActive}
            className="hangup button"
          >
            <HangupIcon />
          </button>
        </div>
        {!webcamActive && (
          <div className="modalContainerview">
            <div className="modalview">
              <h3>Turn on your camera and microphone and start the call</h3>
              <div className="containerview">
                <button onClick={() => setPage('home')} className="secondary">
                  Cancel
                </button>
                <button onClick={setupSources}>Start</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};
