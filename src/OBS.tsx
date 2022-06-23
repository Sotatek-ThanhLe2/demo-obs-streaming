import React from 'react';
import OBSWebSocket from 'obs-websocket-js';
import { ReactMediaRecorder } from 'react-media-recorder';

const OBS = () => {
  const obs = new OBSWebSocket();

  // obs
  //   .connect({ address: 'localhost:4444', password: '$up3rSecretP@ssw0rd' })
  //   .then((rs) => {
  //     console.log(`Success! We're connected & authenticated.`);
  //   });

  return (
    <div>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <video src={mediaBlobUrl} controls autoPlay loop />
          </div>
        )}
      />
    </div>
  );
};

export default OBS;
