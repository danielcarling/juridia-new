import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.min";
import { useState } from "react";

export const handleUpload = async (file: any) => {
    const [fullText, setFullText] = useState<string>("");
    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      const result = await new Promise<string>((resolve) => {
        fileReader.onload = () => {
          resolve(fileReader.result as string);
        };
      });
      const pdf = await pdfjsLib.getDocument({ url: result }).promise;
      const pages = pdf.numPages;
      let extractedText = "";

      for (let i = 1; i <= pages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const text = textContent.items
          .map((item) => {
            if ("str" in item) {
              return item.str;
            }
            return "";
          })
          .join("");
        extractedText += text + "\n";
      }

      setFullText(extractedText);
    } catch (error: any) {
      alert(error.message);
    }
  };