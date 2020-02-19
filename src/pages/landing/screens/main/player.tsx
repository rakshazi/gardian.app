import React from 'react';
import mainScreenVideo from '../../../../assets/video/sample_video.mp4';
import { modalPlayer, player, usePlayerStyles } from './styles';
import ReactPlayer from 'react-player';
import play from '../../../../assets/img/playBtn.svg';
import useModal from '../../../../hooks/useOpen';
import { Modal } from '@material-ui/core';

const Player = () => {
  const { playBtn } = usePlayerStyles();
  const { open, handleOpen, handleClose } = useModal();
  return (
    <div>
      <ReactPlayer
        url={mainScreenVideo}
        playing={!open}
        volume={0}
        muted
        loop
        style={player}
        width='100%'
        height='calc(95vh + 70px)'
      />
      <img src={play} alt='Play' className={playBtn} onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=C0DPdy98e4c'
          playing
          controls
          style={modalPlayer}
          width='100%'
          height='90%'
        />
      </Modal>
    </div>
  );
};

export default Player;
