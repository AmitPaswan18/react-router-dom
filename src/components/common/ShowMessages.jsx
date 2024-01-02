import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowMessages = () => {
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

  const { messageId } = useParams();

  const [activeMessage, setActiveMessage] = useState(null);

  useEffect(() => {
    setActiveMessage(messageId);
  }, [messageId]);

  return (
    <div className="w-screen  h-screen flex justify-center">
      <div className="bg-gray-800 font-medium border-2 w-10/12 text-white h-screen flex flex-col gap-2 justify-between items-start">
        {messages.map((message) => (
          <div key={message.id} className="flex relative left-1/4 mt-2 gap-2">
            <br />
            {activeMessage == message.id && (
              <div className="w-1/3 mx-auto max-h-fit border-2 p-2 rounded-md">
                <div>Message Id : {message.id}</div>
                <div>Message Title : {message.title}</div>
                <div className="text-blue-500">Message: {message.text}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ShowMessages;
