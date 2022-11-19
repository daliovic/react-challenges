import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal'

export default function PortfolioModal({ component, title }: { component: JSX.Element; title: string }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {/* <Button variant='btn' onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <button className='btn' onClick={handleShow}>
        Show
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size='xl'
        dialogClassName='h-75'
        contentClassName='h-75'
        scrollable>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{component}</Modal.Body>
        <Modal.Footer>
          <button className='modal-button' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
