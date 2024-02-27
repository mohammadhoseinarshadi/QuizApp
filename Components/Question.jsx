import React, { useState } from 'react';
import { questions } from '../Javas/quiz-data';

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (selectedOption) => {
        if (questions[currentQuestion].correctAnswer === selectedOption) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            console.log('Quiz Finished!');
        }
    };

    const handleSkipButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            console.log('Quiz Finished!');
        }
    };

    const handleResetButtonClick = () => {
        setCurrentQuestion(0);
        setScore(0);
    };

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
            <div>
                {questions[currentQuestion].options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswerButtonClick(option)}>
                        {option}
                    </button>
                ))}
            </div>
            <button onClick={handleSkipButtonClick}>Skip</button>
            {currentQuestion === questions.length - 1 && (
                <button onClick={handleResetButtonClick}>Reset</button>
            )}
        </div>
    );
};

export default QuizApp;
