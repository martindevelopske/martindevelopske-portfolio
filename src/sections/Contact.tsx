function Contact() {
  return (
    <>
      <div
        id="contact"
        className="w-full h-auto bg-gradient-to-b from-gradient-top to-black dark:text-white text-black flex flex-col items-center justify-center"
      >
        <div className="w-3/4 h-100 mt-12 text-2xl font-bold">Contact</div>
        <div className="h-auto w-3/4 h-auto bg-1e flex flex-col mb-5 lg:w-1/2">
          <form className="flex flex-col items-center justify-center gap-5 mb-8">
            <input
              type="text"
              className="rounded-lg border border-slate-200 w-3/4 h-36 bg-transparent p-3 mt-12 focus:border-green-400 focus:outline-none"
              placeholder="Your name"
              name="name"
            ></input>
            <input
              type="text"
              className="rounded-lg border w-3/4 h-60 bg-transparent p-3 mt-12 focus:border-green-400 focus:outline-none"
              placeholder="Your Email"
              name="email"
            ></input>

            <textarea
              className="rounded-lg border w-3/4 h-160 bg-transparent p-3 mt-12 text-base focus:border-green-400 focus:outline-none"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <div className=" flex items-center justify-center w-11/12 md:w-2/5">
              <button
                type="submit"
                className="bg-green-500 md:p-5 p-3 flex items-center justify-center"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
