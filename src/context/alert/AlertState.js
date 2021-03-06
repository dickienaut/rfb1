import React, { useReducer } from 'react';
import AlertContext from './alertContext.js'
import AlertReducer from './alertReducer.js'
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types'

const AlertState = (props) => {
  const initialState = {
    alert: null
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  //Updates the alert field of state if someone has searched without entering a search term
  //There is a timout on the function so that the alert disappears after some period
  const setAlert = (msg, type) => {
    dispatch({
      type:  SET_ALERT,
      payload: {msg, type}
    })
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000)
  }

  console.log(props)
  return(

    <AlertContext.Provider value={{
      alert: state.alert,
      setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState;
