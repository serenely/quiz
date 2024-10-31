import { useNavigate } from 'react-router-dom'
import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz1 = () =>{


  const title = `${"What's your hair type or texture?"}`
  const nextBtn = 'Next question'
  const options = ['a. Straigth','b. Curly', 'c. Wavy', 'd. Fine']
  const currentStep = 1
  const previousPage = '/'
  const nextPage = '/question2'

  return(
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}