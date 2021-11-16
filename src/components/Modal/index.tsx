import React from 'react';

interface IProps {
  children?:any;
  onClose?:any;
  onClick?:any;
}

function Modal(props:IProps) {
  const { onClose, children } = props;
  return (
    <Overlay onClose={onClose}>
      <Content onClose={onClose}>{children}</Content>
    </Overlay>
  );
}

function Overlay(props:IProps) {

  const { children, onClose } = props;

  return (
    <div
      style={{
        background: 'hsla(0, 0%,0%,0.33)',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={(event) => {
        // StopPropagation keeps the event from bubbling any further up into the DOM
        // Click mask to close Modal
        event.stopPropagation();
        onClose();
      }}
    >
      {/* Get collection of the <div> element's children */}
      {children}
    </div>
  );
}

function Content(props:IProps) {

  const { children, onClose } = props;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      style={{
        background: 'white',
        outline: 'none',
        position: 'relative',
        borderRadius: '10px',
      }}
      // Indicates whether an element is modal when displayed
      aria-modal='true'
      // The element is focused
      tabIndex={-1}
    >
      <CloseButton onClick={onClose} />
      {children}
    </div>
  );
}

function CloseButton(props:IProps) {

  const { onClose, onClick } = props;

  return (
    <button
      style={{
        position: 'absolute',
        top: 18,
        right: 18,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        zIndex: 10,
        color: '#777',
      }}
      onClick={onClick}
    >
      Close
    </button>
  );
}

export default Modal;
