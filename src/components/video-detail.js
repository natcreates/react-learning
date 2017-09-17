import React from 'react';

const VideoDetail = ({video}) => {
    // check here necessary as sometimes child objects render before parent
    // has necessary data
    // this is known as an Ajax spinner.Best to locate on high-level component
    // to prevent user from seeing multiple times
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    // non ES6 way of adding a var to string
    // const url = 'https://www.youtube.com/embed/' + videoId;
    // ES6 way
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;
