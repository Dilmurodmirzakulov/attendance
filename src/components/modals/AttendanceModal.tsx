import React from 'react'
import { Button, Modal } from 'react-bootstrap';
interface AttendanceModalProps {
  handleClose: () => void;
  show: boolean;
}
const AttendanceModal: React.FC<AttendanceModalProps> = ({
  handleClose,
  show,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <h5 className="modal-title" id="attandanceModalLabel">
          Edit Attendance
        </h5>
      </Modal.Header>
      <Modal.Body>
        <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <select name="teaching-week" className="col-md-4 form-select wu-row-value">
                <option value="1">Select a teaching week...</option>
                <option value="2">Semester one</option>
                <option value="3">Semester two</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <select name="class-type" className="col-md-4 form-select wu-row-value">
                <option value="1">Select a class type...</option>
                <option value="2">Semester two</option>
                <option value="3">Semester two</option>
              </select>
            </div>
            <div className="col-md-6 ms-auto">
              <div className="input-group ms-auto align-items-center d-flex">
                <label htmlFor="search-student" className="mb-0 me-2">Search:</label>
                <input className="form-control" type="text" id="search-student" />
              </div>
            </div>
          </div>
          <table className="table table-bordered table-responsive-sm border-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <select name="class" className="form-select">
                    <option value="all">
                      All
                    </option>
                    <option value="6bis2">
                      6BIS2
                    </option>
                    <option value="6bis3">
                      6BIS3
                    </option>
                  </select>
                </th>
                <th scope="col">Student name</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>6BIS2</td>
                <td>Adkham Mamedov</td>
                <td>
                  <button className="d-block m-auto btn border btn-success">
                    <i className="fa-regular fa-circle-check"></i>
                  </button>
                </td>
                <td>
                  <button className="d-block m-auto btn border btn-danger">
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                </td>
                <td>
                  <button className="d-block m-auto btn border btn-secondary">
                    <i className="fa-solid fa-syringe"></i>
                  </button>
                </td>
                <td>
                  <button className="d-block m-auto btn border btn-warning">
                    <i className="fa-regular fa-clock"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>6BIS2</td>
                <td>Adkham Mamedov</td>
                <td>
                  <button className="d-block m-auto btn border">
                    <i className="fa-regular fa-circle-check"></i>
                  </button>
                </td>
                <td>
                  <button className="d-block m-auto btn border">
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                </td>
                <td>
                  <button className="d-block m-auto btn border">
                    <i className="fa-solid fa-syringe"></i>
                  </button>
                </td>
                <td>
                  <button className="d-block m-auto btn border">
                    <i className="fa-regular fa-clock"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>6BIS2</td>
                <td>Adkham Mamedov</td>
                <td>
                  <button className="d-block m-auto btn border">
                    <i className="fa-regular fa-circle-check"></i>
                  </button>
                </td>
                <td>
                  <button className="d-block m-auto btn border">
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                </td>
                <td>
                  <button className="d-block m-auto btn border">
                    <i className="fa-solid fa-syringe"></i>
                  </button>
                </td>
                <td>
                  <button className="d-block m-auto btn border">
                    <i className="fa-regular fa-clock"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AttendanceModal