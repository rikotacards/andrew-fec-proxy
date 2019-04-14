import React from 'react';
import styles from './css/Modal.less';

class Modal extends React.Component {
  render() {
    return (
      <ModalTrigger />
    );
  }
}

const ModalTrigger = () => <button className={styles.modalBtn} type="button">X</button>;

export default Modal;
