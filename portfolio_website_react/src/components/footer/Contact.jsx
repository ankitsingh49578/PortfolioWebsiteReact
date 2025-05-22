import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

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
        toast.success("Message sent successfully!");
        setusername("");
        setphone_no("");
        setuseremail("");
        setsubject("");
        setmessage("");
      })
      .catch((error) => {
        console.error("An error sending email: ", error);
        toast.error("An error occured!");
      });
  };

  return (
    <div data-aos="fade-up" id="contact" className="min-h-[800px] px-2 place-items-center">
      <h1 className="dark:text-[#a0a8b3] text-6xl font-semibold mb-12">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-[90vw] md:max-w-[800px] min-h-[700px] border-2 p-7 rounded-lg border-[white] border-opacity-10 dark:bg-gray-950 bg-slate-50"
      >
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <label
              htmlFor="fullName"
              className="dark:text-[#a0a8b3] text-[16px] font-semibold"
            >
              FULL NAME
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="dark:text-[#a0a8b3] w-[100%] h-12 rounded-lg dark:bg-gray-950 p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 dark:placeholder-[#a0a8b3]"
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <label
              htmlFor="phoneNumber"
              className="dark:text-[#a0a8b3] text-[16px] font-semibold"
            >
              PHONE NUMBER
            </label>
            <input
              type="text"
              placeholder="Enter your phone no."
              value={phone_no}
              onChange={(e) => setphone_no(e.target.value)}
              className="dark:text-[#a0a8b3] w-[100%] h-12 rounded-lg dark:bg-gray-950 p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 dark:placeholder-[#a0a8b3]"
              required
            />
          </div>
        </div>

        <div className="flex flex-col mt-6 gap-3">
          <label
            htmlFor="email"
            className="dark:text-[#a0a8b3] text-[16px] font-semibold"
          >
            EMAIL
          </label>
          <input
            type="email"
            placeholder="Enter your email id"
            value={useremail}
            onChange={(e) => setuseremail(e.target.value)}
            className="dark:text-[#a0a8b3] w-[full] h-12 rounded-lg dark:bg-gray-950 p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 dark:placeholder-[#a0a8b3]"
            required
          />
        </div>
        <div className="flex flex-col mt-6 gap-3">
          <label
            htmlFor="subject"
            className="dark:text-[#a0a8b3] text-[16px] font-semibold"
          >
            SUBJECT
          </label>
          <input
            type="text"
            placeholder="Enter your subject"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
            className="dark:text-[#a0a8b3] w-[full] h-12 rounded-lg dark:bg-gray-950 p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 dark:placeholder-[#a0a8b3]"
          />
        </div>
        <div className="flex flex-col mt-6 gap-4">
          <label
            htmlFor="message"
            className="dark:text-[#a0a8b3] text-[16px] font-semibold"
          >
            YOUR MESSAGE
          </label>
          <textarea
            type="email"
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            className="dark:text-[#a0a8b3] w-[full] min-h-[200px] resize-none rounded-lg dark:bg-gray-950 p-4 border-[#03c0c6] border-[2px] border-opacity-15 placeholder-opacity-20 dark:placeholder-[#a0a8b3]"
            required
          />
        </div>

        <button
          type="submit"
          className="select-none mt-6 dark:bg-gray-950 border-[2px] border-[#03c0c6] w-full h-12 rounded-lg border-opacity-15 dark:text-[#a0a8b3] font-semibold dark:hover:bg-gray-900 hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default Contact;
