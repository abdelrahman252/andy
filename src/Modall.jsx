import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Video from "./Video";
import TrackVisibility from "react-on-screen";

function Modall() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="header">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "pop animate__animated animate__slideInUp" : "pop"
              }
            >
              <Button
                onClick={handleShow}
                style={{
                  background: "#721072",
                  border: "none",
                  color: "whitesmoke",
                  fontWeight: "700",
                }}
              >
                Here is a surprise for U
              </Button>
            </div>
          )}
        </TrackVisibility>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Video />
          <h5 style={{ position: "absolute", bottom: "20px", right: "40px" }}>
            please give me a chance to prove myself and i will never fail you
          </h5>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modall;
