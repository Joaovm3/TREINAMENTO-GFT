import React from 'react';

import Navbar from '../components/Navbar';

import Sobre from '../pages/Sobre';
import Home from '../pages/Home';
import Contato from '../pages/Contato';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
  
const Routes = [
    { path: '/' , page: <Home /> },
    { path: '/home' , page: <Home /> },
    { path: '/sobre', page: <Sobre /> },
    { path: '/contato', page: <Contato /> }
];

// @TODO: Para criar uma rota padrão da raiz “/”, você pode usar a notação “<Redirect to="/home" />”.
const Router = () => {
    return ( 
        <BrowserRouter>
            <Navbar />

            <Switch>
                {Routes.map(route => { 
                    return (
                        <Route path={route.path} exact>
                            {route.page}
                        </Route> 
                    );
                })};
            </Switch>
        </BrowserRouter>
    ); 
}


export default Router;