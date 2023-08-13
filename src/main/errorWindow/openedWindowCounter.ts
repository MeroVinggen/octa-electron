const MAX_NUMBER_OF_OPENED_ERROR_WINDOW = 5;
let openedErrorWindowNUmber = 0;

export const addOpenedErrorWindow = () => {
  openedErrorWindowNUmber += 1;
};

export const subtractOpenedErrorWindow = () => {
  openedErrorWindowNUmber -= 1;
};

export const isMaxNumberOfOPenedErrorWindowReached = () => openedErrorWindowNUmber >= MAX_NUMBER_OF_OPENED_ERROR_WINDOW;
