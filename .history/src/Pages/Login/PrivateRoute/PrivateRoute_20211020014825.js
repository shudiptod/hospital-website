import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import bar-loader from '../../../images/loadergif/bar-loader.gif';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <>
                <img src={ } />
            </>
        )
    }
    return (
        <Route
            {...rest}
            render={
                ({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;