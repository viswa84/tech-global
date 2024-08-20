import { useForm, ValidationError } from "@formspree/react";
import { toast, Toaster } from "sonner";

import { useEffect, useState } from "react";
import validator from "validator";
import { Container, ContainerSucces } from "./styles";

export function Form() {
  const [state, handleSubmit] = useForm("myyvnykd");

  const [validEmail, setValidEmail] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  function verifyPhoneNumber(number) {
    if (validator.isMobilePhone(number, "any")) { // You can specify the locale if needed
      setValidPhoneNumber(true);
    } else {
      setValidPhoneNumber(false);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email successfully sent!"); // Sonner's toast notification
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            try {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } catch (error) {
              console.error("Error scrolling to top:", error);
            }
          }}
        >
          Back to the top
        </button>
        <Toaster position="bottom-left" /> {/* Adding the Toaster component */}
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <input
          placeholder="Mobile Number"
          id="phone"
          type="tel"
          name="phone"
          onChange={(e) => {
            verifyPhoneNumber(e.target.value);
          }}
          required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

        <textarea
          required
          placeholder="Leave your message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting || !validEmail || !validPhoneNumber}
        >
          Submit
        </button>
      </form>

      <Toaster position="bottom-left" /> {/* Adding the Toaster component */}
    </Container>
  );
}
