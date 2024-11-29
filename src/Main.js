import React from 'react'

const Main = () => {
  const [integrients, setintegrients] = React.useState([]);

  const integrientsListItems = integrients.map(integrient => ((
    <li key={integrient}>{integrient}</li>
  )));

  function addIntegrient(formData) {
    const newIntegrient = formData.get("integrient");
    
    setintegrients(prevIntegrients => [...prevIntegrients, newIntegrient]);
    console.log(integrients);
  }

  return (
    <div className='main'>
        <form action={addIntegrient} className='add-integrients-form'>
            <input 
            type='text'
            placeholder='e.g. oregano'
            aria-label='Add integrient'
            name='integrient'
            />
            <button>Add integrient</button>
        </form>
        <ul>{integrientsListItems}</ul>
    </div>
  )
}

export default Main