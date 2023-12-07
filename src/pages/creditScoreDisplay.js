import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


const CreditScoreDisplay = () => {

  const id = useSelector((state) => state.id.id);

  useEffect(() => {
    const payrollData = async () => {
      try {

        const response = await fetch('http://localhost:8080/api/omnis/payroll_income', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: id })
        });
        const data = await response.json();
        if (data) {
          console.log(JSON.stringify(data))
        } else {
          // Handle errors or no token scenario
          console.error('No link token received');
        }
      } catch (error) {
        console.log('Error creating link token:', error);
      }
    }
    payrollData()
  }, [])
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '30px', marginBottom: '20px' }}>
        OMNIS: {65}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <div>
          <div style={{ fontSize: '20px' }}>Equifax</div>
          <div>{100}</div>
        </div>
        <div>
          <div style={{ fontSize: '20px' }}>Experian</div>
          <div>{100}</div>
        </div>
        <div>
          <div style={{ fontSize: '20px' }}>TransUnion</div>
          <div>{100}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditScoreDisplay;