import React, {useRef} from 'react';

const DjangoComponent = () => {
  const createRef = useRef()
  const url = 'http://127.0.0.1:8000/rummie';

  const handleGet = (e) => {
    e.preventDefault();
    const response = fetch(url, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response)
      createRef.current[0].value = `Your hand is:
      ${response.data}`
      return response
    });
  }

  return (
    <form ref={createRef} className="textArea__container" onSubmit={handleGet}>
        <p>Response</p>
        <textarea 
          readOnly={true} 
        />
      <button>Get Rummie Hand</button>
    </form>
  )
}

export default DjangoComponent