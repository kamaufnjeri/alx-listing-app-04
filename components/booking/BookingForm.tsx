import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      console.log(response.data.data)

      if (response.status === 200) {
        alert("Booking confirmed!");

      } else {
        setError("Failed to submit booking.");
      }
    } catch (error) {
      console.log('error', error)
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border p-2 w-full rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="border p-2 w-full rounded" required />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full rounded" required />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border p-2 w-full rounded" required />
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Payment Details</h2>
        <div>
          <label className="block text-sm font-medium">Card Number</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="border p-2 w-full rounded" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Expiration Date</label>
            <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} className="border p-2 w-full rounded" placeholder="MM/YY" required />
          </div>
          <div>
            <label className="block text-sm font-medium">CVV</label>
            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} className="border p-2 w-full rounded" required />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div>
          <label className="block text-sm font-medium">Street Address</label>
          <input type="text" name="billingAddress" value={formData.billingAddress} onChange={handleChange} className="border p-2 w-full rounded" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} className="border p-2 w-full rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} className="border p-2 w-full rounded" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Zip Code</label>
            <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className="border p-2 w-full rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} className="border p-2 w-full rounded" required />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white font-bold p-2 w-full rounded mt-4 hover:bg-blue-700 disabled:opacity-50" disabled={loading}>
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </form>
    </div>
  );
}
