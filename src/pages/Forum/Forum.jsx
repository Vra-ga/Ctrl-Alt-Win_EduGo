import { MoreVertical, Paperclip, Phone, Send, X } from "lucide-react";
import { useState } from "react";

export default function Forum() {
  const [showMambers, setShowMambers] = useState(false);
  const groupMembers = [
    {
      name: "Ahmad Muzaki",
      phone: "08123456789",
      avatar: "/src/assets/prsn01.jpg",
    },
  ];
  const Message = [
    {
      id: 1,
      sender: "Teacher",
      content: "Hi",
      avatar: "/src/assets/prsn01.jpg",
    },
  ];

  const toggleMembers = () => {
    setShowMambers(!showMambers);
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Chatt Area */}
          <div className="flex-1 flex overflow-hidden">
            {/* Message  */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <div className="sticky top-0 z-10  border-b">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/src/assets/prsn01.jpg"
                        alt=""
                        className="h-12 w-12 rounded-full bg-gray-300"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">XII DKV</h3>
                        <span className="text-sm text-green-500">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">
                        <button className="flex">
                          <Phone className="h-5 w-5" />
                          <p className="pl-2">Call</p>
                        </button>
                      </div>
                      <button className="text-gray-400" onClick={toggleMembers}>
                        <MoreVertical />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {Message.map((message) => (
                    <div key={message.id} className="flex space-x-3">
                      <img
                        src={message.avatar}
                        alt=""
                        className="h-10 w-10 rounded-full flex-shrink-0"
                      />
                      <div
                        className={`rounded-lg p-3 max-w-[75%] ${
                          message.sender === "Teacher"
                            ? "bg-white border-2"
                            : "bg-teal-50 border-2"
                        }`}
                      >
                        <p>{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input  */}
              <div className="p-4 border-t bg-white">
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full text-black">
                    <Paperclip className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    placeholder="Type message here"
                    className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button className="p-2 rounded-full text-white bg-teal-600">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Members pop up  */}
            {showMambers && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-auto">
                  <div className="p-4 border-b sticky top-0 bg-white z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">
                        Anggota Group
                        <span className="text-gray-500 text-sm">6</span>
                      </h3>
                      <button className="text-gray-400" onClick={toggleMembers}>
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    {groupMembers.map((member) => (
                      <div
                        key={member.name}
                        className="flex items-center space-x-3"
                      >
                        <img
                          src={member.avatar}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-300"
                        />
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-gray-500">
                            {member.phone}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
