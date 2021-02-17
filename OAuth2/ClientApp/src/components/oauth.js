import React, { useState, useEffect, useCallback } from "react";
import MicrosoftLogin from "react-microsoft-login";

const YOUR_CLIENT_ID = 'ac59499a-4413-4f2e-9899-1ec6c7e4d097'

export default (props) => {

    const [name, setName] = useState(null)
    const [auth, setAuth] = useState(false)
    const [buttonVisible, setButtonVisible] = useState(true)
    const [text, setText] = useState(true)

    const accept = useCallback(() => {
        fetch('api/answer/' + name + '/true')
            .then(res => {
                return res.text()
            })
            .then(response => {
                console.log('res', response)
                if (response === true || response === 'true')
                    setText('Your process was successfully')
                else
                    setText('Your process was unsuccessfully')
            })
    }, [name])

    const reject = useCallback(() => {
        fetch('/api/answer/' + name + '/false')
            .then(res => {
                return res.text()
            })
            .then(response => {
                console.log('res', response)    
                if (response === true || response === 'true')
                    setText('Your process was successfully')
                else
                    setText('Your process was unsuccessfully')
            })
    }, [name])

    useEffect(() => {
        if (auth === true) {
            if (props.cb)
                props.cb()
        }
    }, [auth])

  const authHandler = (err, data) => {
      console.log(err, data);
      if (data) {
          setName(data.account.userName)
          setAuth(true)
      }
  };

    return (
        <React.Fragment>
            {name === null ? <MicrosoftLogin clientId={YOUR_CLIENT_ID} authCallback={authHandler} /> : name}
            {(auth === true && text !== "") ? <React.Fragment>
                <button onClick={accept}>Accept</button>
                {' '}
                <button onClick={reject}>Reject</button>
            </React.Fragment> : text}
    </React.Fragment>);
};