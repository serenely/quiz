import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz5 = () =>{

  const title = `${"What is your natural hair color(s) today?"}`
  const nextBtn = 'Discover your results'
  const options = [
    { label: 'a. Black', tags: [] },
  { label: 'b. Brown', tags: [] },
  { label: 'c. Blonde', tags: ['goals_colour protection'] },
  { label: 'd. Red/Orange', tags: ['goals_colour protection'] },
  { label: 'e. Silver/Grey', tags: ['goals_anti-ageing'] }
  ]
  const currentStep = 5
  const previousPage = '/question4'
  const nextPage = '/resultPage'

  return(
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}