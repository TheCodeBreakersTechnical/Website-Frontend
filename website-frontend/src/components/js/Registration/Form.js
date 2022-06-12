import React, { useState } from 'react';
import '../../css/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import photo from "../../images/img-2.svg";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {/* <span className='close-btn'>×</span> */}
        <div className='form-content-left'>
          <img className='form-img' src={photo} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;