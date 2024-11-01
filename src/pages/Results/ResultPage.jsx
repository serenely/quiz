import React, { useState, useEffect } from 'react';
import axios from 'axios';
import s from './index.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetAnswers } from '../../redux/quizSlice';

export const ResultPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); 

  const itemsPerPage = 2; 
  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage)); 
  const [currentPage, setCurrentPage] = useState(0); 

  useEffect(() => {
    if (!isLoaded) {
      const storedFavorites = JSON.parse(localStorage.getItem('favoriteItems')) || [];
      setFavoriteItems(storedFavorites);
      setIsLoaded(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    }
  }, [favoriteItems, isLoaded]);

  const favoriteBtnHandler = (product) => {
    setFavoriteItems((prevFavorites) =>
      prevFavorites.includes(product.id)
        ? prevFavorites.filter((id) => id !== product.id)
        : [...prevFavorites, product.id]
    );
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://jeval.com.au/collections/hair-care/products.json?page=1');
        if (response.data && response.data.products) {
          const productsWithId = response.data.products.map((product, index) => ({
            ...product,
            id: product.id || index + 1,
          }));
          setProducts(productsWithId);
          console.log("Loaded products:", productsWithId);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = [
    ...products.filter((product) => favoriteItems.includes(product.id)),
    ...products.filter((product) => !favoriteItems.includes(product.id))
  ];

  const currentProducts = sortedProducts.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const resetQuizHandler = () => {
    dispatch(resetAnswers());
    navigate('/');
  };

  const favorite = `${process.env.PUBLIC_URL}/assets/icon-favorite.svg`;
  const favorite_full = `${process.env.PUBLIC_URL}/assets/icon-favorite-full.svg`;
  const iconNext = `${process.env.PUBLIC_URL}/assets/icon-next.svg`;

  return (
    <div className={s.container}>
      <div className={s.container__quiz}>
        <img className={s.container__background} src="./assets/quiz-background2.png" alt="background" />
        <div className={s.container__content}>
          <p className={s.container__title}>Build your everyday self-care routine.</p>
          <p className={s.container__subtitle}>
            Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural
            nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for.
            And by choosing relaxing fragrances, you can add a moment of calm to the end of your day.
          </p>
          <button className={s.container__resetButton} onClick={resetQuizHandler}>Retake the quiz</button>
        </div>
      </div>
      <div className={s.container__productOffer}>
        <div className={s.container__firstItem}>
          <img className={s.container__prevSlide} onClick={() => {if (currentPage !== 0) goToPrevPage()}} src={iconNext} alt='previous' />
          <div className={s.container__desc}>
            <p className={s.container__desc__title}>Daily routine</p>
            <p className={s.container__desc__subtitle}>
              Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your
              skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances,
              you can add a moment of calm to the end of your day.
            </p>
          </div>
          <div className={s.container__slider}>
            {currentProducts.map((product) => (
              <div key={product.id} className={s.container__item}>
                <img
                  onClick={() => favoriteBtnHandler(product)}
                  className={s.container__item_favorite}
                  src={favoriteItems.includes(product.id) ? favorite_full : favorite}
                  alt="favorite"
                />
                <img
                  src={product.images[0]?.src || ''}
                  alt="image"
                  style={{ borderRadius: '20px', width: '100%', height: 'auto' }}
                />
                <p className={s.container__item_title}>{product.title}</p>
                <p className={s.container__item_price}>$14.00</p>
              </div>
            ))}
          </div>
          <img className={s.container__nextSlide} onClick={goToNextPage} disabled={currentPage === totalPages - 1} src={iconNext} alt='next' />
        </div>

        <div className={s.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={index === currentPage ? s.container__active : s.container__inactive}
              onClick={() => setCurrentPage(index)}
            >
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
