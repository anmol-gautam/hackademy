import { push } from "react-router-redux";

export function register() {
    return (dispatch, getState) => {
        dispatch(push("/login"));
    }
}

export function login() {
    return (dispatch, getState) => {
        dispatch(push("/profile"));
    }
}

export function logout() {
    return (dispatch, getState) => {
        dispatch(push("/"));
    }
}

export function loginPage() {
    return (dispatch, getState) => {
        dispatch(push("/login"));
    }
}