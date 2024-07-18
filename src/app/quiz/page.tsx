'use client';
import { useState } from 'react';
import '../globals.css';
import Quiz from '../../components/Quiz';

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export default function QuizPage() {
  const mathQuestions: Question[] = [
    {
      question: `# ¿Cuál es el resultado de la siguiente operación? $$5 + 3 =$$`,
      options: ['A. 6', 'B. 7', 'C. 8', 'D. 9'],
      correctAnswer: 'C. 8',
    },
    {
      question: `# ¿Cuál de los siguientes números es par?`,
      options: ['A. 3', 'B. 7', 'C. 10', 'D. 11'],
      correctAnswer: 'C. 10',
    },
    {
      question: `# ¿Cuánto es $$4 \\times 6$$?`,
      options: ['A. 20', 'B. 24', 'C. 26', 'D. 28'],
      correctAnswer: 'B. 24',
    },
    {
      question: `# ¿Cuál es el valor de $$\\frac{15}{3}$$?`,
      options: ['A. 3', 'B. 4', 'C. 5', 'D. 6'],
      correctAnswer: 'C. 5',
    },
    {
      question: `# Observa la siguiente tabla y responde: ¿Cuál es el número que falta en la segunda columna?
  | Número | Siguiente número |
  |--------|------------------|
  | 4      | 5                |
  | 6      |                  |
  | 8      | 9                |
  | 10     | 11               |`,
      options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'],
      correctAnswer: 'C. 7',
    },
  ];

  const comunicationQuestions: Question[] = [
    {
      question: `# ¿Cuál es el sinónimo de la palabra "rápido"?`,
      options: ['A. Lento', 'B. Veloz', 'C. Pesado', 'D. Ligero'],
      correctAnswer: 'B. Veloz',
    },
    {
      question: `# ¿Cuál de las siguientes opciones es un sustantivo?`,
      options: ['A. Saltar', 'B. Rápido', 'C. Mesa', 'D. Hermoso'],
      correctAnswer: 'C. Mesa',
    },
    {
      question: `# ¿Qué tipo de palabra es "alegría"?`,
      options: ['A. Verbo', 'B. Adjetivo', 'C. Sustantivo', 'D. Adverbio'],
      correctAnswer: 'C. Sustantivo',
    },
    {
      question: `# ¿Cuál es la forma correcta del verbo en pasado?`,
      options: ['A. Comía', 'B. Comeré', 'C. Comí', 'D. Comer'],
      correctAnswer: 'C. Comí',
    },
    {
      question: `# ¿Qué signo de puntuación falta en la siguiente oración: "Hola cómo estás"`,
      options: [
        'A. Coma',
        'B. Punto',
        'C. Dos puntos',
        'D. Signo de interrogación',
      ],
      correctAnswer: 'A. Coma',
    },
  ];

  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <div className="w-full flex flex-col justify-center items-center translate-y-20">
      <h1 className="text-5xl font-bold pb-4">Quiz</h1>
      {/* Grupo de botones para seleccionar el quiz */}
      <div className="flex justify-center space-x-4 pb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setQuestions(mathQuestions)}
        >
          Matemáticas
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setQuestions(comunicationQuestions)}
        >
          Comunicación
        </button>
      </div>
      {questions.length > 0 && <Quiz questions={questions} />}
    </div>
  );
}
