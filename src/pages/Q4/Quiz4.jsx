import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz4 = () =>{

  const title = `${"Is there anything troubling you about your hair?"}`
  const nextBtn = 'Next question'
  const options = ['a. Breakage','b. Frizz', 'c. Scalp dryness', 'd. Damage', 'e. Tangling' ]
  const currentStep = 4
  const previousPage = '/question3'
  const nextPage = '/question5'

  return(
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}