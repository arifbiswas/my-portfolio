import React from "react";

const ContactModal = () => {
  return (
    <div className="bg-gradient-to-tr">
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
          <form>
          <input type="text" placeholder="Name" className="input input-bordered input-info w-full " />
          <input type="email" placeholder="Email" className="input input-bordered input-info w-full " />
          <textarea type="text" placeholder="Describe" className="textarea textarea-bordered textarea-info w-full " />
          <input type="submit" value={"Send"} className="btn btn-dark w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
