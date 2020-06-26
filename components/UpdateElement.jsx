import React, {useRef} from 'react';

const UpdateElement = () => {
  const updateRef = useRef()

  const handleUpdate = (e) => {
    e.preventDefault();
    const id = updateRef.current[0].value 
    const name = updateRef.current[1].value 
    const calories = updateRef.current[2].value
    const data = {
      name,
      calorias: calories
    }
    const url = `http://localhost:8001/food/${id}`;
    const response = fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
      updateRef.current[3].value = `Food updated with id = ${id}: 
        name: ${name}
        calories: ${calories}
        `
      return response
    });
  }
  return(
    <form ref={updateRef} className="textArea__container" onSubmit={handleUpdate}>
      <p>Request</p>
      <input type="text" name="id" placeholder="id" />
      <br/>
      <input type="text" name="food" placeholder="name" />
      <input type="number" name="calories" placeholder="calories" />
      <p>Response</p>
      <textarea readOnly={true} />
      <button>Update</button>
    </form>
  )
}

export default UpdateElement;
