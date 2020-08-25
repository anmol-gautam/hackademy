import { push } from "react-router-redux";

export function register() {
    return (dispatch, getState) => {
        dispatch(push("/login"));
    }
}