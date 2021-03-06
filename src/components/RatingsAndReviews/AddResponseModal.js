
import React, {useState, useEffect} from 'react';
const axios = require('axios').default;

function AddResponseModal(props) {
  let {showModal, closeModal} = props;

  const renderModal = () => {
    return (
      <div className = "modal-expand submit-feedback">
        <div className = "modal-content">
          <div className ="modal-header">
            <h5>{`Submit Feedback`}</h5>
            <div className="close-btn">
          <button onClick={closeModal}>X</button>
          </div>
          </div>
          <div className="modal-body">
          <textarea className="form-control" id="summary" type="text" onChange={props.onChange} maxLength = "60" ></textarea>
          </div>
          <div className="show-more-btn submit-btn">
          <button onClick={closeModal}>submit</button>
          </div>
        </div>
      </div>
    )
  };

  return (
    <>{showModal && renderModal()}</>
  )
}

export default AddResponseModal;
