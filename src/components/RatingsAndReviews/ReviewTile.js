import React, { useState, useEffect } from 'react';
import getUserandDate from '../sharedComponents/userNameAndDate.js';
import AddResponseModal from './AddResponseModal.js';
import Stars from '../sharedComponents/starRatings.js';
import ShowPics from './ShowPics.js';
const axios = require('axios');

function ReviewTile(props) {
  const [helpfulCount, setHelpfulCount] = useState(helpfulness);
  const [freeze, setFreeze] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [replyText, setReplyText] = useState(null);
  const closeModal = () => setShowModal(null);
  const openModal = () => setShowModal(true);

  const { review } = props;
  const { helpfulness, rating } = review;

  useEffect(() => setHelpfulCount(helpfulness), [helpfulness]);

  const recommendReview = () => (
    <div className="col checkmark">
      <i className="fas fa-check"></i>
      &nbsp;  I recommend this item
    </div>
  );

  const handleChangeText = (e) => {
    e.persist();
    let targetValue = e.target.value;
    setReplyText(e.target.value);
  };

  const renderYesNo = (alreadySubmitted) => {
    if (alreadySubmitted) {
      return (
        <p className="answerer">
          <span>
            <b>  Review helpful </b>
            <span>
              <span className="answer-yes">Yes</span>
              <span>
                <span className="answer-yes">No</span>
                {`${helpfulCount}`}
              </span>
            </span>
          </span>
        </p>
      );
    }
    return (
      <p className="answerer">
        <span>
          <b>  Review helpful </b>
          <span onClick={() => { increaseHelpful(freeze) }}>
            <span className="answer-yes">Yes</span>
          </span>
          <span onClick={() => { setFreeze(true); }}>
            <span className="answer-yes">No</span>
          </span>
          <span>
            {`${helpfulCount}`}
          </span>
        </span>
      </p>
    );
  }

  const increaseHelpful = function () {
    let currentCount = helpfulCount || props.review.helpfulness
    var idStr = review.review_id.toString()
    axios.put('/reviews/' + idStr + '/helpful')
      .then(() => setHelpfulCount(currentCount + 1))
  }

  return (
    <div className="list-item">
      <div className="row">
        <div className="col">
          <Stars rating={rating} />
        </div>
        <div className="col user-and-date flex-down-container" >
          <div>
            {getUserandDate(review)}
          </div>
        </div>
      </div>

      <div className="write-review-btn response">
        <p className="answerer">
          <span>
            <b>  Response From Seller </b>
          </span>
          {!replyText ? (
            <span onClick = {openModal}>
              <span className="answer-yes">add response</span>
            </span>
          ) : <span>{replyText}</span>}
        </p>
      </div>
      {showModal && (
        <AddResponseModal
          showModal={showModal}
          closeModal={closeModal}
          onChange={handleChangeText}
        />
      )}
      <div className="row review-summary">
        <div className="col">
          <strong>{review.summary}</strong>
        </div>
        <div className="col">
          {renderYesNo(helpfulCount > props.review.helpfulness + 1)}
        </div>
      </div>
      <div className="row review-body">
        {review.body}
      </div>
      {review.photos && review.photos.length > 0 && <ShowPics
        photos = {review.photos} />}
      <div className="row review-reccomend">
        {review.recommend ? recommendReview() : null}
      </div>
    </div>
  )
}

export default ReviewTile;
