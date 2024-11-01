import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz2 = () => {

  const title = `${"How often do you wash your hair?"}`
  const nextBtn = 'Next question'
  const options = [
    { label: 'a. Daily', tags: ['type_oily'] },
    { label: 'b. Every other day', tags: [] },
    { label: 'c. Twice a week', tags: [] },
    { label: 'd. Once a week', tags: ['type_dry'] },
    { label: 'e. Every two weeks', tags: ['type_dry'] }
  ]
  const currentStep = 2
  const previousPage = '/question1'
  const nextPage = '/question3'

  return (
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage} />
    </>
  )
}