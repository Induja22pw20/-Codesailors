import React, { useState } from 'react';
import './designsubmit.css'; // Import your component-specific styles here
import dhar from './Image/dhar.jpg';
import vedha from './Image/vedha.png';
import indu from './Image/indu.jpg';
import vijai from './Image/vijai.jpg';

const DesignSubmit = () => {     
  const [mainImage, setMainImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0); // 0 indicates no rating initially

  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    setMainImage(file);
  };

  const handleAdditionalImagesChange = (event) => {
    const files = event.target.files;
    // Limiting to 3 images
    if (files.length > 3) {
      alert('You can upload only up to 3 additional images.');
      return;
    }
    const newImages = Array.from(files);
    setAdditionalImages([...additionalImages, ...newImages]); // Append new images to existing images
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleRatingClick = (star) => {
    setRating(star);
  };

  const [reviews, setReviews] = useState([
    {
      name: 'Dharsh',
      profileImage:dhar,
      review: 'Great design! Loved it.',
      likes: 0,
      showReply: false,
      reply: ''
    },
    {
      name: 'Vedha',
      profileImage: vedha,
      review: 'Amazing work, keep it up!',
      likes: 0,
      showReply: false,
      reply: ''
    },
    {
      name: 'Indu',
      profileImage:indu ,
      review: 'What sizes are available?',
      likes: 0,
      showReply: false,
      reply: ''
    },
    {
      name: 'Vijai',
      profileImage:vijai ,
      review: 'Can you customize it for me?',
      likes: 0,
      showReply: false,
      reply: ''
    },
  ]);

  const handleLike = (index) => {
    const newReviews = [...reviews];
    newReviews[index].likes += 1;
    setReviews(newReviews);
  };

  const toggleReply = (index) => {
    const newReviews = [...reviews];
    newReviews[index].showReply = !newReviews[index].showReply;
    setReviews(newReviews);
  };

  const handleReplyChange = (event, index) => {
    const newReviews = [...reviews];
    newReviews[index].reply = event.target.value; 
    setReviews(newReviews);
  };

  const handleReplySubmit = (index) => {
    const newReviews = [...reviews];  
    newReviews[index].showReply = false;
    setReviews(newReviews);
    // Handle reply submission logic here, e.g., send data to backend
    console.log('Reply submitted:', newReviews[index].reply);
  };

  return (
    <div className="design-submit-container">
      <div className="left-panel">
        <h2>Upload Design Images</h2>
        <div className="main-image-frame">
          {mainImage && (
            <img src={URL.createObjectURL(mainImage)} alt="Main Design" className="uploaded-image" />
          )}
          {!mainImage && (
            <div className="placeholder-frame">
              <p>Upload main design image</p>
            </div>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleMainImageChange} />
        <h3>Add Additional Images</h3>
        <input type="file" accept="image/*" multiple onChange={handleAdditionalImagesChange} />
        <div className="additional-images-preview"> 
          {additionalImages.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Additional Image ${index}`}
              className="uploaded-image"
              onClick={() => openModal(image)}
            />
          ))}
        </div>
      </div>
      <div className="right-panel">
        <div className="textarea-container">
          <h3>Description</h3>
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Write a description about your submission..."
          />
        </div>
        <div className="rating-container">
          <h3>Rating</h3>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'active' : ''}`}
              onClick={() => handleRatingClick(star)}
            >
              &#9733;
            </span>
          ))}
          <span className="rating-value">{rating.toFixed(1)} Stars</span>
        </div>
        <h3>Reviews</h3>
        <div className="review-section">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <img src={review.profileImage} alt={`${review.name}'s profile`} />
              <div className="review-content">
                <h4>{review.name}</h4>
                <p>{review.review}</p>
                {review.showReply && (
                  <div className="reply-input">
                    <textarea
                      value={review.reply}
                      onChange={(e) => handleReplyChange(e, index)}
                      placeholder="Write your reply..."
                    />
                    <button onClick={() => handleReplySubmit(index)}>Submit</button>
                  </div>
                )}
              </div>
              <div className="review-actions">
                <button onClick={() => handleLike(index)}>
                  👍 <span className="like-count">{review.likes}</span>
                </button>
                <button onClick={() => toggleReply(index)}>Reply</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="additional-image-modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="modal-close" onClick={closeModal}>&times;</span>
            <img src={URL.createObjectURL(modalImage)} alt="Modal" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignSubmit;
