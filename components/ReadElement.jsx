import React, {useRef} from 'react';

const ReadElement = () => {
  const readRef = useRef()  

  const handleRead = (e) => {
    e.preventDefault();
    const id = readRef.current[0].value 
    console.log(id)
    const url = `http://localhost:8001/food/${id}`;
    const response = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
      readRef.current[1].value = `Food of data with id = ${id} is: 
        id: ${response.data._id}
        name: ${response.data.name}
        calories: ${response.data.calorias}
        `
      return response
    });
  }


  return(
    <form ref={readRef} className="textArea__container" onSubmit={handleRead} >
        <p>Request</p>
        <input type="text" name="id" placeholder="id" />
        <p>Response</p>
        <textarea 
          readOnly={true}
        />
        <button>Read</button>
      </form>
  )
}

export default ReadElement;