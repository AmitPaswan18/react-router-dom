const Messages = () => {
  const Messages = [
    { id: 1, title: "greeting", text: "Hello, how are you?" },
    { id: 2, title: "morning", text: "Good Morning." },
    { id: 3, title: "sample", text: "This is a sample message." },
    { id: 4, title: "great", text: "Have a great day!" },
    { id: 5, title: "coding", text: "Coding is fun" },
    { id: 6, title: "testing", text: "Just testing messages." },
    { id: 7, title: "learning", text: "Learning JavaScript." },
    { id: 8, title: "react", text: "Learning React." },
    { id: 9, title: "almost", text: "Almost done!" },
    { id: 10, title: "night", text: "Good Night." },
  ];

  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center w-screen font-semibold">
      {Messages.map((message, index) => (
        <>
          <div key={index} className="flex mt-2">
            <div> {message.id}.</div>
            <br />

            <div>{message.text}</div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Messages;
