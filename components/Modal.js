import React from 'react';
import styles from '../styles/Modal.module.scss'
import Image from 'next/image'
import {
  Button, Modal as ModalComponent, ModalFooter,
  ModalHeader, ModalBody
} from "reactstrap"

const Modal = React.forwardRef((props, ref) => {
  const { id, setModalOpen, modalOpen, close, title, parentStyles, titleStyles, footerStyles, footer, modalBody, bodyStyles, headerCloseBtn, footerCloseBtn
    , headerBody } = props;
  return (
    <ModalComponent ref={ref} id={id} toggle={setModalOpen} isOpen={modalOpen} className={parentStyles}>
      {headerBody ?
          headerBody :
      <div className={`${styles.modalheader} flex flex-row justify-between text-center`}>
        
            <h5 className={titleStyles}>
              {title}
            </h5>
            {headerCloseBtn}
      </div>
      }

      <ModalBody>
        <div className={`${styles.modalbody} ${bodyStyles}`}>
          {modalBody}
        </div>

      </ModalBody>
      <ModalFooter>
        <div className={`${styles.modalfooter} flex flex-row justify-between`}>
          {footerCloseBtn}
          <h5 className={footerStyles}>
            {footer}
          </h5>
        </div>
      </ModalFooter>
    </ModalComponent>
  )
})

export default Modal