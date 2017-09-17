import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // get the video from the passed in property in videoList
    // if we defined props as the argument, we'd need the below.
    // const video = props.video;
    // ES6 allows the above syntax, which says get the argument property video
    // and create a const for VideoListItem

    const imageUrl = video.snippet.thumbnails.default.url;

    // on click we pass a function that calls the onvideoselect function with this item's video
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} />
                    </div>

                    <div className="media-body">
                        <div className="media-heading">
                        {video.snippet.title}
                        </div>
                    </div>
                </div>
        </li>

    );
};

export default VideoListItem;
