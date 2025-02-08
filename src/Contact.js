import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setStatus("");
    try {
      const response = await fetch("https://formspree.io/f/xpwzbndv", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          window.location.reload(); // Reload the page after showing the confirmation message
        }, 3000); // Delay reload by 3 seconds
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-800 py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: "Name is required" })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", { required: "Email is required" })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Enter your message"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", { required: "Message is required" })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full bg-[#016162] text-white py-2 px-4 rounded-lg hover:bg-[#014d4d] transition duration-200 flex items-center justify-center ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full"></div>
          ) : (
            "Send Message"
          )}
        </button>
        {status === "success" && (
          <p className="mt-4 text-green-500 font-semibold">
            Thank you! Your message has been sent. The page will reload shortly.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-500 font-semibold">
            Oops! Something went wrong. Please try again later.
          </p>
        )}
      </form>
      <div id="contact"></div>
    </div>
  );
};

export default Contact;
