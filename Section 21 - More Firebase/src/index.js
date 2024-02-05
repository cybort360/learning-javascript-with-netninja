import { initializeApp } from 'firebase/app';
import{
  getFirestore, collection, //getDocs,
  addDoc, deleteDoc, doc,
  onSnapshot, query, where,
  orderBy, serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'

import { 
  getAuth,
  createUserWithEmailAndPassword, signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAp01hFnXfkYGqZwR5q-uxQMwz1B9L2qFI",
  authDomain: "fir-9-tutorial-d8610.firebaseapp.com",
  projectId: "fir-9-tutorial-d8610",
  storageBucket: "fir-9-tutorial-d8610.appspot.com",
  messagingSenderId: "850767105938",
  appId: "1:850767105938:web:263d30f04609d316227b4b"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, 'books');

// queries
const q = query(colRef, orderBy('createdAt'));

// get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     let books = [];
//     snapshot.docs.forEach((doc) => {
//       books.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(books)
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });



// real time listener

  const unsubCol = onSnapshot(q, (snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })

// addding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    addBookForm.reset()
  })
});

// deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const docRef = doc(db, 'books', deleteBookForm.remove.value);
  deleteDoc(docRef)
  .then(() => {
    deleteBookForm.reset();
  });
})

// get a single doument
const docRef = doc(db, 'books', 'Q7LbSCNTcD8awf52YkOf')
// getDoc(docRef)
//   .then((doc) => {
//     console.log(doc.data(), doc.id);
//   })

  const unsubDoc = onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id);
  });

  //update adocument
  const updateForm = document.querySelector('.update');
  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'books', updateForm.updateForm.value);
    updateDoc(docRef, {
      title: 'updated title'
    })
    .then(() => {
      updateForm.reset();
    })
  })

  // signing users up
  const signupForm = document.querySelector('.signup')
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('user created', cred.user)
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message)
    })
  })
  
  //logging and logging out
  const logoutButton = document.querySelector('.logout');
  logoutButton.addEventListener('click', () => {
    signOut(auth)
      .then(() => {
        // console.log('the user signed out')
      })
      .catch((err) => {
        console.log(err.message);
      })
  });

  const loginForm = document.querySelector('.login');
  loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        // console.log('user signed in', cred.user);
      })
      .catch((err) => {
        console.log(err.message);
      })
  })

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log('user status changed: ', user)
})

//unsubscribing from changes
const unsubButton = document.querySelector('.unsub');
unsubButton.addEventListener('click', () => {
  console.log('unsubsribing');
  unsubCol();
  unsubDoc();
  unsubAuth();
})