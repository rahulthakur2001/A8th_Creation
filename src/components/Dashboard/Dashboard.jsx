import { useEffect, useState } from "react";

const Typewriter = ({ texts, period = 2000 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(50);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
        setDelta(100);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(50);
      }
    };

    const ticker = setTimeout(handleTyping, delta);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, texts, period, delta]);

  return <span className="border-r-2 border-white pr-1 duration-500 animate-none">{text}</span>;
};

const TypewriterComponent = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-red-600 text-white text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        <Typewriter
          texts={["Hi, I'm Si.", "I am Creative.", "I Love Design.", "I Love to Develop."]}
          period={2000}
        />
      </h1>
    </div>
  );
};

export default TypewriterComponent;
