import React from 'react';

const vehicleImg =
  'https://via.placeholder.com/300x160.png?text=Vehicle'; // static image for all

function FleetCard({ fleet, onUpdateDriver, onToggleAvailability, onDelete }) {
  const { id, regNo, category, driver, available } = fleet;

  return (
    <div className="card">
      <img src={vehicleImg} alt="Vehicle" className="card-img" />
      <div className="card-body">
        <div className="row">
          <span className="label">Vehicle Reg No:</span>
          <span>{regNo}</span>
        </div>
        <div className="row">
          <span className="label">Category:</span>
          <span>{category}</span>
        </div>
        <div className="row">
          <span className="label">Driver:</span>
          <span>{driver}</span>
        </div>
        <div className="row">
          <span className="label">Availability:</span>
          <span className={available ? 'status available' : 'status unavailable'}>
            {available ? 'Available' : 'Unavailable'}
          </span>
        </div>

        <div className="actions">
          <button onClick={() => onUpdateDriver(id)}>Update Driver</button>
          <button onClick={() => onToggleAvailability(id)}>
            {available ? 'Mark Unavailable' : 'Mark Available'}
          </button>
          <button className="danger" onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FleetCard);