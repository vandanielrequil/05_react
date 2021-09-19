import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const CustomRoute = ({ secured, children, withAppBar = true, ...rest }) => {
    const { isAuthenticated } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(initMessageTracking());
    // }, [dispatch]);

    console.log(isAuthenticated);

    if ((secured && isAuthenticated) || !secured) {
        return (
            <Route {...rest}>
                {children}
            </Route>
        );
    }

    return <Redirect to={{ pathname: "/signin" }} />;
};

export default CustomRoute;

//&& isAuthenticated