import React from "react";
import { Table } from "react-bootstrap";
interface StudentsTableProps {
  handleShowAttendance: () => void
}

const StudentsTable: React.FC<StudentsTableProps> = ({
  handleShowAttendance,
}) => {
  return (
    <Table responsive bordered border-0>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Student name</th>
          <th scope="col">
            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-info">
                Take <br /> attandance <br /> TW1
              </button>
              <span className="font-weight-normal">Seminar 1</span>
              <button className="btn btn-success">QR Code</button>
            </div>
          </th>
          <th scope="col">
            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-info" onClick={handleShowAttendance}>
                Take <br /> attandance <br /> TW1
              </button>
              <span className="font-weight-normal">Seminar 1</span>
              <button
                className="btn btn-success"
                data-toggle="modal"
                data-target="#qrModal"
              >
                QR Code
              </button>
            </div>
          </th>
          <th scope="col">
            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-info">
                Take <br /> attandance <br /> TW1
              </button>
              <span className="font-weight-normal">Seminar 1</span>
              <button className="btn btn-success">QR Code</button>
            </div>
          </th>
          <th scope="col">
            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-info">
                Take <br /> attandance <br /> TW1
              </button>
              <span className="font-weight-normal">Seminar 1</span>
              <button className="btn btn-success">QR Code</button>
            </div>
          </th>
          <th scope="col">
            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-info">
                Take <br /> attandance <br /> TW1
              </button>
              <span className="font-weight-normal">Seminar 1</span>
              <button className="btn btn-success">QR Code</button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>6BIS2 - Adkham Mamedov</td>
          <td className="bg-success text-white text-center">10.02</td>
          <td className="bg-danger text-white text-center">10.02</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>6BIS2 - Adkham Mamedov</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>6BIS2 - Adkham Mamedov</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
          <td className="text-center">10.02</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default StudentsTable;
