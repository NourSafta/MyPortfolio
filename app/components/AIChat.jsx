import { useState, useRef, useEffect } from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";

const AIChat = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi! I'm your AI assistant. Here are some things you can ask:",
      sender: "ai",
    },
    {
      text: "✨ Try asking about:\n\n• My skills and technologies\n• Professional experience\n• Education background\n• Current projects\n• Contact information\n• Availability for work",
      sender: "ai",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  const aiResponses = {
    skills:
      "My key skills include:\n- Frontend: React, Next.js, Tailwind CSS\n- Backend: Node.js, Express\n- Design: UI/UX, Figma\n- Tools: Git, Docker, AWS",
    experience:
      "Professional experience:\n\nJan 2024- July 2024: Cybersecurity Research Intern at SMU\nJuly 2023-Sept 2023: FrontEnd Developer at TourisFair\nAug 2021: Operations Management Intern at Tunisie Construction",
    projects:
      "Featured projects:\n\n1. DarkShare Platform (React.js, Node.js, MongoDB, LLMs)\n2. Self-Learn ODC Platform (React.js, Node.js, MySQL)\n3. Program Management System (React.js, Node.js, React Native)\n\nVisit the Work section for details!",
    contact:
      "Contact options:\n\n📧 Email: saftanour@gmail.com\n📞 Phone: +216 53 299 043\n📍 Location: Tunis, Tunisia",
    education:
      "Education:\n\nEngineering Diploma Major Software Engineering - South Mediterranean University (2024)\nUX Design Certification - Coursera",
    technologies:
      "Technologies I work with:\n\nFrontend: React, Vue, Svelte\nBackend: Node, Python, Go\nDatabases: MongoDB, PostgreSQL\nDevOps: AWS, Docker, Kubernetes",
    availability:
      "I am currently available for:\n\n• Full-time positions\n• Contract work\n• Freelance projects\n\nLet me know how I can help!",
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Add first message immediately
    setMessages([
      {
        text: "👋 Hi! I'm your AI assistant. Here are some things you can ask:",
        sender: "ai",
      },
    ]);

    // Add second message after delay
    const timer = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "✨ Try asking about:\n\n• My skills and technologies\n• Professional experience\n• Education background\n• Current projects\n• Contact information\n• Availability for work",
          sender: "ai",
        },
      ]);
      setShouldScroll(true); // Enable scrolling after both messages are present
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, shouldScroll]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: inputValue, sender: "user" }]);
    setInputValue("");

    // Simulate AI typing
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let response =
        "I'm happy to help! Try asking about my skills, experience, or projects.";

      Object.keys(aiResponses).forEach((key) => {
        if (lowerInput.includes(key)) {
          response = aiResponses[key];
        }
      });

      setMessages((prev) => [...prev, { text: response, sender: "ai" }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white shadow-xl rounded-lg flex flex-col z-50">
      <div className="bg-green-500 text-white p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={assets.ai} alt="AI" className="w-6 h-7" />
          <h3 className="font-bold">Nour AI Assistant</h3>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 cursor-pointer"
        >
          ×
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 ${
              msg.sender === "ai" ? "text-left" : "text-right"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                msg.sender === "ai"
                  ? "bg-gray-100 text-gray-800"
                  : "bg-green-500 text-white"
              }`}
            >
              {msg.text.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-3 border-t">
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default AIChat;
