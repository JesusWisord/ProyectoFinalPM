import React, {useRef} from 'react';

const DeleteElement = () => {
  const deleteRef = useRef()

  const handleDelete = (e) => {
    e.preventDefault();
    const id = deleteRef.current[0].value 
    console.log(id)
    const url = `http://localhost:8001/food/${id}`;
    const response = fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
      deleteRef.current[1].value = `Food with id = ${id} was succesfully deleted`
      return response
    });
  }

  return (
    <form ref={deleteRef} className="textArea__container" onSubmit={handleDelete}>
      <p>Request</p>
      <input type="text" name="id" placeholder="id" />
      <p>Response</p>
      <textarea readOnly={true} />
      <button>Delete</button>
    </form>
  )
}

export default DeleteElement;
