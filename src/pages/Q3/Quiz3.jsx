import { Quiz } from '../../components/Quiz/Quiz'

export const Quiz3 = () =>{

  const title = `${"What benefit do you look for in your hair products?"}`
  const nextBtn = 'Next question'
  const options = [
    { label: 'a. Anti-breakage', tags: ['goals_anti-breakage'] },
  { label: 'b. Hydration', tags: ['goals_hydrate'] },
  { label: 'c. Soothing dry scalp', tags: ['goals_soothe', 'type_dry'] },
  { label: 'd. Repairs damaged hair', tags: ['goals_repair'] },
  { label: 'e. Volume', tags: ['goals_volumise'] },
  { label: 'f. Curl and coil enhancing', tags: ['goals_curl definition', 'type_curly'] }
   ]
  const currentStep = 3
  const previousPage = '/question2'
  const nextPage = '/question4'

  return(
    <>
      <Quiz title={title} nextBtn={nextBtn} options={options} currentStep={currentStep} previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}