import React, { useState } from 'react';
import { useNoButton } from './hooks/useNoButton';
import { useHearts } from './hooks/useHearts';
import { FloralDecorations } from './components/FloralDecorations';
import { ProposalContent } from './components/ProposalContent';
import { FallingHearts } from './components/FallingHearts';
import './styles/valentine.css';

export default function ValentineProposal() {
  const [showMessage, setShowMessage] = useState(false);
  const { noPosition, noClicks, yesSize, moveNoButton } = useNoButton();
  const { hearts, generateHearts } = useHearts();

  const handleYesClick = () => {
    setShowMessage(true);
    generateHearts();
  };

  return (
    <div className="valentine-container">
      <FloralDecorations />
      <div className="content-wrapper">
        <ProposalContent
          showMessage={showMessage}
          yesSize={yesSize}
          noPosition={noPosition}
          noClicks={noClicks}
          onYesClick={handleYesClick}
          onNoClick={moveNoButton}
        />
      </div>
      <FallingHearts hearts={hearts} />
    </div>
  );
}