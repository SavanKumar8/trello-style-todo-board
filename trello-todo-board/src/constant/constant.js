const STATUS = {
  PENDING: "Pending",
  INPROGRESS: "In Progress",
  COMPLETE: "Complete",
};

const API_STATES = {
  LOADING: "loading",
  IDLE: "idle",
  SUCCESS: "success",
  ERROR: "error",
};

const BUTTON_ACTION = {
  CREATE_TODO: "Create To Do",
};
const CARD_STATUS = [STATUS.PENDING, STATUS.INPROGRESS, STATUS.COMPLETE];
export { STATUS, API_STATES, CARD_STATUS, BUTTON_ACTION };
