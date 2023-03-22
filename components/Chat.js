import { useState } from 'react';
import { FiChevronsRight } from 'react-icons/fi';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages((prevState) => [...prevState, { message: inputValue, isUser: true }]);
      setInputValue('');
    }
  };

  return (
    <div className="bg-[#313131] min-h-screen pb-20">
     
      <div className="p-4">
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className={`${msg.isUser ? 'text-right' : ''} mb-4`}>
              <div
                className={`px-4 py-2 rounded-lg inline-block ${
                  msg.isUser ? 'bg-gray-700 text-white' : 'bg-blue-600 text-white'
                }`}
              >
                {msg.message}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 w-full bg-[#242424] p-4 flex">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="w-full px-4 py-2 rounded-lg bg-[#313131] text-white"
        />
        <button type="submit" className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 hover:text-blue-700 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chat;
