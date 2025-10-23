"use client";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import toast from "react-hot-toast";

interface FormTypes {
  name: string;
  email: string;
  message: string;
}


// Variants for the left-side element (form)
const formSlideVariant: Variants = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Variants for the right-side element (earth)
const earthSlideVariant: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormTypes>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // Validate input and return early if invalid
    if(!form.name || !form.email || !form.message){
      toast.error("Please fill out all fields.")
      setLoading(false) // Stop loading state
      return;
    }

    // Continue only validation passes
    emailjs
      .send(
        "service_wo7n1qo",
        "template_rhfh5dc",
        {
          form_name: form.name,
          to_name: "Sahil-it",
          form_email: form.email,
          to_email: "mdhannanit2021@gmail.com",
          message: form.message,
        },
        "SDErM_m7Rx5r3gchC"
      )
      .then(() => {
        toast.success("Thank you, I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error: unknown) => {
        console.log("Error for emailjs", error);
        toast.error("Something went wrong!");
      }).finally(() => setLoading(false));
  };

  return (
    <section
      className="mx-auto max-w-7xl px-6 sm:px-16"
      id="contact"
    >
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
        <motion.div
          variants={formSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.2}}
          className="flex-[0.75] bg-[#0C0A09] border border-pink-500 p-4 rounded-2xl shadow-lg shadow-emerald-600"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold h2_center text-center">
            Contact
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-1">
              <label className="text-white font-semibold text-[16px]">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-slate-950 py-3 px-3 placeholder:text-sm text-sm text-white rounded-lg outline-none border-b-2 border-amber-500 font-semibold"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-white font-semibold text-[16px]">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-slate-950 py-3 px-3 placeholder:text-sm text-sm text-white rounded-lg outline-none border-b-2 border-amber-500 font-semibold"
                />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-white font-semibold text-[16px]">Message</label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write Message"
                className="bg-slate-950 py-3 px-3 placeholder:text-sm text-sm text-white rounded-lg outline-none border-b-2 border-amber-500 font-semibold"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-700 to-sky-600 hover:bg-gradient-to-r hover:from-blue-800 hover:to-pink-800 transition-colors text-[16px] py-3 px-8 outline-none w-fit font-semibold shadow-md shadow-black-100 rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={earthSlideVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.2}}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
