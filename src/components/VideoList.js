import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
				video={video}
			/>
		);
	});

	return (
		<div
			className="ui relaxed divided list"
			style={{
				backgroundColor: '#E8EBF7',
				borderRadius: '3px',
				border: '2px solid #ACBED8',
			}}
		>
			{renderedList}
		</div>
	);
};

export default VideoList;
