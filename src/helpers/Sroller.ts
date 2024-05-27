import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollToElement = (el: string) => {
  const navigate = useNavigate();
  // navigate("/#contact");
  scroller.scrollTo(el, { smooth: true, offset: -60 });
};
export default ScrollToElement;
