import { useState } from "react";

const Contact = () => {

const [formData, setFormData] = useState({
  fullName : "",
  message : "",
  subject : "",
  email : "",
})

const [loading, setLoading] = useState(false);
const [message , setMessage] = useState("");


const handleChanges = (e)=>{
  const {name,value} = e.target;
  setFormData({...formData,[name]:value})
}
const handleSubmit = async(e)=>{
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try{
      const response = await fetch("http://localhost:8000/api/create",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          ...formData
        })
      })

      const data = await response.json();
      if(!response.ok){
        setMessage(data.message || "something went wrong!");
        setLoading(false);
        return;
      }
      setMessage("client created successfully!")
      setFormData({
        fullName:"",
        message:"",
        subject:"",
        email:"",
      })
    }
    catch{
      setMessage("An error occurred while submitting the form.");
      setLoading(false);
    }
    finally{
      setLoading(false);
    }
    }

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
              <p className="text-lg">schhavi@gmail.com</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500">
                Phone
              </p>
              <p className="text-lg">+91 98********</p>
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

          <form onSubmit={handleSubmit} className="space-y-6">

               {message && (
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4">
            {message}
          </div>
        )}
        
            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Full Name
              </label>

              <input
                type="text" name="fullName" onChange={handleChanges} required value={formData.fullName}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#B58863]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Email
              </label>

              <input
                type="email" name="email" required onChange={handleChanges} value={formData.email}
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#B58863]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Subject
              </label>

              <input
                type="text" name="subject" onChange={handleChanges} required value={formData.subject}
                placeholder="Project Inquiry"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#B58863]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-600">
                Message
              </label>

              <textarea
                rows="6" onChange={handleChanges} required value={formData.message} name="message"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#B58863]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[black] text-white px-8 py-4 rounded-xl hover:translate-y-2 transition duration-300 hover:bg-[#52525B]"
            >
               {loading ? "Sending..." : "Send Message"}

            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;