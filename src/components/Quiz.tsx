'use client';

import { useState } from 'react'
import Question from './Question'

export default function Quiz ({questions}: {questions: any[]}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const puntos = 100 / questions.length

  const handleAnswer = (isCorrect:boolean) => {
    setScore((prevScore) => prevScore + (isCorrect ? puntos : 0))
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Quiz finished
      const finalScore = isCorrect ? score + puntos : score
      alert(`Quiz terminado! Su puntaje es: ${finalScore} %`)
      setCurrentQuestionIndex(0)
      setScore(0)
    }
  }

  return (
    <div className="w-4/6">
      <h1 className="text-3xl">Pregunta {currentQuestionIndex + 1}</h1>
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        correctAnswer={questions[currentQuestionIndex].correctAnswer}
        onAnswer={handleAnswer}
      />
    </div>
  )
}


