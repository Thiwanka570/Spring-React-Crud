import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

function Alertmessage({ message,bg }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!!message); // Show the alert if a message is provided

    // Set a timeout to hide the alert after 'timeout' milliseconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(timer); // Clear the timeout when the component unmounts
    };
  }, [message]);

  return (
    <>

      <Alert show={show} variant={bg}>
        {message}
      </Alert>
    </>
  );
}

export default Alertmessage;
