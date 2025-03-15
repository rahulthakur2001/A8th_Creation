import React from 'react'

const ContactUs = () => {
  return (
    <div className="bg-white flex items-center justify-center md:p-4 p-0">
    <div className="w-full max-w-7xl bg-white rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-3">
      {/* Left Section */}
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in touch with us</h2>
        <p className="text-gray-600 mb-6">
          Thanks for stopping by! Whether you have a question, comment, or just
          want to say hi, don't be a stranger. We're here to help, and we love
          connecting with our community.
        </p>
        <p className="text-gray-600 mb-10">
          Drop us a line or use the contact form below to get in touch.
        </p>

        <div className="space-y-6 grid md:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Chat to us</h3>
            <p className="text-blue-600 font-medium">A-signInstitute.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Call us</h3>
            <p className="text-gray-600">toll-free call</p>
            <p className="text-blue-600 font-medium">1 (844) 740-2144</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit us</h3>
            <p className="text-gray-600">Come say hello at our office</p>
            <p className="text-gray-900 font-medium">
              haiderpur
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Hours</h3>
            <p className="text-gray-600">Monday–Friday 9am–5pm</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-blue-100 rounded-2xl p-4 md:p-8">
        <form className="space-y-6 md:w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full p-3 rounded-lg bg-blue-50 placeholder-gray-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last name*"
              className="w-full p-3 rounded-lg bg-blue-50 placeholder-gray-600 focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email*"
            className="w-full p-3 rounded-lg bg-blue-50 placeholder-gray-600 focus:outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your message*"
            className="w-full p-3 rounded-lg bg-blue-50 placeholder-gray-600 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-10 bg-blue-600 text-white py-2 rounded-full text-lg font-medium hover:bg-sky-300 cursor-pointer transition"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  </div>
);
};
export default ContactUs
