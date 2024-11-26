import { Clock, User, Video, Share2 } from "lucide-react";

export default function Kelas() {
  var content = `<a href="https://zoom.us/join" className="ml-2">Join Now</a>`;
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
                image: "/src/assets/mtr (5).svg",
              },
              {
                title: "Animasi 2D & 3D",
                time: "07.30 - 09.30",
                teacher: "Pak Yanto",
                image: "/src/assets/mtr (8).svg",
              },
              {
                title: "Audio Video",
                time: "07.30 - 09.30",
                teacher: "Bu Yani",
                image: "/src/assets/mtr (9).svg",
              },
              {
                title: "Fotografi",
                time: "07.30 - 09.30",
                teacher: "Pak Riski",
                image: "/src/assets/mtr (3).svg",
              },
              {
                title: "Pengembangan Game",
                time: "07.30 - 09.30",
                teacher: "Bu Serly",
                image: "/src/assets/mtr (4).svg",
              },
              {
                title: "Matematika",
                time: "07.30 - 09.30",
                teacher: "Pak Ghozali",
                image: "/src/assets/mtr (6).svg",
              },
              {
                title: "B.Indonesia",
                time: "07.30 - 09.30",
                teacher: "Pak Ahmad",
                image: "/src/assets/mtr (10).svg",
              },
              {
                title: "B.Inggris",
                time: "07.30 - 09.30",
                teacher: "Pak Yanto",
                image: "/src/assets/mtr (7).svg",
              },
              {
                title: "Pengembangan Game",
                time: "07.30 - 09.30",
                teacher: "Bu Yani",
                image: "/src/assets/mtr (4).svg",
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
                      <div
                        className="ml-2"
                        dangerouslySetInnerHTML={{
                          __html: content.replace(
                            /href/g,
                            "target='_blank' href"
                          ),
                        }}
                      ></div>
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
