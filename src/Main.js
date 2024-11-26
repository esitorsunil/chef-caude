import React from 'react'

const Main = () => {
  return (
    <div className='main'>
        <form className='add-integrients-form'>
            <input 
            type='text'
            placeholder='e.g. oregano'
            aria-label='Add integrient'
            />
            <button>Add integrient</button>
        </form>
    </div>
  )
}

export default Main