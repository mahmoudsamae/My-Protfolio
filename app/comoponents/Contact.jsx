"use client"
import React, { useState } from "react";
import { PROFILE_DATA_EN } from "../utils/data";
import { MdOutlineWeb } from "react-icons/md";
import { IoPhonePortraitOutline, IoMail } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import emailjs from "@emailjs/browser";


const Contact = ({language}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_twd553e";
    const templateId = "template_c8rz5sp";
    const publicKey = "GPUf2VJt9FQhczUfs";

    const templateParams = {
      name: name,
      email: email,
      to_name: "Mahmud Al Hussen",
      message: message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          language === "EN"
            ? "✅ Email sent successfully"
            : "✅ E-Mail erfolgreich gesendet"
        );
        setName("");
        setEmail("");
        setMessage("");
      },
      (err) => {
        console.error("FAILED...", err);
        alert(language === "EN" ? "❌ Error sending email" : "❌ Fehler beim Senden der E-Mail");
      }
    );
  }

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20" id={"contact"}>
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-14">
        {language === "EN" ? "Contact" : "Kontakt"}
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div className="">
          <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA_EN.email} />
          <ContactInfoCard
            icon={<IoPhonePortraitOutline />}
            text={PROFILE_DATA_EN.phone}
          />
          <ContactInfoCard
            icon={<MdOutlineWeb />}
            text={PROFILE_DATA_EN.website}
          />
        </div>
        <div className="">
          <h5 className="md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5">
            {" "}
            {language === "EN" ? "Contact Form" : "Kontaktformular"}
          </h5>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="fullname"
              id=""
              placeholder={
                language === "EN" ? "Full Name" : "Vollständiger Name"
              }
              autoComplete="off"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder={language === "EN" ? "Email" : "E-Mail"}
              autoComplete="off"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              name="message"
              value={message}
              id=""
              onChange={(e) => setMessage(e.target.value)}
              placeholder={language === "EN" ? "Message" : "Nachricht"}
              rows={3}
              className="input-box"
              autoComplete="off"
            ></textarea>
            <button type="submit" className="primary-btn">
              {language === "EN" ? "SUBMIT" : "SENDEN"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded bborder border-cyan-700 ">
        {icon}
      </div>
      <p className="text-cyan-100 text-xs md:text-sm">{text}</p>
    </div>
  );
};
export default Contact;
