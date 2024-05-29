import { scroller } from "react-scroll";

const ScrollToElement = (el: string) => {
  // navigate("/#contact");
  scroller.scrollTo(el, { smooth: true, offset: -60 });
};
export default ScrollToElement;
