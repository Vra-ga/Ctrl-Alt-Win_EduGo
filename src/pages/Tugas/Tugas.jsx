import { useState } from "react";
import QuizModal from "../Tugas/Soal";

const sampleQuiz = {
  questions: [
    {
      text: "Apa yang dimaksud dengan prinsip white space dalam design grafis?",
      options: [
        "penggunaan warna putih dalam design",
        "ruang kosong yang digunakan untuk memberi fokus pada elemen design",
        "Teknik mengatur ripografi agar lebih menarik",
        "Kombinasi warna yang harmonis dalam desing",
      ],
      corectAnswer: 0,
    },
    {
      text: "Jenis huruf apa yang biasa digunakan untuk memberikan kesan formal dan profesional",
      options: ["Script", "Serif", "Snas-serif", "Display"],
      corectAnswer: 1,
    },
  ],
};

export default function Tugas() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectQuiz, setSelectQuiz] = useState(null);

  const handleStartQuiz = (quiz) => {
    if (quiz && quiz.questions) {
      setSelectQuiz(quiz);
      setIsQuizOpen(true);
    } else {
      console.error("Quiz data is not available for this item");
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-white">
        {/* main content  */}
        <main className=""></main>
      </div>
    </>
  );
}
