import { useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import StudentsTable from "./components/StudentsTable";
import NewTeachingWeek from "./components/modals/NewTeachingWeek";
import AttendanceModal from "./components/modals/AttendanceModal";

function App() {
  const [show, setShow] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handleCloseAttendance = () => setShowAttendance(false);
    const handleShowAttendance = () => setShowAttendance(true);
  return (
    <>
      <Header />
      <main className="container">
        <div className="wu-contact-student-link">
          You can contact students of your groups <a href="#">here</a>
        </div>
        <Filters />
        <button
          className="btn btn-success d-block my-md-5 my-4 ml-auto"
          onClick={handleShow}
        >
          <i className="fa-solid fa-plus"></i> Add new teaching week TW
        </button>
        <StudentsTable handleShowAttendance={handleShowAttendance} />
      </main>
      <NewTeachingWeek handleClose={handleClose} show={show} />
      <AttendanceModal
        handleClose={handleCloseAttendance}
        show={showAttendance}
      />
    </>
  );
}

export default App;
