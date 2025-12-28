import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
    const [data, setData] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn")
        navigate("/login")
    }
    
    function handleAddFleet (e) {
        e.preventDefault();
        setData("");
    }

    return (
        <>
        <h2>Admin Page</h2>
        <nav>
            <ul>
                <li><a href="/login" onClick={handleLogout}>Logout</a></li>
            </ul>
        </nav>
        <aside>
            <h3>Welcome to the Admin dashboard!</h3>
            <p>Vehicle Reg No: </p><input type="text" name="vehicleRegNo"/>
            <p>Category:</p> <select name="category" id="Category">
                <option value="Auto">Auto</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Bus">Bus</option>
            </select>
            <p>Driver Name: </p><input type="text" name="driverName" />
            <p>Availability Status:</p> <select name="availabilityStatus" id="AvailabilityStatus">
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
            </select>
            <br/>
            <button type="submit" onClick={handleAddFleet}>Add Fleet</button>
        </aside>
        </>
    )
}
export default Admin;