import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [username, setusername] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [useremail, setuseremail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    // your EmailJs service id, template id, and public key
    const serviceId = "service_dfn8tj1";
    const templateId = "template_3zrvr8c";
    const publicKey = "Qu2qtb4S7WevQerN-";

    // create a new object that contains dynamic template params
    const templateParams = {
      from_name: username,
      phone_no: phone_no,
      to_name: "Ankit Singh",
      subject: subject,
      message: message,
    };

    // send the email using EmailJs. Below is the promise
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log("Email sent successfully", res);
        toast.success("Successfully sent!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        });
        setusername("");
        setphone_no("");
        setuseremail("");
        setsubject("");
        setmessage("");
      })
      .catch((error) => {
        console.error("An error sending email: ", error);
        toast.error("An error occured!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        });
      });
  };

  return (
    <div data-aos="fade-right" id="contact" className="min-h-[850px]">
      <h1 className="text-[#a0a8b3] text-6xl font-semibold mb-12">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-[900px] min-h-[700px] border-2 p-7 rounded-lg border-[white] border-opacity-10 bg-[#252629]"
      >
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <label
              htmlFor="fullName"
              className="text-[#a0a8b3] text-[16px] font-semibold"
            >
              FULL NAME
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="text-[#a0a8b3] w-[100%] h-12 rounded-lg bg-[#191b1e] p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 placeholder-[#a0a8b3]"
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <label
              htmlFor="phoneNumber"
              className="text-[#a0a8b3] text-[16px] font-semibold"
            >
              PHONE NUMBER
            </label>
            <input
              type="text"
              placeholder="Enter your phone no."
              value={phone_no}
              onChange={(e) => setphone_no(e.target.value)}
              className="text-[#a0a8b3] w-[100%] h-12 rounded-lg bg-[#191b1e] p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 placeholder-[#a0a8b3]"
              required
            />
          </div>
        </div>

        <div className="flex flex-col mt-6 gap-3">
          <label
            htmlFor="email"
            className="text-[#a0a8b3] text-[16px] font-semibold"
          >
            EMAIL
          </label>
          <input
            type="email"
            placeholder="Enter your email id"
            value={useremail}
            onChange={(e) => setuseremail(e.target.value)}
            className="text-[#a0a8b3] w-[full] h-12 rounded-lg bg-[#191b1e] p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 placeholder-[#a0a8b3]"
            required
          />
        </div>
        <div className="flex flex-col mt-6 gap-3">
          <label
            htmlFor="subject"
            className="text-[#a0a8b3] text-[16px] font-semibold"
          >
            SUBJECT
          </label>
          <input
            type="text"
            placeholder="Enter your subject"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
            className="text-[#a0a8b3] w-[full] h-12 rounded-lg bg-[#191b1e] p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 placeholder-[#a0a8b3]"
          />
        </div>
        <div className="flex flex-col mt-6 gap-4">
          <label
            htmlFor="message"
            className="text-[#a0a8b3] text-[16px] font-semibold"
          >
            YOUR MESSAGE
          </label>
          <textarea
            type="email"
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            className="text-[#a0a8b3] w-[full] min-h-[200px] resize-none rounded-lg bg-[#191b1e] p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 placeholder-[#a0a8b3]"
            required
          />
        </div>

        <button
          type="submit"
          className="select-none mt-6 bg-[#191b1e] border-[2px] border-[#03c0c6] w-full h-12 rounded-lg border-opacity-15 text-[#a0a8b3] font-semibold hover:-translate-y-1 transition-all duration-300"
        >
          SEND MESSAGE
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Contact;
