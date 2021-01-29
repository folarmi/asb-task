import React from "react";

function TableHeader() {
  return (
    <div>
      <section className="table-header">
        <label htmlFor="checkbox"></label>
        <input type="checkbox" />
        <p>Name</p>
        <p>Location</p>
        <p>Status</p>
        <p>Entries</p>
        <p>Risk profile</p>
      </section>
    </div>
  );
}

export default TableHeader;
