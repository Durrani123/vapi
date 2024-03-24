import { useEffect } from "react";
import buttonConfig from "./buttonConfig";

function App(){

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.vapiSDK.run({
        apiKey: "fdffe3e3-ac8b-4866-b21d-240c6e4b6d58",
        assistant: "4e152ec3-5496-4aa7-bba8-af06370c0f1c",
        config: buttonConfig,
      });
    };
 }, []);

}

export default App