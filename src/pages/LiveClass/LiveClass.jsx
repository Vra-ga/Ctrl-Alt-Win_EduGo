import { Clock, User, Video, Share2 } from "lucide-react";

export default function LiveClass() {
  return (
    <>
      <div className="flex min-h-screen bg-white">
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Design Grafis",
                time: "07.30 - 09.30",
                teacher: "Pak Ahmad",
                image: "/src/assets/gm06.png",
              },
              {
                title: "Animasi 2D & 3D",
                time: "07.30 - 09.30",
                teacher: "Pak Yanto",
                image: "/src/assets/gm01.png",
              },
              {
                title: "Audio Video",
                time: "07.30 - 09.30",
                teacher: "Bu Yani",
                image: "/src/assets/gm08.png",
              },
              {
                title: "Fotografi",
                time: "07.30 - 09.30",
                teacher: "Pak Riski",
                image: "/src/assets/gm02.png",
              },
              {
                title: "Pengembangan Game",
                time: "07.30 - 09.30",
                teacher: "Bu Serly",
                image: "/src/assets/gm04.png",
              },
              {
                title: "Matematika",
                time: "07.30 - 09.30",
                teacher: "Pak Ghozali",
                image: "/src/assets/gm05.png",
              },
              {
                title: "Design Grafis",
                time: "07.30 - 09.30",
                teacher: "Pak Ahmad",
                image: "/src/assets/gm06.png",
              },
              {
                title: "Animasi 2D & 3D",
                time: "07.30 - 09.30",
                teacher: "Pak Yanto",
                image: "/src/assets/gm07.png",
              },
              {
                title: "Audio Video",
                time: "07.30 - 09.30",
                teacher: "Bu Yani",
                image: "/src/assets/gm03.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border-2"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full p-2 object-cover"
                  />
                </div>
                <div className="px-4 py-2">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-xl">{item.title}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="flex">
                        <Clock className="w-4" />
                        <span className="ml-2">{item.time}</span>
                      </div>
                      <div className="flex ml-5 ">
                        <User className="w-4" />
                        <span className="ml-2">{item.teacher}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-2 mb-3">
                    <button className="flex mr-3 px-5 py-2 rounded-lg bg-[#0c766b] text-white hover:bg-[#0a5d55]">
                      <Video />
                      <p className="ml-2">Join Now</p>
                    </button>
                    <button className="flex mr-3 px-4 py-2 rounded-lg bg-[#E4E4E4] text-[#0c766b] hover:bg-[#0c766b] hover:text-white">
                      <Share2 />
                      <p className="ml-2">Share</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
