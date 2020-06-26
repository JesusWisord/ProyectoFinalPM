import React, {useRef} from 'react';

const CreateElement = () => {
  const createRef = useRef()
  const url = 'http://localhost:8001/food';

  const handleCreate = (e) => {
    e.preventDefault();
    const name = createRef.current[0].value 
    const calories = createRef.current[1].value
    const data = {
      name,
      calorias: calories
    }
    const response = fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
      createRef.current[2].value = `Succesfully created with the id: ${response.data}`
      return response
    });
  }

  return (
    <form ref={createRef} className="textArea__container" onSubmit={handleCreate}>
        <p>Request</p>
        <input type="text" name="food" placeholder="name" />
        <input type="number" name="calories" placeholder="calories" />
        <p>Response</p>
        <textarea 
          readOnly={true} 
        />
      <button>Create</button>
    </form>
  )
}

export default CreateElement