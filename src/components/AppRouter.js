import {Navigate, Route, Routes} from "react-router-dom";
import {ERROR_ROUTE} from "../utils/const";
import {adminRoutes, publicRoutes} from "../routes";
import {useContext} from "react";
import {Context} from "../index";


const AppRouter = () => {
    const {allStore} = useContext(Context)

    return(
        <Routes>
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact />
                )}
            {allStore._isAuth && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}

            <Route path='*' element={<Navigate to={ERROR_ROUTE} />} />
        </Routes>
    );
}

export default AppRouter;