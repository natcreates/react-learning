import React from 'react';
import VideoListItem from './video-list-item';

// the props is given as an argument in the () when rendering
// note that class based components need to have props prefixed with this - this.props.videos...
const VideoList = (props) => {
    // get the video items using array.map
    // a key property is needed to allow React to change only altered items, not all of them
    // using the etag value provided by Youtube API
    const videoItems = props.videos.map((video) => {
        // here passing the onvideoselect function down into video item
        // this was the function defined in App in index.js
        return (
            <VideoListItem
                video={video}
                key={video.etag}
                onVideoSelect = {props.onVideoSelect}
            />
        )
    });

    // videoItems here is an array
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>

    )
}

export default VideoList;
