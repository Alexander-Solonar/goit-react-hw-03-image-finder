import css from './Modal.module.css';

const Modal = ({ url, closeModal }) => {
  return (
    <div
      className={css.overlay}
      onClick={e => {
        closeModal(e);
      }}
    >
      <div className={css.modal}>
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Modal;
