import { useState } from "react";
import Image from "next/image";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '3b6a3827-b52e-4337-b6f5-5ae73744b0b6',
        ...formData,
        botcheck: false
      }),
    });

    if (response.ok) {
      setFormData({ name: '', email: '', message: '' });
      setStatus('Thank you for your feedback!');
    } else {
      setStatus('Failed to submit the form. Please try again.');
    }
  };

  return (
    <div className="-mt-32 relative z-3">
      <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="hidden lg:block">
            <div className="float-right pt-20 relative">
              <Image
                src={"/assets/newsletter/bgImage.png"}
                alt="bgimg"
                width={588}
                height={334}
              />
              <div className="absolute top-10 right-0">
                <Image
                  src={"/assets/newsletter/leaf.svg"}
                  alt="leafimg"
                  width={81}
                  height={81}
                />
              </div>
              <div className="absolute bottom-8 left-2">
                <Image
                  src={"/assets/newsletter/circel.svg"}
                  alt="circleimg"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">
              Would love to hear your feedback!
            </h3>
            <h4 className="text-base font-normal mb-7 text-offwhite">
              Craven omni memoria patriae zombieland clairvius narcisse
              religionis sunt diri undead historiarum.
            </h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name Input Field */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4"
                placeholder="Enter name"
                required
              />

              {/* Email Input Field */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4"
                placeholder="Enter email address"
                required
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="py-4 text-sm w-full text-black bg-white rounded-lg pl-4 resize-none"
                placeholder="Enter message"
                rows="4"
                required
              ></textarea>

              {/* Honeypot Spam Protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-900 text-white font-medium py-2 px-4 rounded-full"
              >
                <Image
                  src={"/assets/newsletter/plane.svg"}
                  alt="plane-img"
                  width={20}
                  height={20}
                />
              </button>

              {/* Submission Status */}
              {status && <p className="text-white mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
