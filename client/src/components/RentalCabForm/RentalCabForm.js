import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RentalCabForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import ProgressBar from 'react-bootstrap/ProgressBar';


export const RentalCabForm = () => {
  const [step, setStep] = useState(1);

  const [vehicle, setVehicle] = useState({
    name: "Toyota Camry",
    make: "Toyota",
    plateNumber: "",
  });

  const [availability, setAvailability] = useState({
    from_location: "New Westminster",
    time: "08:00",
    days: "2",
    pickup: new Date(),
  });


  const [costs, setCosts] = useState({
    fare: "150",
    deposit: "200",
    otherCosts: "50",
  });

  const [images, setImages] = useState([]);

  const handleVehicleChange = (e) => {
    setVehicle({
      ...vehicle,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvailabilityChange = (e) => {
    setAvailability({
      ...availability,
      [e.target.name]: e.target.value,
    });
  };


  const handleCostsChange = (e) => {
    setCosts({
      ...costs,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setImages(selectedFiles);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Vehicle Details</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={vehicle.name}
                onChange={handleVehicleChange}
              />
            </label>
            <label>
              Make:
              <input
                type="text"
                name="make"
                value={vehicle.make}
                onChange={handleVehicleChange}
              />
            </label>
            <label>
              Plate Number:
              <input
                type="text"
                name="plateNumber"
                value={vehicle.plateNumber}
                onChange={handleVehicleChange}
              />
            </label>

            <Button
              variant="success"
              onClick={handleNext}
              className="next-button"
            >
              Next
            </Button>{" "}
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Availability</h2>
            <label>
              Pickup On:
              <DatePicker
                selected={availability.pickup}
                onChange={handleAvailabilityChange}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a pickup date"
                value={availability.pickup}
              />
            </label>
            <label>
              From Time:
              <Form.Select
                aria-label="Default select example"
                name="time"
                value={availability.time}
                onChange={handleAvailabilityChange}
              >
                <option value="">Select a time</option>
                <option value="00:00">12:00 AM</option>
                <option value="01:00">1:00 AM</option>
                <option value="02:00">2:00 AM</option>
                <option value="03:00">3:00 AM</option>
                <option value="04:00">4:00 AM</option>
                <option value="05:00">5:00 AM</option>
                <option value="06:00">6:00 AM</option>
                <option value="07:00">7:00 AM</option>
                <option value="08:00">8:00 AM</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="22:00">10:00 PM</option>
                <option value="23:00">11:00 PM</option>
              </Form.Select>
            </label>
            <label>
              Number of Days Available for Renting:
              <Form.Select
                aria-label="Default select example"
                name="days"
                value={availability.days}
                onChange={handleAvailabilityChange}
              >
                <option value="">Select a number of days</option>
                <option value="1">1 day</option>
                <option value="2">2 days</option>
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
              </Form.Select>
            </label>
            <Button
              variant="success"
              onClick={handleNext}
              className="next-button"
            >
              Next
            </Button>{" "}
            <Button
              variant="secondary"
              onClick={handlePrev}
              className="previous-button"
            >
              Previous
            </Button>{" "}
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Images</h2>
            <label className="upload-image">
              Upload Images:
              <input
                type="file"
                name="images"
                multiple
                onChange={handleImageUpload}
              />
            </label>
            <Button
              variant="success"
              onClick={handleNext}
              className="next-button"
            >
              Next
            </Button>{" "}
            <Button
              variant="secondary"
              onClick={handlePrev}
              className="previous-button"
            >
              Previous
            </Button>{" "}
          </div>
        );
      case 4:
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <h2>Pricing</h2>
              <label>
                Daily Rate:
                <input
                  type="text"
                  name="fare"
                  value={costs.fare}
                  onChange={handleCostsChange}
                />
              </label>
              <label>
                Deposit Amount:
                <input
                  type="text"
                  name="deposit"
                  value={costs.deposit}
                  onChange={handleCostsChange}
                />
              </label>
              <label>
                Late Return Fee:
                <input
                  type="text"
                  name="otherCosts"
                  value={costs.otherCosts}
                  onChange={handleCostsChange}
                />
              </label>
              <Button
                variant="success"
                onClick={handleSubmit}
                className="next-button"
              >
                Submit
              </Button>{" "}
              <Button
                variant="secondary"
                onClick={handlePrev}
                className="previous-button"
              >
                Previous
              </Button>{" "}
              <div className="form-summary">
                <h2>Summary</h2>
                <Table striped bordered hover>
                  <tr>
                    <th>Vehicle:</th>
                    <td>{vehicle.name}</td>
                  </tr>
                  <tr>
                    <th>Make:</th>
                    <td>{vehicle.make}</td>
                  </tr>
                  <tr>
                    <th>Plate Number:</th>
                    <td>{vehicle.plateNumber}</td>
                  </tr>
                  <tr>
                    <th>Availability:</th>
                    <td>
                      From - {availability.pickup.toDateString()}{", "}{availability.time} <br></br> Available For - {availability.days} Days
                    </td>
                  </tr>
                  <tr>
                    <th>Deposit:</th>
                    <td>{costs.deposit}$</td>
                  </tr>
                  <tr>
                    <th>Fare Per Day:</th>
                    <td>{costs.fare}$</td>
                  </tr>
                  <tr>
                    <th>Late Return Fee:</th>
                    <td>{costs.otherCosts}$</td>
                  </tr>
                  <tr>
                    <th>Images Uploaded:</th>
                    <td>{images.length}</td>
                  </tr>
                </Table>
                <div className="image-preview">
                  {images.map((image, index) => (
                    <div className="image-preview-item" key={index}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  const renderProgressBar = () => {
    const progress = ((step - 1) / 3) * 100; // Calculate progress percentage
    return (
      // <div
      //   style={{ width: "100%", height: "20px", background: "#f0f0f0" }}
      //   className="progress-bar"
      // >
      //   <div
      //     style={{
      //       width: `${progress}%`,
      //       height: "100%",
      //       background: "#007bff",
      //     }}
      //   ></div>
      // </div>
      <ProgressBar animated now={progress} style={{ marginTop: "20px" }}/>
    );
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div>
      {renderProgressBar()}
      {renderFormStep()}
    </div>
  );
};
