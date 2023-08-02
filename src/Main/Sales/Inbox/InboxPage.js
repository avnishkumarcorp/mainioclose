import React, { useState } from "react"
import "./InboxPage.scss"

const InboxPage = () => {
  const [activeTab, setActiveTab] = useState(false)

  return (
    <div className="inbox-page cm-padding-one">
      <div className="inbox-top-btn">
        <button to="/sales" className={`tab-btn `}>
          Inbox
        </button>
        <button to="/sales2" className={`tab-btn `}>
          Done (25)
        </button>
        <button to="/sales3" className={`tab-btn `}>
          Failure (45)
        </button>
      </div>
    </div>
  )
}

export default InboxPage
