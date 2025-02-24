import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = <div>
    <Button onClick={handleClose} primary>I accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept
    </p>
  </Modal>

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>Open Modal</Button>
      {showModal &&  modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor sollicitudin justo, quis volutpat nisl accumsan eu. Cras tempor, nunc id tempus fringilla, eros odio viverra leo, at fringilla nulla neque vel augue. Donec sodales nisl eget sagittis mattis. Maecenas ac ante volutpat neque faucibus viverra. Pellentesque velit mi, rhoncus ac accumsan id, ultrices interdum leo. Curabitur vel est bibendum, sodales neque volutpat, congue est. Mauris at pharetra leo, sit amet finibus nulla. Integer id leo et nibh rhoncus egestas a vitae justo. Duis bibendum ligula eu felis pulvinar, nec aliquet diam ultricies. Nam tincidunt elit vel est convallis egestas. Phasellus efficitur massa sed pulvinar ullamcorper. Maecenas eros tellus, laoreet et nulla laoreet, aliquam dignissim est.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor sollicitudin justo, quis volutpat nisl accumsan eu. Cras tempor, nunc id tempus fringilla, eros odio viverra leo, at fringilla nulla neque vel augue. Donec sodales nisl eget sagittis mattis. Maecenas ac ante volutpat neque faucibus viverra. Pellentesque velit mi, rhoncus ac accumsan id, ultrices interdum leo. Curabitur vel est bibendum, sodales neque volutpat, congue est. Mauris at pharetra leo, sit amet finibus nulla. Integer id leo et nibh rhoncus egestas a vitae justo. Duis bibendum ligula eu felis pulvinar, nec aliquet diam ultricies. Nam tincidunt elit vel est convallis egestas. Phasellus efficitur massa sed pulvinar ullamcorper. Maecenas eros tellus, laoreet et nulla laoreet, aliquam dignissim est.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor sollicitudin justo, quis volutpat nisl accumsan eu. Cras tempor, nunc id tempus fringilla, eros odio viverra leo, at fringilla nulla neque vel augue. Donec sodales nisl eget sagittis mattis. Maecenas ac ante volutpat neque faucibus viverra. Pellentesque velit mi, rhoncus ac accumsan id, ultrices interdum leo. Curabitur vel est bibendum, sodales neque volutpat, congue est. Mauris at pharetra leo, sit amet finibus nulla. Integer id leo et nibh rhoncus egestas a vitae justo. Duis bibendum ligula eu felis pulvinar, nec aliquet diam ultricies. Nam tincidunt elit vel est convallis egestas. Phasellus efficitur massa sed pulvinar ullamcorper. Maecenas eros tellus, laoreet et nulla laoreet, aliquam dignissim est.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor sollicitudin justo, quis volutpat nisl accumsan eu. Cras tempor, nunc id tempus fringilla, eros odio viverra leo, at fringilla nulla neque vel augue. Donec sodales nisl eget sagittis mattis. Maecenas ac ante volutpat neque faucibus viverra. Pellentesque velit mi, rhoncus ac accumsan id, ultrices interdum leo. Curabitur vel est bibendum, sodales neque volutpat, congue est. Mauris at pharetra leo, sit amet finibus nulla. Integer id leo et nibh rhoncus egestas a vitae justo. Duis bibendum ligula eu felis pulvinar, nec aliquet diam ultricies. Nam tincidunt elit vel est convallis egestas. Phasellus efficitur massa sed pulvinar ullamcorper. Maecenas eros tellus, laoreet et nulla laoreet, aliquam dignissim est.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor sollicitudin justo, quis volutpat nisl accumsan eu. Cras tempor, nunc id tempus fringilla, eros odio viverra leo, at fringilla nulla neque vel augue. Donec sodales nisl eget sagittis mattis. Maecenas ac ante volutpat neque faucibus viverra. Pellentesque velit mi, rhoncus ac accumsan id, ultrices interdum leo. Curabitur vel est bibendum, sodales neque volutpat, congue est. Mauris at pharetra leo, sit amet finibus nulla. Integer id leo et nibh rhoncus egestas a vitae justo. Duis bibendum ligula eu felis pulvinar, nec aliquet diam ultricies. Nam tincidunt elit vel est convallis egestas. Phasellus efficitur massa sed pulvinar ullamcorper. Maecenas eros tellus, laoreet et nulla laoreet, aliquam dignissim est.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor sollicitudin justo, quis volutpat nisl accumsan eu. Cras tempor, nunc id tempus fringilla, eros odio viverra leo, at fringilla nulla neque vel augue. Donec sodales nisl eget sagittis mattis. Maecenas ac ante volutpat neque faucibus viverra. Pellentesque velit mi, rhoncus ac accumsan id, ultrices interdum leo. Curabitur vel est bibendum, sodales neque volutpat, congue est. Mauris at pharetra leo, sit amet finibus nulla. Integer id leo et nibh rhoncus egestas a vitae justo. Duis bibendum ligula eu felis pulvinar, nec aliquet diam ultricies. Nam tincidunt elit vel est convallis egestas. Phasellus efficitur massa sed pulvinar ullamcorper. Maecenas eros tellus, laoreet et nulla laoreet, aliquam dignissim est.
      </p>
    </div>
  )
}

export default ModalPage;