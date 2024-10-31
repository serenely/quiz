import React, { useState, useEffect } from 'react';
import axios from 'axios';
import s from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetAnswers } from '../../redux/quizSlice';

export const ResultPage = ({ userInput }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const answers = useSelector( state => state.quiz.answers)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://jeval.com.au/collections/hair-care/products.json?page=1');
        console.log(response, 'response');
      } catch (error) {
        console.error('Erorr:', error);
      }
    };

    fetchProducts();
  }, []);

  const resetQuizHandler = () => {
    dispatch(resetAnswers())
    navigate('/')
  }

  return(
    <div className={s.container}>
      <div className={s.container__quiz}>
        <img className={s.container__background} src="./assets/quiz-background2.png" alt="background"  />
        <div className={s.container__content}>
          <p className={s.container__title}>Build you everyday self care routine.</p>
          <p className={s.container__subtitle}>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural
           nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. 
           And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
          <button className={s.container__resetButton} onClick={resetQuizHandler}>Retake the quiz </button>
        </div>
      </div>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  )
}
