import React, { useState } from 'react';
import axios from 'axios';
import Modal from '/home/mashud/Django/penzifrontend/src/components/Modals.js';
import './styles.css';

const UserForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    message: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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
      // Send a POST request to the backend endpoint
      const response_data = await axios.post('http://127.0.0.1:8000/message-receive/', {
        phone_number: formData.phoneNumber,
        message: formData.message,
      });
      setModalMessage(response_data);  // Set response message
      setModalOpen(true);
      // Call onSuccess with the phone number to proceed to the next form
      onSuccess(formData.phoneNumber);
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
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={modalMessage} />
    </div>
  );
};

const RegistrationForm = ({ phoneNumber, onSuccess }) => {
  const [formData, setFormData] = useState({
    phoneNumber: phoneNumber,
    name: '',
    age: '',
    gender: '',
    county: '',
    town: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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
      // Concatenate the data into a string separated by #
      const concatenatedData1 = `start#${formData.name}#${formData.age}#${formData.gender}#${formData.county}#${formData.town}`;
      // Send a POST request to the backend endpoint with registration data
      const response_data = await axios.post('http://127.0.0.1:8000/message-receive/', {
        phone_number: formData.phoneNumber,
        message: concatenatedData1,
      });
      setModalMessage(response_data);  // Set response message
      setModalOpen(true);
      // Call onSuccess to proceed to the next form
      onSuccess();
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Failed to register user. Please try again.');
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
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
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={modalMessage} />
    </div>
  );
};

const DetailsForm = ({ phoneNumber, onSuccess }) => {
  const [detailsData, setDetailsData] = useState({
    phoneNumber: phoneNumber,
    level_of_education: '',
    profession: '',
    marital_status: '',
    religion: '',
    ethnicity: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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
      // Concatenate the data into a string separated by #
      const concatenatedData = `details#${detailsData.level_of_education}#${detailsData.profession}#${detailsData.marital_status}#${detailsData.religion}#${detailsData.ethnicity}`;
      // Send a POST request to the backend endpoint with details data
      const response_data = await axios.post('http://127.0.0.1:8000/message-receive/', {
        phone_number: detailsData.phoneNumber,
        message: concatenatedData,
      });
      setModalMessage(response_data);  // Set response message
      setModalOpen(true);
      // Call onSuccess to proceed to the next form
      onSuccess();
    } catch (error) {
      console.error('Error saving details:', error);
      alert('Failed to save details. Please try again.');
    }
  };

  return (
    <div>
      <h2>Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={detailsData.phoneNumber}
          onChange={handleChange}
        />
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
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={modalMessage} />
    </div>
  );
};

const DescriptionForm = ({ phoneNumber, onSuccess }) => {
  const [descriptionData, setDescriptionData] = useState({
    phoneNumber: phoneNumber,
    description: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDescriptionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Concatenate the data into a string separated by #
      const concatenatedData = `description#${descriptionData.description}`;
      // Send a POST request to the backend endpoint with description data
      const response = await axios.post('http://127.0.0.1:8000/message-receive/', {
        phone_number: descriptionData.phoneNumber,
        message: concatenatedData,
      });
      setModalMessage(response.data);  // Set response message
      setModalOpen(true);
      // Clear the form fields after successful submission
      setDescriptionData({
        phoneNumber: descriptionData.phoneNumber,
        description: '',
      });
      // Call onSuccess to proceed to the next form (if needed)
      onSuccess();
    } catch (error) {
      console.error('Error saving description:', error);
      alert('Failed to save description. Please try again.');
    }
  };

  return (
    <div>
      <h2>Description</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={descriptionData.phoneNumber}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={descriptionData.description}
          onChange={handleChange}
        />
        <button type="submit">Save Description</button>
      </form>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={modalMessage} />
    </div>
  );
};

const Penzi = () => {
  const [activeTab, setActiveTab] = useState('activation');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleActivationSuccess = (phoneNumber) => {
    setPhoneNumber(phoneNumber);
    setActiveTab('registration');
  };

  const handleRegistrationSuccess = () => {
    setActiveTab('details');
  };

  const handleDetailsSuccess = () => {
    setActiveTab('description');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'activation':
        return <UserForm onSuccess={handleActivationSuccess} />;
      case 'registration':
        return <RegistrationForm phoneNumber={phoneNumber} onSuccess={handleRegistrationSuccess} />;
      case 'details':
        return <DetailsForm phoneNumber={phoneNumber} onSuccess={handleDetailsSuccess} />;
      case 'description':
        return <DescriptionForm phoneNumber={phoneNumber} onSuccess={() => { }} />;
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
      {renderTabContent()}
    </div>
  );
};

export default Penzi;