import { UPDATE_STEP } from 'constants/appConstants';

export function updateStepAction(newStep) {
  return {
    type: UPDATE_STEP,
    newStep,
  };
}
