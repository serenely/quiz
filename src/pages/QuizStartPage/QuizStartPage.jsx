import { useNavigate } from "react-router-dom"
import s from "./index.module.scss"

export const QuizStartPage = ()=>{
  const navigate = useNavigate()


  const navigatorHandler = () => {
    navigate('/question1')
  }

  return(
    <div className={s.container}>
      <div className={s.container__quiz}>
        <div className={s.container__grey}>

        </div>
        <div className={s.container__content}>
          <p className={s.container__title}>Build a self care routine suitable for you</p>
          <p className={s.container__subtitle}>Take out test to get a personalised self care routine based on your needs.</p>
          <button className={s.container__startButton} onClick={navigatorHandler}>Start the quiz </button>
        </div>
      </div>
    </div>
  )
}