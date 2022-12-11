import React from "react";

const ContactModal = () => {
  return (
    <div className="">
      {/* The button to open modal */}
      {/* <label htmlFor="contact-modal" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="contact-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-gradient-to-tr from-teal-400 via-cyan-600 to-sky-900">
          <label
            htmlFor="contact-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl my-3 text-center ">
            Pleas give your info 
          </h3>
         
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
