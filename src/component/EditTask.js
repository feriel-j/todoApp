import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/todoSlice";
import { AiOutlineEdit } from "react-icons/ai";

const EditTask = ({ id }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setEdited] = useState({
    titele: "",
    description: "",
  });
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <AiOutlineEdit className="up" />
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="editmod">
          {" "}
          <input
            type="text"
            placeholder="Enter task title"
            onChange={(e) => {
              setEdited({ ...edited, title: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Enter task description"
            onChange={(e) => {
              setEdited({ ...edited, description: e.target.value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(updateTask({ id: id, edited }));
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
