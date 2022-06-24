export default function () {
  return {
    data: {
      programName: "",
      branchCode: "",
      tellerID: "",
      statusTrx: "",
      startDate: "",
      endDate: "",
    },
    dataTable: [],
    dataDetail: {},
    statusAktif: ["AKTIF", "MATURE"], //"NOT USED"
    statusClosed: ["CLOSED"], // "NEW TODAY", "RESTRICTED",
    isBack: false,
  };
}
