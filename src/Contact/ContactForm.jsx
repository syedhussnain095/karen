import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

const ContactForm = () => {
  const [state] = React.useState({
    title: "Tell Us Your Project",
    titletwo: "Contact Us",
    para: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.",
    address:"Address : No 40 Baria Sreet 133-2 NewYork City",
    email:"E-mail: info@yourdomain.com",
    call:"+88013245657",
  });
  return (
    <>
      <div className="container-fluid">
        <div className="col-10 mx-auto py-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2">
              <div className="form_text">
                <h2>{state.title}</h2>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6 py-2">
                      <input type="text" placeholder="Name*" />
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6  py-2">
                      <input type="text" placeholder="Phone*" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6 py-2">
                      <input type="email" placeholder="Email*" />
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6  py-2">
                      <input type="text" placeholder="Subject*" />
                    </div>
                    <div className="col-12 py-2">
                      <textarea placeholder="Message*"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2">
              <div className="contact_information">
                <h2>{state.titletwo}</h2>
                <p>{state.para}</p>
                <ul>
                  <li>
                    <span>
                      <FaAddressBook />
                    </span>
                    {state.address}
                  </li>
                  <li>
                    <span>
                      <AiOutlineMail />
                    </span>
                    {state.email}
                  </li>
                  <li>
                    <span>
                      <IoIosCall />
                    </span>
                    {state.call}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
