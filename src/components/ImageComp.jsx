import React from "react"

const ImageComp = ({ data }) => {
  return (
    <div className="team-model">
      <button
        type="button"
        className="btn-trans"
        data-toggle="modal"
        data-target="#createLead"
      >
        <i className="fa-regular fa-image"></i>
      </button>

      {/* MODAL */}
      <div
        className="modal fade"
        id="createLead"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog mod-center modal-dialog-centered"
          role="document"
        >
          <div className="modal-content all-center-2">
            <div className="add-team-body">
              {/* START */}
              <div className="personal-info container">
                <h4 className="info-text model-heading">Attach Image</h4>
                <div className="cross-icon">
                  <i
                    data-dismiss="modal"
                    className="fa-sharp text-white fa-solid fa-circle-xmark"
                  ></i>
                </div>
                <div className="model-image">
                  {" "}
                  <img src="https://images.pexels.com/photos/2221314/pexels-photo-2221314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageComp
