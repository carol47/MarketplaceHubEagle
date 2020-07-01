import { createStore } from 'redux';

//INITIAL STATE
const initialState = {
    isUserLogged: false,
    currentScreen: "InitialScreen"
};

//REDUCER
const reducer = (state, action) => {
    
    switch(action.type){
        case "USER_LOGIN":
            return {
                ...state,
                isUserLogged: true
            }
        case "SET_CURRENT_SCREEN":
            return {...state, currentScreen: action.payload.currentScreen}
    }

    return state;

}


//ACTIONS
export function login() {
    return {
        type: "USER_LOGIN"
    };
}

export function logoff() {
    return {
        type: "USER_LOGOFF"
    };
}

export function setCurrentScreen(screen){
    return {
        type: "SET_CURRENT_SCREEN",
        payload: {
            currentScreen : screen
        }
    }

}

const store = createStore(reducer, initialState);

export default store;