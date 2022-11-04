import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import '../pages/profiles/Profiles.css'
import Profiles from "../pages/profiles/Profiles";
import Home from "../pages/home/Home";
import ProfileAdd from "../components/profile-pack/profile-add/ProfileAdd";
import ProfileEdit from "../components/profile-pack/profile-edit/ProfileEdit";
import ProfileDelete from "../components/profile-pack/profile-delete/ProfileDelete";

const Router = ({ profiles, children }) => {    

    const Principal = () => profiles.length === 2 ? 
                            <Navigate to='/home' /> :
                            (profiles.length === 0 ? <div className="preloader"></div> :
                            <Profiles title="¿Quién está viendo ahora?" profiles={profiles} action='R' />)
                            
    return (
        <BrowserRouter>
            {children}
            <Routes>
                <Route path="/" element={<Principal />}></Route>
                <Route path="/profiles" element={<Profiles title="¿Quién está viendo ahora?" profiles={profiles} action='R' />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/ManageProfiles" element={<Profiles title="Administrar perfiles:" profiles={profiles} action='U' />}></Route>
                <Route path="/AddProfile" element={<ProfileAdd profiles={profiles} />}></Route>
                <Route path="/EditProfile/:id" element={<ProfileEdit profiles={profiles} />}></Route>
                <Route path="/DeleteProfile/:id" element={<ProfileDelete profiles={profiles} />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
