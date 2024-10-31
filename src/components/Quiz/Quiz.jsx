import React from 'react';
import s from './index.module.scss';
import { QuizProgress } from '../QuizProgress/QuizProgress';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentAnswer,removeLastAnswer,setSelectedAnswer } from '../../redux/quizSlice';

export const Quiz = ({ title, nextBtn, options, currentStep, previousPage, nextPage}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selectedAnswer = useSelector(state => state.quiz.selectedAnswer)

  const handleOptionClick = (option) => {
    dispatch(setSelectedAnswer(option))
  }

  const previousPageHandler = () => {
    dispatch(removeLastAnswer())
    navigate(`${previousPage}`)

  }
  const nextPageHandler = () => {
    if(selectedAnswer){
      dispatch(addCurrentAnswer())
      navigate(`${nextPage}`)
    }else {
      alert("Please select an option before proceeding."); 
    }
  }

  const arrowRight = `${process.env.PUBLIC_URL}/assets/icon-arrow-right.svg`

  return (
    <div className={s.quiz}> 
      <div className={s.quizContainer}>
      <p className={s.title}>{title}</p>
        <div className={s.optionsContainer}> 
          {options.map((option, index) => (
            <button 
            key={index} 
            className={`${s.optionButton} ${selectedAnswer === option ? s.selected : ''}`}
            onClick={() => handleOptionClick(option)}
           >
              {option}
            </button>
          ))}
        </div>
        <div className={s.navigationButtons}>
          <button className={s.backButton} onClick={previousPageHandler}>Back</button>
          <button className={s.nextButton} onClick={nextPageHandler}>{nextBtn} <img src={arrowRight} alt="Arrow Right"/></button>
        </div>
      </div>
      
      <QuizProgress currentStep={currentStep} totalSteps={5} />

    </div>
  );
};
