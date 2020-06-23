import { createStore } from 'redux';

//INITIAL STATE
const initialState = {
    isUserLogged: false
};

//REDUCER
const reducer = (state, action) => {
    
    switch(action.type){
        case "USER_LOGIN":
            return {
                ...state,
                isUserLogged: true
            }
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

const store = createStore(reducer, initialState);

export default store;