import { useNavigate } from 'react-router-dom'
import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz1 = () =>{


  const title = `${"What's your hair type or texture?"}`
  const nextBtn = 'Next question'
  const options = [
    { label: 'a. Straight', tags: ['type_straight'] },
    { label: 'b. Curly', tags: ['type_curly', 'goals_curl definition'] },
    { label: 'c. Wavy', tags: ['type_wavy'] },
    { label: 'd. Fine', tags: ['type_fine'] }
  ]
  const currentStep = 1
  const previousPage = '/'
  const nextPage = '/question2'

  return(
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}