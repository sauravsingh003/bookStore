import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/contact", userInfo);
      if (res.data) {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Error: " + err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl text-pink-500 mb-2">Contact</h3>

            {/* Full Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Message */}
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <textarea
                placeholder="Enter your message"
                rows={5}
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
