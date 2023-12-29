const Messages = () => {
  const Messages = [
    { id: 1, text: "Hello, how are you?" },
    { id: 2, text: "Good Morning." },
    { id: 3, text: "This is a sample message." },
    { id: 4, text: "Have a great day!" },
    { id: 5, text: "Coding is fun" },
    { id: 6, text: "Just testing messages." },
    { id: 7, text: "Learning JavaScript." },
    { id: 8, text: "Learning React." },
    { id: 9, text: "Almost done!" },
    { id: 10, text: "Good Night." },
  ];

  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center w-screen font-semibold">
      {Messages.map((message, index) => (
        <>
          <div key={index} className="flex">
            <div> {message.id}.</div>
            <br />
            <div> {message.text}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Messages;
