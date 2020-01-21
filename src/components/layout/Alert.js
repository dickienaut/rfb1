import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext.js'

const Alert = () => {

  const alertContext = useContext(AlertContext)
  const { alert } = alertContext
  console.log(alert)

  return(
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fa fa-info-circle'/> {alert.msg}
      </div>
    )
  )
};

export default Alert;
