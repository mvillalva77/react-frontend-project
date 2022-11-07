import './App.css';
import NavBar from './components/navBar/NavBar';
import Router from './Router/Router';
import LoginPage from './components/login/Login';
import ProfileProvider from './context/profileContext/ProfileContext';
import { collection, getDocs } from "firebase/firestore"; 
import db from "./firebase/firebaseConfig";
import { useEffect, useState } from "react";

// const profiles = [
//   {
//       id: 1,
//       name : 'User 1',
//       bg : 'bg-1'
//   },
//   {
//       id: 2,
//       name : 'User 2',
//       bg : 'bg-2'
//   },
//   {
//       id: 3,
//       name : 'User 3',
//       bg : 'bg-3'
//   },
//   {
//       id: 4,
//       name : 'User 4',
//       bg : 'bg-4'
//   },
// //   {
// //       id: 5,
// //       name : 'User 5',
// //       bg : 'bg-5'
// //   },
//   {
//       id: 6,
//       name : 'Agregar perfil',
//       bg : ''
//   }
// ]

function App() {
  const [profiles, setProfiles] = useState([])
    
    useEffect(() => {
        const getDatos = async (profs) =>  {
            let vec = profs
            const datos = await getDocs(collection(db, "users"));
                datos.forEach(doc => {
                    vec = [...vec, doc.data()]
                    setProfiles(vec);
            });
        }

        getDatos(profiles)
    }, [])
    
  return (
    <div className="App netflix-sans-font-loaded">
        <Router profiles={profiles}>
          <NavBar></NavBar>
        </Router>
    </div>
  );
}

export default App;
