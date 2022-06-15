import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MovieModal({ showModal, setShowModal, movie }) {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <Modal className="content__modal" show={showModal} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="content__modal--title">
          <figure className="modal__figure">
            <img
              className="modal__img"
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </figure>
          <h2 className="modal__title">{movie.title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal__body">
          <p>{movie.overview}</p>
          <small>
            <span>Popularity:</span>
            {movie.popularity}
          </small>
          <small>
            <span>Release Date:</span>
            {movie.release_date}
          </small>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieModal;
