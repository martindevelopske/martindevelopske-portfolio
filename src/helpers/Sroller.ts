import { scroller } from "react-scroll";

const scrollToElement = (el: string) => {
  scroller.scrollTo(el, { smooth: true, offset: -60 });
};
export default scrollToElement;
