import React from "react";

const Filters = () => {
  return (
    <>
      <div className="wu-row row">
        <div className="wu-row-prop col-md-2">Academic Year:</div>
        <div className="col-md-4 wu-row-value">2022/2023</div>
      </div>
      <div className="wu-row row">
        <div className="wu-row-prop col-md-2">Semester:</div>
        <div className="col-md-4">
          <select className=" form-control wu-row-value">
            <option value="1">Semester one</option>
            <option value="2">Semester two</option>
          </select>
        </div>
      </div>
      <div className="wu-row row">
        <div className="wu-row-prop col-md-2">Module:</div>
        <div className="col-md-4">
          <select className="form-control wu-row-value">
            <option value="0">Select Module</option>
            <option value="1">Example Module</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
