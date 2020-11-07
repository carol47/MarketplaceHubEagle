// testando
const initialState = {
  isUserLogged: false,
  currentScreen: "InitialScreen",
  hubs: [],
  markeplaces: [],
}

//ACTIONS

export function login() {
  return {
    type: "USER_LOGIN",
  }
}

export function logoff() {
  return {
    type: "USER_LOGOFF",
  }
}

export function setCurrentScreen(screen) {
  return {
    type: "SET_CURRENT_SCREEN",
    payload: {
      currentScreen: screen,
    },
  }
}

export function registerHub(hub) {
  return {
    type: "REGISTER_HUB",
    payload: hub,
  }
}

//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        isUserLogged: true,
      }
    case "SET_CURRENT_SCREEN":
      return { ...state, currentScreen: action.payload.currentScreen }
    case "REGISTER_HUB":
      const newArray = [...state.hubs, action.payload]
      return { ...state, newArray }
  }

  return state
}
