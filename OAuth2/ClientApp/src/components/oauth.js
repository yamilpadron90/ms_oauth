import React, { useState, useEffect } from "react";
import MicrosoftLogin from "react-microsoft-login";

const YOUR_CLIENT_ID = 'ac59499a-4413-4f2e-9899-1ec6c7e4d097'

export default (props) => {

    const [name, setName] = useState(null)
    const [auth, setAuth] = useState(false)

    const accept = () => {

    }

    const reject = () => {

    }

    useEffect(() => {
        if (auth === true) {
            if (props.cb)
                props.cb()
        }
    }, [auth])

  const authHandler = (err, data) => {
      console.log(err, data);
      if (data) {
          setName(data.account.name + " " + data.account.userName)
          setAuth(true)
      }
  };

    return (
        <React.Fragment>
            {name === null ? <MicrosoftLogin clientId={YOUR_CLIENT_ID} authCallback={authHandler} /> : name}
            {auth === true && <React.Fragment>
                <button onClick={accept}>Accept</button>
                {' '}
                <button onClick={reject}>Reject</button>
            </React.Fragment>}
    </React.Fragment>);
};