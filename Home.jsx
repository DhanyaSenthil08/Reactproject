import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import './About.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('About');
  const [pharmacistsData, setPharmacistsData] = useState([]);
  const [medicinesData, setMedicinesData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoints
        const pharmacistsResponse = await axios.get('/api/pharmacists'); // API for pharmacists
        const medicinesResponse = await axios.get('/api/medicines'); // API for medicines

        setPharmacistsData(pharmacistsResponse.data);
        setMedicinesData(medicinesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <ul>
          <li onClick={() => setActiveSection('About')}>About</li>
          <li onClick={() => setActiveSection('Pharmacists')}>Pharmacists</li>
          <li onClick={() => setActiveSection('Medicines')}>Medicines</li>
          <li onClick={() => setActiveSection('Order')}>Order</li>
        </ul>
      </nav>

      <div className="dashboard-content">
        {activeSection === 'About' && <About />}
        {activeSection === 'Pharmacists' && <Pharmacists pharmacistsData={pharmacistsData} />}
        {activeSection === 'Medicines' && <Medicines medicinesData={medicinesData} />}
        {activeSection === 'Order' && <Order />}
      </div>
    </div>
  );
};

const About = () => (
  <div >
    <h2>About Us</h2>
    <p>
      Welcome to our pharmacy! At [Your Pharmacy Name], we are dedicated to providing high-quality healthcare services and a wide range of medications to meet the needs of our community. Our mission is to ensure that every customer receives personalized care and attention, helping them manage their health effectively.
      Established in [Year of Establishment], our pharmacy has become a trusted partner for healthcare in the [Location] area. We pride ourselves on our knowledgeable and friendly staff, who are always ready to assist with any questions or concerns you may have about your medications or health conditions.
      In addition to dispensing prescriptions, we offer a variety of health services, including medication therapy management, health screenings, immunizations, and wellness consultations. Our goal is to empower our patients with the knowledge and tools they need to achieve optimal health.
      At [Your Pharmacy Name], we believe in the importance of community involvement. We actively participate in local health fairs, educational workshops, and outreach programs to promote health awareness and disease prevention. Your health is our priority, and we are committed to supporting you every step of the way.
      Thank you for choosing [Your Pharmacy Name]. We look forward to serving you and your family with compassion and care!
    </p>
  </div>
);

const Pharmacists = () => {
    const pharmacistsData = [
      {
        id: 1,
        name: 'John Doe',
        specialization: 'Clinical Pharmacist',
        photo: 'https://tse2.mm.bing.net/th?id=OIP.X3yB06yQ5OkNnjHcqzjOUQHaEK&pid=Api&P=0&h=180',
        detail: 'John has over 10 years of experience in clinical pharmacy. He specializes in patient care and medication management.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        specialization: 'Pediatric Pharmacist',
        photo: 'https://tse4.mm.bing.net/th?id=OIP.wb6vyWIYuO-YkGVX_fMe6AHaE8&pid=Api&P=0&h=180',
        detail: 'Jane focuses on medication therapy management for children. She is passionate about educating parents on medication safety.',
      },
      {
        id: 3,
        name: 'Michael Johnson',
        specialization: 'Pharmacy Manager',
        photo: 'https://tse1.mm.bing.net/th?id=OIP.-pdvSIxZBzzYOe6ocao0CgHaE8&pid=Api&P=0&h=180',
        detail: 'Michael oversees pharmacy operations and ensures compliance with regulations. He maintains high standards of care in the pharmacy.',
      },
      {
        id: 4,
        name: 'Emily Davis',
        specialization: 'Compounding Pharmacist',
        photo: 'https://tse3.mm.bing.net/th?id=OIP.bET15w2-6j-13W_sTcfgnQHaFo&pid=Api&P=0&h=180',
        detail: 'Emily specializes in creating customized medication formulations. She is dedicated to meeting individual patient needs.',
      },
    ];
  
    return (
      <div >
        <h2>Our Pharmacists</h2>
        <div className="pharmacists-list">
          {pharmacistsData.map((pharmacist) => (
            <div className="pharmacist-card" key={pharmacist.id}>
              <img src={pharmacist.photo} alt={pharmacist.name} />
              <h3>{pharmacist.name}</h3>
              <p><strong>Specialization:</strong> {pharmacist.specialization}</p>
              <p>{pharmacist.detail}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

const Medicines = () => {
  const medicinesData = [
    {
      id: 1,
      name: 'Paracetamol',
      type: 'Tablet',
      photo: 'https://tse1.mm.bing.net/th?id=OIP.S2L6tQJGUTliov0neHQNwQHaHa&pid=Api&P=0&h=180',
      detail: 'Paracetamol is commonly used to treat pain and fever. It is safe for most people when taken as directed.',
    },
    {
      id: 2,
      name: 'Ibuprofen',
      type: 'Tablet',
      photo: 'https://tse3.mm.bing.net/th?id=OIP.swqIZnTUdf7Iqs9zJ0LBwAHaHa&pid=Api&P=0&h=180',
      detail: 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that reduces inflammation and alleviates pain.',
    },
    {
      id: 3,
      name: 'Ginseng Tonic',
      type: 'Tonic',
      photo: 'https://tse2.mm.bing.net/th?id=OIP.12-h3Eno5ARnBgxCOMnqVQHaHa&pid=Api&P=0&h=180',
      detail: 'Ginseng tonic is believed to enhance energy and reduce stress. It is often used to improve overall well-being.',
    },
    {
      id: 4,
      name: 'Multivitamin Tonic',
      type: 'Tonic',
      photo: 'https://tse3.mm.bing.net/th?id=OIP.C9l5ay9YUwVVLOGjOGV6xQHaHa&pid=Api&P=0&h=180',
      detail: 'A multivitamin tonic provides essential vitamins and minerals. It supports overall health and wellness.',
    },
  ];

  return (
    <div>
      <h2>Medicines</h2>
      <div className="medicines-list">
        {medicinesData.map((medicine) => (
          <div className="medicine-card" key={medicine.id}>
            <img src={medicine.photo} alt={medicine.name} />
            <h3>{medicine.name}</h3>
            <p><strong>Type:</strong> {medicine.type}</p>
            <p>{medicine.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const orderMedicinesData = [
  {
    id: 1,
    name: 'Paracetamol',
    photo: 'https://tse1.mm.bing.net/th?id=OIP.S2L6tQJGUTliov0neHQNwQHaHa&pid=Api&P=0&h=180', // Replace with actual image URL
    price: 5.0,
  },
  {
    id: 2,
    name: 'Ibuprofen',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.swqIZnTUdf7Iqs9zJ0LBwAHaHa&pid=Api&P=0&h=180', // Replace with actual image URL
    price: 4.5,
  },
  {
    id: 3,
    name: 'Ginseng Tonic',
    photo: 'https://tse2.mm.bing.net/th?id=OIP.12-h3Eno5ARnBgxCOMnqVQHaHa&pid=Api&P=0&h=180', // Replace with actual image URL
    price: 10.0,
  },
  {
    id: 4,
    name: 'Multivitamin Tonic',
    photo: 'https://tse3.mm.bing.net/th?id=OIP.C9l5ay9YUwVVLOGjOGV6xQHaHa&pid=Api&P=0&h=180', // Replace with actual image URL
    price: 8.0,
  },
];

const Order = () => {
  const [orders, setOrders] = useState({});

  const handleQuantityChange = (id, quantity) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [id]: quantity,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted: ' + JSON.stringify(orders));
  };

  return (
    <div>
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="order-list">
          {orderMedicinesData.map((medicine) => (
            <div className="order-item" key={medicine.id}>
              <img src={medicine.photo} alt={medicine.name} />
              <h3>{medicine.name}</h3>
              <p>Price: ${medicine.price}</p>
              <input
                type="number"
                min="0"
                placeholder="Quantity"
                onChange={(e) => handleQuantityChange(medicine.id, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Home;
