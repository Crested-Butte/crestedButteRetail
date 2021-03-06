import React, {useState,useEffect} from 'react';
const axios = require('axios').default;

function Characteristics(props){
  const[selectbtn, setSelectbtn] = useState();

  let {name, id, onChange} = props;

  const handlebuttonChange = (e) => {
    setSelectbtn(e.target.value)
    onChange(e, `${id}`);
  }

  return (
    <div className="char-item">
      <label className="name-label">{name}</label>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="characteristics"
          value="1"
          onChange = {handlebuttonChange}
          checked = {selectbtn === '1'}
        />
        <label
          className="form-check-label"> 1
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="characteristics[size]"
          value="2"
          onChange = {handlebuttonChange}
          checked = {selectbtn === '2'}
        />
        <label
          className="form-check-label"> 2
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="characteristics"
          value="3"
          onChange = {handlebuttonChange}
          checked = {selectbtn === '3'}
        />
        <label
          className="form-check-label"> 3
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="characteristics"
          value="4"
          onChange = {handlebuttonChange}
          checked = {selectbtn === '4'}
        />
        <label
          className="form-check-label"> 4
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id="characteristics"
          value="5"
          onChange = {handlebuttonChange}
          checked = {selectbtn === '5'}
        />
        <label
          className="form-check-label"> 5
        </label>
      </div>
    </div>
      )
}

export default Characteristics;
