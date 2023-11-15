import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function PodcastRow({ episodeTitle, author, date, duration, imageAlt, trackurl }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="col-md-4">
      <div className="card shadow-sm">
        <img src={imageAlt} className="bd-placeholder-img card-img-top" width="100%" height="375" alt={imageAlt} />
        <div className="card-body">
          <p className="card-text desc-2 fw-bold">{episodeTitle}</p>
          <div className="text mb-3" style={{ fontStyle: 'italic' }}>
            <span className="text-black-opacity-05">
              <small>
                By {author} <br />
                {date}
              </small>
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="player">
              <button type="button" onClick={handleTogglePlay} className="btn btn-sm navlink login">
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <ReactPlayer
                url={trackurl}
                playing={isPlaying}
                controls
                width="500%" // Adjust the width as needed
                height="30px" // Adjust the height as needed
              />
            </div>
            <small className="text-body-secondary">{duration}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodcastRow;
