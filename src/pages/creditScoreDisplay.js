import React from 'react';

const CreditScoreDisplay = ({ omnisScore, equifaxScore, experianScore, transunionScore }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '30px', marginBottom: '20px' }}>
        OMNIS Score: {omnisScore}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <div>
          <div style={{ fontSize: '20px' }}>Equifax</div>
          <div>{equifaxScore}</div>
        </div>
        <div>
          <div style={{ fontSize: '20px' }}>Experian</div>
          <div>{experianScore}</div>
        </div>
        <div>
          <div style={{ fontSize: '20px' }}>TransUnion</div>
          <div>{transunionScore}</div>
        </div>
      </div>
    </div>
  );
};

export default CreditScoreDisplay;