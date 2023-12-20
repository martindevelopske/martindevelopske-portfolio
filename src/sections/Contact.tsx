import { FormEvent, useRef, useState } from "react";
import { sendEmail } from "../helpers/email";
import { ThreeDots } from "react-loader-spinner";
import { FcApproval } from "react-icons/fc";
function Contact() {
  const [IsLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const name = nameRef.current?.value;
      const message = messageRef.current?.value;
      const email = emailRef.current?.value;
      if (!name || !email || !message) {
        !name && nameRef.current?.focus();
        !email && emailRef.current?.focus();
        !message && messageRef.current?.focus();
        throw new Error("Missing required fields"); // Throw an actual error object
      }
      setIsLoading(true);
      await sendEmail({ name, email, message });
      setIsLoading(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        // Clear the input values through refs
        nameRef.current && (nameRef.current.value = "");
        messageRef.current && (messageRef.current.value = "");
        emailRef.current && (emailRef.current.value = "");
      }, 3000);
    } catch (err: unknown) {
      return false;
    }
  };

  return (
    <>
      <div
        id="contact"
        className="w-full h-auto bg-greyish dark:bg-gradient-to-b from-gradient-top to-black dark:text-white text-black flex flex-col items-center justify-center"
      >
        <div className="w-3/4 h-100 mt-12 text-2xl font-bold">Contact</div>
        <div className="h-auto w-3/4 h-auto bg-white dark:bg-1e flex flex-col mb-5 lg:w-1/2 rounded-md">
          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center justify-center gap-5 mb-8"
          >
            <input
              ref={nameRef}
              type="text"
              className="rounded-lg dark:border border border-gray-400 w-3/4 h-36 bg-transparent p-3 mt-12 focus:border-green-400 focus:outline-none"
              placeholder="Your name"
              name="name"
            ></input>
            <input
              ref={emailRef}
              type="text"
              className="rounded-lg dark:border border border-gray-400 w-3/4 h-60 bg-transparent p-3 mt-12 focus:border-green-400 focus:outline-none"
              placeholder="Your Email(name@example.com)"
              name="email"
            ></input>

            <textarea
              ref={messageRef}
              className="rounded-lg dark:border border border-gray-400 w-3/4 h-160 bg-transparent p-3 mt-12 text-base focus:border-green-400 focus:outline-none"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <div className=" flex items-center justify-center w-11/12 md:w-2/5">
              <button
                type="submit"
                className="bg-green-500 md:p-3 p-2 flex items-center justify-center rounded-md"
                disabled={IsLoading || isSent}
              >
                {IsLoading ? (
                  <ThreeDots
                    height="20"
                    width="100"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    visible={true}
                  />
                ) : // <InfinitySpin width="200" color="white"  />
                isSent ? (
                  <FcApproval size="30" color="white" />
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
