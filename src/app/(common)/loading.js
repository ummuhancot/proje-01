import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className="text-center p-5">
      <Spinner animation="border" variant="light" />
    </div>
  );
}

export default Loading