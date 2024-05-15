import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const UserForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend endpoint
      await axios.post('http://127.0.0.1:8000/message-receive/', {
        phone_number: phoneNumber,
        message: message,
      });
      // Clear the form fields after successful submission
      setPhoneNumber('');
      setMessage('');
      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user. Please try again.');
    }
  };

  return (
    <div>
      <h2>Activation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSuccessModal(false)}>&times;</span>
            <p>User registered successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    county: '',
    town: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //concatenate the data into a string separated by #
      const concatenatedData1 = `start#${formData.name}#${formData.age}#${formData.gender}#${formData.county}#${formData.town}`;
      // Send a POST request to the backend endpoint with registration data
      await axios.post('http://127.0.0.1:8000/message-receive/', concatenatedData1);
      // Clear the form fields after successful submission
      setFormData({
        name: '',
        age: '',
        gender: '',
        county: '',
        town: '',
      });
      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user. Please try again.');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="county">County:</label>
        <input
          type="text"
          id="county"
          name="county"
          value={formData.county}
          onChange={handleChange}
        />
        <label htmlFor="town">Town:</label>
        <input
          type="text"
          id="town"
          name="town"
          value={formData.town}
          onChange={handleChange}
        />
        <button type="submit">Register User</button>
      </form>
      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSuccessModal(false)}>&times;</span>
            <p>User registered successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};


const DetailsForm = () => {
  const [detailsData, setDetailsData] = useState({
    level_of_education: '',
    profession: '',
    marital_status: '',
    religion: '',
    ethnicity: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetailsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //concatenate the data into a string separated by #
      const concatenatedData = `details#${detailsData.level_of_education}#${detailsData.profession}#${detailsData.marital_status}#${detailsData.religion}#${detailsData.ethnicity}`;
      // Send a POST request to the backend endpoint with details data
      await axios.post('http://127.0.0.1:8000/message-receive/', concatenatedData);
      // Clear the form fields after successful submission
      setDetailsData({
        level_of_education: '',
        profession: '',
        marital_status: '',
        religion: '',
        ethnicity: '',
      });
      // Show success modal
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error saving details:', error);
      alert('Failed to save details. Please try again.');
    }
  };

  return (
    <div>
      <h2>Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="level_of_education">Level of Education:</label>
        <input
          type="text"
          id="level_of_education"
          name="level_of_education"
          value={detailsData.level_of_education}
          onChange={handleChange}
        />
        <label htmlFor="profession">Profession:</label>
        <input
          type="text"
          id="profession"
          name="profession"
          value={detailsData.profession}
          onChange={handleChange}
        />
        <label htmlFor="marital_status">Marital Status:</label>
        <input
          type="text"
          id="marital_status"
          name="marital_status"
          value={detailsData.marital_status}
          onChange={handleChange}
        />
        <label htmlFor="religion">Religion:</label>
        <input
          type="text"
          id="religion"
          name="religion"
          value={detailsData.religion}
          onChange={handleChange}
        />
        <label htmlFor="ethnicity">Ethnicity:</label>
        <input
          type="text"
          id="ethnicity"
          name="ethnicity"
          value={detailsData.ethnicity}
          onChange={handleChange}
        />
        <button type="submit">Save Details</button>
      </form>
      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSuccessModal(false)}>&times;</span>
            <p>Details saved successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

const DescriptionForm = () => {
  // Add description form fields and logic here
};

const Penzi = () => {
  const [activeTab, setActiveTab] = useState('activation');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'activation':
        return <UserForm />;
      case 'registration':
        return <RegistrationForm />;
      case 'details':
        return <DetailsForm />;
      case 'description':
        return <DescriptionForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab('activation')}>Activation</button>
        <button onClick={() => setActiveTab('registration')}>Registration</button>
        <button onClick={() => setActiveTab('details')}>Details</button>
        <button onClick={() => setActiveTab('description')}>Description</button>
      </nav>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default Penzi;


