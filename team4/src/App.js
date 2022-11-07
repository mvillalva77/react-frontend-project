import './App.css';
import NavBar from './components/navBar/NavBar';
import Router from './Router/Router';
import ProfileProvider from './context/profileContext/ProfileContext';
import { collection, getDocs } from "firebase/firestore"; 
import db from "./firebase/firebaseConfig";
import { useEffect, useState } from "react";

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
    <div className="App netflix-sans-font-loaded overflow-hidden">
        <ProfileProvider>
          <Router profiles={profiles}>
            <NavBar></NavBar>
          </Router>
        </ProfileProvider>
    </div>
  );
}

export default App;
