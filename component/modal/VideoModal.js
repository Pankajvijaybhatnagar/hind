'use client';
import { useEduorContext } from '@/context/EduorContext';
import React from 'react';
import { Modal } from 'react-bootstrap';

const VideoModal = () => {
    const {
        showVideo,
        handleVideoClose,
    } = useEduorContext();
    
    // Updated video URL to reflect an educational theme (You can change this URL to any other relevant educational video)
    const embedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with your educational video URL

    return (
        <Modal 
            show={showVideo} 
            onHide={handleVideoClose} 
            size="lg" 
            centered 
            className="modal-video" 
            id="hindustan-education-video-modal"
        >
            <Modal.Header className="video-modal-header" closeButton>
                <h5 className="modal-title">Hindustan Council of Secondary Education - Introduction Video</h5>
            </Modal.Header>
            <Modal.Body className="modal-video-body">
                <div className="modal-video-inner" id="modal-video-inner-education">
                    <div className="modal-video-movie-wrap">
                        <iframe 
                            className="video-modal-iframe"
                            src={embedUrl}
                            title="Hindustan Council of Secondary Education - Introduction Video"
                            frameBorder="0"
                            allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default VideoModal;
