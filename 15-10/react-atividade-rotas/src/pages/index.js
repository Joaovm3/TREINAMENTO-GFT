import React from "react";

import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
  
const Routes = [
    { path: '/', page: <div> Inicial </div> },
    { path: '/login', page: <div> Login </div> },
    { path: '/home', page: '' }
];

console.log(1);

const Router = () => {
    return (
       <BrowserRouter>
           <Switch>
               {Routes.map(route => {
                   <Route path={route.path} exact>
                       {route.page}
                   </Route>
               })}
           </Switch>
       </BrowserRouter>
    ); 
}


export default Router;