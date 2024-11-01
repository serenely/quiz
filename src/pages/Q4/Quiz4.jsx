import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz4 = () =>{

  const title = `${"Is there anything troubling you about your hair?"}`
  const nextBtn = 'Next question'
  const options = [
    { label: 'a. Breakage', tags: ['goals_anti-breakage'] },
    { label: 'b. Frizz', tags: ['goals_anti-frizz'] },
    { label: 'c. Scalp dryness', tags: ['type_dry'] },
    { label: 'd. Damage', tags: ['goals_repair'] },
    { label: 'e. Tangling', tags: ['goals_detangle'] }
   ]
  const currentStep = 4
  const previousPage = '/question3'
  const nextPage = '/question5'

  return(
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}