import React, { useCallback, useMemo, useState } from 'react';
import { useAuth } from './AuthContext';
import FleetCard from './FleetCard';

const initialFleets = [
  { id: crypto.randomUUID(), regNo: 'AP09 AB 1234', category: 'Car', driver: 'Ravi', available: true },
  { id: crypto.randomUUID(), regNo: 'AP10 XY 5678', category: 'Truck', driver: 'Sita', available: false },
];

export default function Admin() {
  const { logout } = useAuth();
  const [fleets, setFleets] = useState(initialFleets);

  // Sidebar form state
  const [regNo, setRegNo] = useState('');
  const [category, setCategory] = useState('Auto');
  const [driver, setDriver] = useState('');
  const [available, setAvailable] = useState(true);

  const handleAddFleet = (e) => {
    e.preventDefault();
    if (!regNo.trim() || !driver.trim() || !category.trim()) {
      alert('Please fill all required fields');
      return;
    }
    const newFleet = {
      id: crypto.randomUUID(),
      regNo: regNo.trim(),
      category,
      driver: driver.trim(),
      available,
    };
    setFleets((prev) => [newFleet, ...prev]);
    // Clear form
    setRegNo('');
    setCategory('Auto');
    setDriver('');
    setAvailable(true);
  };

  // Handlers memoized with useCallback to avoid re-renders in memoized FleetCard
  const handleUpdateDriver = useCallback((id) => {
    const name = prompt('Enter new driver name:');
    if (name && name.trim()) {
      setFleets((prev) =>
        prev.map((f) => (f.id === id ? { ...f, driver: name.trim() } : f))
      );
    } else if (name !== null) {
      alert('Invalid driver name');
    }
  }, []);

  const handleToggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, available: !f.available } : f))
    );
  }, []);

  const handleDeleteFleet = useCallback((id) => {
    const ok = confirm('Are you sure you want to delete this vehicle?');
    if (!ok) return;
    setFleets((prev) => prev.filter((f) => f.id !== id));
  }, []);

  // Stable props for FleetCard list
  const fleetCards = useMemo(
    () =>
      fleets.map((fleet) => (
        <FleetCard
          key={fleet.id}
          fleet={fleet}
          onUpdateDriver={handleUpdateDriver}
          onToggleAvailability={handleToggleAvailability}
          onDelete={handleDeleteFleet}
        />
      )),
    [fleets, handleUpdateDriver, handleToggleAvailability, handleDeleteFleet]
  );

  return (
    <div className="admin-layout">
      <nav className="navbar">
        <div className="brand">Fleet Admin</div>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </nav>

      <div className="content">
        <aside className="sidebar">
          <h3>Add Fleet</h3>
          <form onSubmit={handleAddFleet} className="fleet-form">
            <label>
              Vehicle Registration Number
              <input
                type="text"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="e.g., AP09 AB 1234"
                required
              />
            </label>

            <label>
              Category
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Auto</option>
                <option>Car</option>
                <option>Truck</option>
                <option>Bus</option>
              </select>
            </label>

            <label>
              Driver Name
              <input
                type="text"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                placeholder="Driver name"
                required
              />
            </label>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
              />
              Availability (Available)
            </label>

            <button type="submit">Add Fleet</button>
          </form>
        </aside>

        <main className="main">
          <h3>Fleet</h3>
          <div className="grid">{fleetCards}</div>
        </main>
      </div>
    </div>
  );
}