import { STATUS } from "../constant/constant";

export const getStatusColor = (status) => {
  switch (status) {
    case STATUS.PENDING:
      return "#527bcf";
    case STATUS.INPROGRESS:
      return "#f8b548";
    case STATUS.COMPLETE:
      return "#4cc457";
    default:
      return "#000";
  }
};
