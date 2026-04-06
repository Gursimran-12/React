import { useState } from 'react';

export default function RegistrationForm() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setSubmittedData(data);
  };

  return (
    <div>
      <h3>Registration Form</h3>

      <form onSubmit={handleSubmit}>
        <input name="fullname" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      )}
    </div>
  );
}