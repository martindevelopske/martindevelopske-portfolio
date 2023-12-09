import ReactWhatsapp from "react-whatsapp";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <div className="fixed bottom-20 right-0 px-4">
      <ReactWhatsapp
        className="light:text-black dark:text-white animate-pulse"
        element="webview"
        number="+254703605544"
        message="hello from app"
      >
        <span>
          <FaWhatsappSquare className="text-green-500 h-48 w-14" />
        </span>
      </ReactWhatsapp>
    </div>
  );
}
