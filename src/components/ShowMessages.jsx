import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { messages } from "../utils";

const ShowMessages = () => {
  const { messageId } = useParams();

  const [activeMessage, setActiveMessage] = useState(null);

  useEffect(() => {
    setActiveMessage(messageId);
  }, [messageId]);

  return (
    <div className="w-screen h-screen flex justify-center z-100">
      <div className="bg-gray-800 font-medium border-2 w-10/12 text-white h-screen flex flex-col gap-2 justify-between items-start">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex  absolute top-[30%] left-[10%]  mt-2 gap-2">
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
