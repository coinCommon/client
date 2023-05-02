import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Link/header";
import Footer from "./components/Link/footer";
import Formula from "./font/stylesheet.css"
import React, {useContext, useEffect, useState} from "react";
import {check, checkRole} from "./http/userAPI";
import {Context} from "./index";
import Loader from "./components/Link/loader";


const App = () => {

    const {allStore} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        checkRole().then(data => {
            allStore.setIsAdmin(true)
        })
        check().then(data => {
            allStore.setIsAuth(true)
            allStore.setUsers({id: data.id, name: data.name, email: data.email, role: data.role})
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Loader/>
    }

  return (
    <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
