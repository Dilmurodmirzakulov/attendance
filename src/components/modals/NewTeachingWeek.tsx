import React from 'react'
import { Button, Modal } from 'react-bootstrap';
interface NewTeachingWeekProps {
  handleClose: () => void;
  show: boolean;
}
const NewTeachingWeek: React.FC<NewTeachingWeekProps> = ({
  handleClose,
  show,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered size='lg'>
      <Modal.Header closeButton>
        <h5 className="modal-title" id="newTeachingWeekLabel">
          Take Attendance
        </h5>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <select
              name="teaching-week"
              className="col-md-4 form-control wu-row-value"
            >
              <option value="1">Select a teaching week...</option>
              <option value="2">Semester one</option>
              <option value="3">Semester two</option>
            </select>
          </div>
          <div className="col-md-6">
            <select
              name="class-type"
              className="col-md-4 form-control wu-row-value"
            >
              <option value="1">Select a class type...</option>
              <option value="2">Semester two</option>
              <option value="3">Semester two</option>
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewTeachingWeek