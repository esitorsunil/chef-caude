import React from 'react'

const Main = () => {
  const integrients = ["Chicken", "Oragano", "Tomatoes"];

  const integrientsListItems = integrients.map((integrient) => ((
    <li key={integrient}>{integrient}</li>
  )));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIntegrient = formData.get("integrient");
    console.log(newIntegrient);
  }

  return (
    <div className='main'>
        <form onSubmit={handleSubmit} className='add-integrients-form'>
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