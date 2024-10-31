import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import s from './index.module.scss';

export const QuizProgress = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className={s.container}>
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: '#AADDF3', 
          textColor: '#EEF7FB',
          trailColor: '#E6F4FA', 
          strokeLinecap: 'round',
          strokeWidth: 4,
        })}
      />
      <div className={s.progressText}>
        {currentStep}/{totalSteps}
      </div>
    </div>
  )
}