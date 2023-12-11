import emailjs from "@emailjs/browser";

type emailParams = {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
};

export const sendEmail = async ({ name, email, message }: emailParams) => {
  if (!name || !email || !message) return false;
  return new Promise<boolean>((resolve, reject) => {
    if (name && email && message) {
      const templateParams = {
        to_name: "CEO",
        user_name: name,
        message: message,
        user_email: email,
      };
      emailjs.send(
        "service_n47248d",
        "template_egp6xzu",
        templateParams,
        "zRkkjL78ryGhy2pvo"
      );

      resolve(true);
    } else {
      reject(false);
    }
  });
};
