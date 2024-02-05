const Notification = ({tipoMensaje, message }) => {
  console.log('message :>> ', message);
  console.log('tipoMensaje :>> ', tipoMensaje);
    if (tipoMensaje === null) {
      return null
    }
    if( tipoMensaje == 'error'){
      return (
        <div className="error">
          {message}
        </div>
      )
    }
    if( tipoMensaje == 'notifi'){
      return (
        <div className="notifi">
          {message}
        </div>
      )
    }
  
    
  }

  export default Notification