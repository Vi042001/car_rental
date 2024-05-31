import React, { useState } from 'react';
import Terms from './Page/Terms'; // Assuming the Terms component is in the same directory

const ParentComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (isChecked) => {
    setIsChecked(isChecked);
  };

  return (
    <div>
      <Terms handleCheckboxChange={handleCheckboxChange} />
      {/* Other components or content */}
    </div>
  );
};

export default ParentComponent;
