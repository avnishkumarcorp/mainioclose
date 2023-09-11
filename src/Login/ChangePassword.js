import React from "react";

const ChangePassword = () => {
  return (
    <div className="cm-box container">
    <h2 className="cm-heading">Change Password</h2>
    <div className="cm-input-box">
      <i class="cm-icon fa-solid fa-user"></i>
      <input
        className="cm-input"
        type="password"
        placeholder="New password"
      />
    </div>
    <div className="cm-input-box">
      <i class="cm-icon fa-solid fa-user"></i>
      <input
        className="cm-input"
        type="password"
        placeholder="Confirm New password"
      />
    </div>
    <button className="login-button">Set Password</button>
  </div>
  )
};

export default ChangePassword;
