import { useState, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import { useIsMobile } from "../hooks/useMediaQuery";
import { useLang } from "../i18n/LanguageContext";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const inputClass =
  "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915eff]";

const Contact = () => {
  const formRef = useRef();
  const isMobile = useIsMobile();
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  // En vez de alert(): mensaje en pantalla { type: "success" | "error", text }
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        "service_5p7dbyj",
        "template_ebge73n",
        {
          from_name: form.name,
          to_name: "Patricio",
          from_email: form.email,
          to_email: "patricio.resio@gmail.com",
          message: form.message,
        },
        "jOUKbByhllu5OVumL"
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            text: t.contact.success,
          });
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setStatus({
            type: "error",
            text: t.contact.error,
          });
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-6 sm:p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t.contact.sub}</p>
        <h3 className={styles.sectionHeadText}>{t.contact.title}</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 sm:mt-12 flex flex-col gap-6 sm:gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t.contact.name}</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder={t.contact.namePh}
              className={inputClass}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t.contact.email}</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder={t.contact.emailPh}
              className={inputClass}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t.contact.message}</span>
            <textarea
              rows="7"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder={t.contact.messagePh}
              className={inputClass}
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#915eff] hover:bg-[#7f4ae6] disabled:opacity-60 transition duration-300 py-3 px-8 min-h-[48px] outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? t.contact.sending : t.contact.send}
          </button>
          {status && (
            <p
              role="status"
              className={`text-[14px] font-medium ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.text}
            </p>
          )}
        </form>
      </motion.div>

      {/* La Tierra 3D solo en desktop: en mobile pesa y no aporta */}
      {!isMobile && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <Suspense fallback={null}>
            <EarthCanvas />
          </Suspense>
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
