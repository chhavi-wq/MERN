const Contact = () => {
  return (
    <section className="min-h-screen bg-[#F8F5F2] px-8 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

        <div className="lg:w-1/2">

          <h1 className="text-5xl font-bold text-[#2C2C2C] leading-tight mb-6">
            Let's Build <br /> Something Great.
          </h1>

          <p className="text-gray-600 leading-8 max-w-md mb-10">
            Have an idea, project, or opportunity? I'd love to hear from you.
            Feel free to send a message and I'll get back to you as soon as
            possible.
          </p>

          <div className="space-y-6 text-[#2C2C2C]">

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Email
              </p>
              <p className="text-lg">schhavi625@gmail.com</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Phone
              </p>
              <p className="text-lg">+91 9876434396</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Location
              </p>
              <p className="text-lg">India</p>
            </div>

          </div>
        </div>

        <div className="lg:w-1/2 bg-white rounded-3xl shadow-xl p-10">

          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#B58863]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#B58863]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#B58863]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none resize-none focus:border-[#B58863]"
              ></textarea>
            </div>

            <button
              className="bg-[black] text-white px-8 py-4 rounded-xl hover:translate-y-2 transition duration-300 hover:bg-[#52525B]"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;