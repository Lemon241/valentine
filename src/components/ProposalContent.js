import React from 'react';
import { Header } from './Header';
import { ButtonsContainer } from './ButtonsContainer';
import { SuccessMessage } from './SuccessMessage';

export const ProposalContent = ({
    showMessage,
    yesSize,
    noPosition,
    noClicks,
    onYesClick,
    onNoClick
}) => {
    if (showMessage) {
        return <SuccessMessage noClicks={noClicks} />;
    }

    return (
        <>
            <Header />
            <ButtonsContainer
                yesSize={yesSize}
                noPosition={noPosition}
                noClicks={noClicks}
                onYesClick={onYesClick}
                onNoClick={onNoClick}
            />
        </>
    );
};
