import { useState } from 'react';

export default function DynamicJobForm() {
  const [skills, setSkills] = useState(['']);

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const updateSkill = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  return (
    <div>
      <h3>Skills</h3>

      {skills.map((skill, index) => (
        <div key={index}>
          <input
            value={skill}
            onChange={(e) => updateSkill(index, e.target.value)}
          />
          <button onClick={() => removeSkill(index)}>X</button>
        </div>
      ))}

      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}