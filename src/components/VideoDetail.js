import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div
				style={{ backgroundColor: '#E8EBF7', border: '2px solid #ACBED8' }}
				className="ui segment"
			>
				<h4 className="ui header" style={{ fontSize: 17 }}>
					{video.snippet.title}
				</h4>
				<p style={{ fontSize: 17 }}>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
