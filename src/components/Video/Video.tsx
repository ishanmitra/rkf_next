interface VideoProps {
    videoUrl: string;
  }

const Video = ({ videoUrl }: VideoProps) => {
    return (
        <section className="page-section bg-dark bg-scroll light-content py-0">
            {/* Video Section */}
            <div className="container"></div>
            <div className="row g-0">
                <div className="col-12 text-center">
                    <video id="home-video" className="video-js" autoPlay muted preload="auto"
                        data-setup='{"loop": true}' style={{ objectFit: 'cover' }}>
                        <source
                            src={ videoUrl }
                            type="video/mp4" />
                        <p className="vjs-no-js">
                            To view this video please enable JavaScript, and consider upgrading to a
                            web browser that
                            <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5
                                video</a>
                        </p>
                    </video>
                </div>
            </div>
            {/* End Video Section */}
        </section>

    )
}

export default Video