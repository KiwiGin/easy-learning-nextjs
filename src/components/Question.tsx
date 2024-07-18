'use client';

import { useEffect, useState } from 'react'
import MarkDownDisplay from './MarkDownDisplay'

export default function Question ({ question, options, correctAnswer, onAnswer }: { question: string, options: string[], correctAnswer: string, onAnswer: any }) {
  const [selectedOption, setSelectedOption] = useState(null)
  const [isWaiting, setIsWaiting] = useState(false)

  const playSound = (isCorrect:boolean) => {
    const audio = new Audio(isCorrect ? '/sonido_pregunta.mp3' : '/wrong.mp3')
    audio.volume = isCorrect ? 0.3 : 0.05
    audio.play()
  }

  const handleOptionClick = (option:any) => {
    setSelectedOption(option)
    setIsWaiting(true)
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isWaiting) {
      const isCorrect = selectedOption === correctAnswer
      playSound(isCorrect)
      timer = setTimeout(() => {
        setSelectedOption(null)
        setIsWaiting(false) // Termina el estado de espera
        onAnswer(selectedOption === correctAnswer)
      }, 1000)
    }

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer)
  }, [isWaiting, selectedOption, correctAnswer, onAnswer])

  return (
    <div className="w-full">
      <MarkDownDisplay markdown={question} />
      {options.map((option, index) => (
        <button
          disabled={isWaiting}
          key={index}
          className={`option-button ${
            isWaiting
              ? option === correctAnswer
                ? 'bg-lime-600'
                : option === selectedOption
                ? 'bg-red-600'
                : 'bg-gray-200'
              : 'bg-gray-200'
          }`}
          onClick={() => handleOptionClick(option)}
        >
          <MarkDownDisplay markdown={option} />
        </button>
      ))}
    </div>
  )
}

