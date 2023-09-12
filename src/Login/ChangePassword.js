import React, { useRef, useState } from "react";

const ChangePassword = () => {
  
  const[passwordErr, setPasswordErr] = useState(false);
  const[confirmPasswordErr, setConfirmPasswordErr] = useState(false);

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  

  const updateUserPassword = (e) =>{
  }

  return (
    <div className="cm-box container">
    <h2 className="cm-heading">Change Password</h2>
    <div className="cm-input-box">
      <i className="fa-regular cm-icon fa-eye-slash"></i>
      <input
        className="cm-input"
        type="password"
        placeholder="New password"
        ref={passwordRef}
      />
    </div>
    <div className="cm-input-box">
      <i className="fa-regular cm-icon fa-eye-slash"></i>
      <input
        className="cm-input"
        type="password"
        placeholder="Confirm New password"
        ref={confirmPasswordRef}
      />
    </div>
    <button onClick={(e)=> updateUserPassword(e)} className="login-button">Set Password</button>
  </div>
  )
};

export default ChangePassword;
