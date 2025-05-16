import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { messages } from "../utils";

const Message = () => {
  const [active, setActive] = useState(true);

  const navigate = useNavigate();
  const handleShowMessage = (messageId) => {
    setActive(false);
    navigate(`/messages/${messageId}`);
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="bg-gray-800 font-medium border-2 w-10/12 text-white h-screen flex flex-col gap-2 justify-between items-start">
        {messages.map((message) => (
          <div key={message.id} className="flex h-20  mt-2 gap-2">
            <br />
            {active && (
              <>
                <div className="w-20 flex mt-2">
                  <div>{message.id}. </div>
                  <div>{message.title}</div>
                </div>

                <button
                  type="button"
                  className="border-2 p-1 h-10 w-14 bg-blue-600 rounded-md"
                  onClick={() => handleShowMessage(message.id)}>
                  <div className="font-mono">open</div>
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Message;
