import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const messages = [
    {
      id: 1,
      title: "Greeting",
      text: "Hello, how are you? It's wonderful to see you today. I hope your day is filled with joy and positivity.",
    },
    {
      id: 2,
      title: "Morning",
      text: "Good Morning. Rise and shine! Embrace the new day with enthusiasm and a heart full of gratitude.",
    },
    {
      id: 3,
      title: "Sample",
      text: "This is a sample message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tristique justo, ac aliquam quam dapibus vel.",
    },
    {
      id: 4,
      title: "Great",
      text: "Have a great day! May your day be filled with accomplishments, laughter, and moments that make your heart happy.",
    },
    {
      id: 5,
      title: "Coding",
      text: "Coding is fun and rewarding. Dive into the world of programming, explore new technologies, and bring your ideas to life.",
    },
    {
      id: 6,
      title: "Testing",
      text: "Just testing messages. This is a placeholder text to check the formatting and appearance of the messages in the application.",
    },
    {
      id: 7,
      title: "Learning",
      text: "Learning JavaScript opens up a world of possibilities. Master the language and unlock the potential to build amazing web applications.",
    },
    {
      id: 8,
      title: "React",
      text: "Learning React is an exciting journey. Build interactive user interfaces and create dynamic web experiences with the power of React.",
    },
  ];

  const [activeMessage, setActiveMessage] = useState(null);

  const navigate = useNavigate();

  const handleShowMessage = (messageId) => {
    setActiveMessage(messageId);
    navigate(`/messages/${messageId}`);
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="bg-gray-800 font-medium border-2 w-10/12 text-white h-screen flex flex-col gap-2 justify-between items-start ">
        {messages.map((message) => (
          <div key={message.id} className="flex mt-2 gap-2">
            <br />
            <div className="w-20 flex mt-2">
              <div>{message.id}. </div>
              <div>{message.title}</div>
            </div>

            <button
              className="border-2 p-1 h-10 w-14 bg-blue-600 rounded-md"
              onClick={() => handleShowMessage(message.id)}>
              <div className="font-mono">open</div>
            </button>
            {activeMessage === message.id && (
              <div className=" w-1/3 max-h-fit border-2 p-2 rounded-md">
                {message.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
