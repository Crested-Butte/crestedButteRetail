import React, {useState,useEffect} from 'react';

function YesNoRadioButton(props){
  const[selectbtn, setSelectbtn] = useState();

  const handlebuttonChange = (e) => {
    setSelectbtn(e.target.value)
    props.onChange(e);
  }

  console.log(selectbtn)

  return (
    <div>
      <label>Reccomend</label>
      <div className="form-check form-check-inline">
          <input
            type="radio"
            id="like"
            name="yes"
            value="true"
            onChange = {handlebuttonChange}
            checked = {selectbtn === 'true'}
            className="form-check-input"
          />
          <label
          className="form-check-label"> Yes
        </label>
      </div>
      <div className="form-check form-check-inline">
          <input
            type="radio"
            id="like"
            name="no"
            value="false"
            onChange = {handlebuttonChange}
            checked = {selectbtn === 'false'}
            className="form-check-input"
          />
          <label
          className="form-check-label"> No
        </label>
      </div>
    </div>
  )
}

export default YesNoRadioButton;
