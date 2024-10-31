import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz5 = () =>{

  const title = `${"What is your natural hair color(s) today?"}`
  const nextBtn = 'Discover your results'
  const options = ['a. Black','b. Brown', 'c. Blonde', 'd. Red/Orange', 'e. Silver/Grey' ]
  const currentStep = 5
  const previousPage = '/question4'
  const nextPage = '/resultPage'

  return(
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}