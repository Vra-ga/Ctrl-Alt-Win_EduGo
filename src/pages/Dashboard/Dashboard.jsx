import React from "react";
import { Coins, Book, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import StatCard from "../../components/ui/StatCard";
import CourseCard from "../../components/ui/CourseCard";
import Leaderboard from "../../components/ui/Leaderboard";
import StatsChart from "../../components/ui/StatsChart";

export default function Dashboard() {
  const courses = [
    {
      title: "Prinsip Dan Elemen Desain (Garis, Warna, Bentuk, Tekstur, Dll.)",
      teacher: "Rendi Satria",
      teacherRole: "Guru Desain Grafis",
      image: "/src/assets/DB1 (5).svg",
    },
    {
      title: "Pembelajaran Dasar-Dasar Dalam Animasi Dua Dimensi Dan Tiga Dimensi",
      teacher: "Fani Turaya",
      teacherRole: "Guru Animasi",
      image: "/src/assets/DB1 (6).svg",
    },
    {
      title: "Dasar Perhitungan Dan Pemecahan Masalah Matematis",
      teacher: "Muhammad Nurdin",
      teacherRole: "Guru Matematika",
      image: "/src/assets/DB1 (7).svg",
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-4 lg:gap-8">
      <div className="lg:col-span-3">
        {/* Hero Banner */}
        <img src="/src/assets/DB.svg" alt="" className="mb-4 h-1000px w-full " />

        {/* Stats */}
        <div className="mb-4 grid gap-4 sm:grid-cols-3 lg:mb-8">
          <StatCard icon={Coins} label="Total Point" value="2.000" />
          <StatCard icon={Book} label="Materi Selesai" value="5 Materi" />
          <StatCard icon={Clock} label="Waktu Belajar" value="72 Jam" />
        </div>

        {/* Courses */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Lanjut Belajar,</h2>
            <div className="flex gap-2">
              <button className="rounded-full border p-2">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="rounded-full border p-2">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-4 lg:space-y-8">
        <div className="rounded-lg border bg-white p-4">
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/prsn05.jpg"
              alt="Profile"
              className="object-cover h-16 w-16 rounded-full border-4 border-[#006D77]"
            />
            <div>
              <h2 className="text-xl font-semibold">Selamat Pagi Ahmad👋</h2>
              <p className="text-sm text-gray-600">
                "Lanjutkan Belajarmu Dan Capailah Targetmu"
              </p>
            </div>
          </div>
        </div>

        <StatsChart />

        <Leaderboard />
      </div>
    </div>
  );
}
