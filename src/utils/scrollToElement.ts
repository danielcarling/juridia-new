import { windowDimension } from "./windowDimensions";

export function scrollToElement(elementName: string) {
  const element = document.getElementById(elementName);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
