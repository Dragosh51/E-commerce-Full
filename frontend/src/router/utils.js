import React, { memo } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Login } from "../pages/Log-in/login";

// Redirect to the login page if the user is not logged in and goes to a NonPrivateRoute
export const PrivateRoute = memo(function PrivateRoute({ children, ...rest }) {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
    console.log(isAuthenticated);

    return (
        <Route
          {...rest}
          element={
            isAuthenticated ? (
              <React.Fragment>{children}</React.Fragment>
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
      );
});

// export const NonPrivateRoute = memo(function NonPrivateRoute({
//     children,
//     ...rest
// }) {
//     const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

//     return (
//         <Route
//           {...rest}
//           element={
//             !isAuthenticated ? (
//               <React.Fragment>{children}</React.Fragment>
//             ) : (
//               <Navigate to="/Register" />
//             )
//           }
//         />
//       );
// });

export const NonPrivateRoute = (Component) => {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
    console.log('autch check', isAuthenticated);

    return isAuthenticated ? <Component /> : <Navigate to="/Login" />
}
