import React, { useState, useRef, useEffect } from "react";
import { BsChatLeftText } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const dummyPastChats = [
  
  ];
  const chatRef = useRef();
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className=" sticky top-0 flex justify-between bg-[#242424] text-gray-400 py-4 px-6 items-center">
      <div className="flex items-center">
        <button type="button" onClick={toggleChat}>
          <BsChatLeftText className="h-6 w-6 fill-current hover:text-blue-700 cursor-pointer text-blue-500" />
        </button>
      </div>

      <div className="flex items-center tracking-wider justify-center uppercase font-semibold text-lg text-gray-300">
        GPT3 Clone
      </div>

      <div
        ref={chatRef}
        className={`transform duration-500 ease-in-out fixed top-0 bottom-0 left-0 w-64 md:w-96 z-50 overflow-y-auto bg-[#242424] ${
          isChatOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-4 px-6">
          <RxCross2
            className="h-6 w-6 absolute right-4 top-4 cursor-pointer text-blue-500 hover:text-blue-700 "
            onClick={() => setIsChatOpen(false)}
          />
          <h2 className="text-lg font-bold mb-4 uppercase">
            Chats
          </h2>
          <ul>
            {dummyPastChats.map((chat) => (
              <li key={chat.id} className="mb-4">
                <div className="font-bold">{chat.user}</div>
                <div>{chat.message}</div>
                <div className="text-gray-500">
                  {new Date(chat.date).toLocaleString()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
