import Btn from "../components/Btn";
import Wrapper from "../components/Wrapper";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Wrapper>
      <section className="py-6 mt-28 text-gray-50 dark:text-slate-300">
        <div className="container grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          {/* Contact Info */}
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            <div className="space-y-4">
              {/* Address */}
              <p className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 sm:mr-6 text-red-500" />
                <span>Fake address, 9999 City</span>
              </p>

              {/* Phone */}
              <p className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-2 sm:mr-6 text-red-500" />
                <span>123456789</span>
              </p>

              {/* Email */}
              <p className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2 sm:mr-6 text-red-500" />
                <span>contact@business.com</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            noValidate
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            {/* Full Name */}
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full py-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-600 dark:ring-blue-600 bg-gray-800"
              />
            </label>

            {/* Email Address */}
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md py-2 shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-600 dark:ring-blue-600 bg-gray-800"
              />
            </label>

            {/* Message */}
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-600 dark:ring-blue-600 bg-gray-800"
              ></textarea>
            </label>

            {/* Submit Button */}
            <Btn
              type="button"
              className={
                "self-center px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-red-500 dark:bg-red-600 hover:dark:bg-red-500 text-gray-900 dark:text-gray-50 focus:ring-blue-400 dark:focus:ring-blue-600 hover:ring-blue-400 dark:hover:ring-red-600"
              }
            >
              Submit
            </Btn>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
