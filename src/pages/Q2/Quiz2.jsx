import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz2 = () =>{

  const title = `${"How often do you wash your hair?"}`
  const nextBtn = 'Next question'
  const options = ['a. Daily','b. Every other day', 'c. Twice a week', 'd. Once a week', 'e. Every two weeks' ]
  const currentStep = 2
  const previousPage = '/question1'
  const nextPage = '/question3'

  return(
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}