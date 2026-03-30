import { useRef, useState } from "react";

function UncontrolledForm() {
  // Refs to access DOM values - no state for input values!
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const countryRef = useRef(null);
  const subscribeRef = useRef(null);
  const genderRefs = useRef({});

  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get values from DOM directly
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      country: countryRef.current.value,
      subscribe: subscribeRef.current.checked,
      gender:
        Object.keys(genderRefs.current).find(
          (key) => genderRefs.current[key]?.checked
        ) || "",
    };

    // Validate
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(formData);
    setErrors({});

    // Reset form
    e.target.reset();
  };

  return (
    <div>
      <h3>Uncontrolled Components</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name *</label>
          <input
            ref={nameRef}
            type="text"
            defaultValue=""
            placeholder="Enter your name"
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label>Email *</label>
          <input
            ref={emailRef}
            type="email"
            defaultValue=""
            placeholder="your@email.com"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label>Password *</label>
          <input
            ref={passwordRef}
            type="password"
            defaultValue=""
            placeholder="Min 6 characters"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div>
          <label>Country *</label>
          <select ref={countryRef}>
            <option value="">Select country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
          </select>
          {errors.country && <span>{errors.country}</span>}
        </div>

        <div>
          <label>Gender *</label>
          <div>
            <label>
              <input
                ref={(el) => (genderRefs.current["male"] = el)}
                type="radio"
                name="gender"
                value="male"
              />
              Male
            </label>

            <label>
              <input
                ref={(el) => (genderRefs.current["female"] = el)}
                type="radio"
                name="gender"
                value="female"
              />
              Female
            </label>

            <label>
              <input
                ref={(el) => (genderRefs.current["other"] = el)}
                type="radio"
                name="gender"
                value="other"
              />
              Other
            </label>
          </div>
          {errors.gender && <span>{errors.gender}</span>}
        </div>

        <div>
          <label>
            <input ref={subscribeRef} type="checkbox" />
            Subscribe to newsletter
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h4>Form Submitted!</h4>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default UncontrolledForm;