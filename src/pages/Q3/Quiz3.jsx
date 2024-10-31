import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz3 = () =>{

  const title = `${"What benefit do you look for in your hair products?"}`
  const nextBtn = 'Next question'
  const options = ['a. Anti-breakage','b. Hydration', 'c. Soothing dry scalp', 'd. Repairs appearance of damaged hair', 'e. Volume', 'f. Curl and coil enhancing' ]
  const currentStep = 3
  const previousPage = '/question2'
  const nextPage = '/question4'

  return(
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}