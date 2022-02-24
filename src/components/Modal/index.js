import React from 'react';

// received currentPhoto from PhotoList
// then assigned its properties in the modal: destructuring Props into 'currentPhoto' ===> lets us use Var


function Modal({ onClose, currentPhoto }) {
  const { name, category, description, index } = currentPhoto

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
        <p>
          {description}
        </p>
        <button onClick={onClose} type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;


//note:  Modal is invoked and tries to render as soon as PhotoList has rendered. 
// BUT currentPhoto state isn't defined until the user clicks on an image. se can't yet destructure since it's an undefined value, so a TypeError is raised.