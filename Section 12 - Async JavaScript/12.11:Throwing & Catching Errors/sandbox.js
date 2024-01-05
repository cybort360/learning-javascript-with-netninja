// async & await

const getTodos = async() => {
  const response = await fetch('todos/luigi.json');

  if (response !== 200){
    throw new Error('could not fetch');
  }
  const data = await response.json();
  return data;
  };
  
  getTodos()
  .then((data) =>{
    console.log('resolved:', data);
  })
  .catch((err) => {
    console.log('rejected:', err.message);
  });
  