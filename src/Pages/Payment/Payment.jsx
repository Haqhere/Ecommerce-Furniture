import React, { useState } from 'react';
import axios from 'axios';
import './Payment.css'
import { useNavigate } from 'react-router-dom';

const Payment = ({ totalAmount, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Dummy payment processing logic
    try {
      const response = await axios.post('/api/payment', {
        cardNumber,
        expiryDate,
        cvv,
        cardholderName,
        amount: totalAmount,
      });

      if (response.data.success) {
        onPaymentSuccess();
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }

    setLoading(false);
  };

  return (<div>
    <div className="back-button">
        <button onClick={() =>{
         navigate('/Order')
        }}>
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
</button>
    </div>
    <div className="payment-container">
      <h1>Payment Details</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handlePayment}>
        

        <div className="img-container">
            <img className='gpay'src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png" alt="" />
            <img className='ppay'src="https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg" alt="" />
            <img className='ptym'src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg" alt="" />
        </div>


          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        
        
          <label>Expiry Date (MM/YY)</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />

       
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        
        
          <label>Cardholder Name</label>
          <input
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            required
          />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
    </div>
  );
};


export default Payment;
