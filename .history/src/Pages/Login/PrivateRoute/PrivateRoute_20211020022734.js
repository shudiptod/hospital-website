import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import barloader from '../../../images/loadergif/bar-loader.gif';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <>
                <img src={barloader} className="w-8/12 h-14" />
            </>
        )
    }
    return (
        {
            isLoading?
                <>
                </>
            :
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
}
    );
};

export default PrivateRoute;