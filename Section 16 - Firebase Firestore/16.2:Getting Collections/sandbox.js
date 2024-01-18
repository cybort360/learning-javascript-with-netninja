const list = document.querySelector('ul');

const addRecipe = (recipe) => {
  const time = recipe.created_at.toDate();
  let html = `
  <li>
  <div>${recipe.title}</div>
  <div>${time}</div>
  </li>
  `;

  list.innerHTML += html;
}

const db = firebase.firestore();

db.collection('recipes').get().then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    addRecipe(doc.data());
  })
}).catch(err => {
  console.log(err);
})