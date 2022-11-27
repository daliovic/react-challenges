import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal'

export default function PortfolioModal({
  component,
  title,
  show,
  handleShow,
  handleHide,
}: {
  component: any
  title: string
  show: boolean
  handleShow(): void
  handleHide(): void
}) {
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  return (
    <>
      {/* <Button variant='btn' onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleHide}
        centered
        size='xl'
        dialogClassName='h-75'
        contentClassName='h-75'
        scrollable>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {<Modal.Body>{component()}</Modal.Body>}
        <Modal.Footer>
          <button className='modal-button' onClick={handleHide}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
