import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, Toaster } from "sonner";
import validator from "validator";

export function Form() {
  const [state, handleSubmit] = useForm("myyvnykd");

  const [validEmail, setValidEmail] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email) {
    setValidEmail(validator.isEmail(email));
  }

  function verifyPhoneNumber(number) {
    setValidPhoneNumber(validator.isMobilePhone(number, "any"));
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email successfully sent!");
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Thanks for getting in touch!
        </h3>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80"
        >
          Back to the top
        </button>
        <Toaster position="bottom-left" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Get in touch using the form
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-900 dark:text-white placeholder-primary"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          placeholder="Mobile Number"
          id="phone"
          type="tel"
          name="phone"
          onChange={(e) => verifyPhoneNumber(e.target.value)}
          required
          className="p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-900 dark:text-white placeholder-primary"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

        <textarea
          required
          placeholder="Leave your message"
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-900 dark:text-white placeholder-primary"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting || !validEmail || !validPhoneNumber}
          className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/80 disabled:opacity-50"
        >
          Submit
        </button>
      </form>
      <Toaster position="bottom-left" />
    </div>
  );
}
