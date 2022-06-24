export function getDataReport(state) {
  return state.data;
}

export const getDataTable = (state) => {
  return state.dataTable;
};

export const getSendRequestReport = (state, _getters, rootState) => {
  const { programName, statusTrx, startDate, endDate, tellerID } = state.data;
  return {
    programcode: programName.value,
    startdate: startDate,
    enddate: endDate,
    branchcode: rootState.activeuser.branch,
    status: statusTrx.value,
    tellerid: tellerID,
  };
};

export const getDataDetail = (state) => {
  return state.dataDetail;
};

export const getAllowedStatus = (state) => {
  return [...state.statusAktif, ...state.statusClosed];
};

export const getIsBack = (state) => {
  return state.isBack;
};
