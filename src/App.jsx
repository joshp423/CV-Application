import { useState } from 'react'
import GeneralInfo from './components/generalInfo';
import ExpInfo from './components/expInfo';
import './App.css'



function App() {
  const [formState, setFormState] = useState(0);

  function submitForm (){
    if (formState === 0) {
      setFormState(1);
      return;
    }
    setFormState(0);
  }
  return (

    <div>
      <form onSubmit={e => e.preventDefault()}>
    
      <GeneralInfo
        formState={formState}
      />
      
      <ExpInfo
        formState={formState}
      />

      <button type='submit' onClick={submitForm}>
        {formState === 1 ? "Edit" : "Submit"}
      </button>
      
     </form>
    </div>
  )
}

export default App
