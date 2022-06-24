const INITIAL_STATE = {
  programName: "",
  tellerID: "",
  statusTrx: "",
  startDate: "",
  endDate: "",
};

const DEFAULT_REPORT = {
  nomorseqapp: "",
  nomorseqbrinets: "",
  nomorseqbrinetskoreksi: "",
  nomorseqbillpay: "",
  programcode: "",
  nomorreqinquiry: "",
  jenisreqinquiry: "",
  trancode: "",
  ifcode: "",
  dc: "",
  remark: "",
  norekdebit: "",
  jenisrekdebit: "",
  namarekdebit: "",
  norekdebit2: "",
  jenisrekdebit2: "",
  namarekdebit2: "",
  norekcredit: "",
  jenisrekcredit: "",
  namarekcredit: "",
  norekpajak: "",
  jenisrekpajak: "",
  namarekpajak: "",
  whdesc: "",
  amounttotal: "",
  amountbayar: "",
  amountpajak: "",
  persenpajak: "",
  tanggaltransaksi: "",
  jamtransaksi: "",
  tanggalapprove: "",
  jamapprove: "",
  tanggalsettlement: "",
  kodecabang: "",
  namacabang: "",
  merchantType: "",
  userid: "",
  useridbrinets: "",
  useridapprover: "",
  useripaddress: "",
  approvalreason: "",
  approvalcomment: "",
  approvaltype: "",
  matauang: "",
  amountdebet1: "",
  currencydebet1: "",
  amountkredit1: "",
  currencykredit1: "",
  amountdebet2: "",
  currencydebet2: "",
  amountkredit2: "",
  currencykredit2: "",
  ttbuydebet: "",
  brdebet: "",
  ttselldebet: "",
  ttbuykredit: "",
  brkredit: "",
  ttsellkredit: "",
  bit48: "",
  bit61: "",
  bit90: "",
  state: "",
  errmsg: "",
  localtrxdatetime: "",
  gmttrxdatetime: "",
  info1: "",
  advmrgold: "",
  advmrgnew: "",
  plafondold: "",
  noseributab: "",
  saldobutab: "",
  nobarisbutab: "",
  nocekbg: "",
  tglcekbg: "",
  nomorseqbrinetspajak: "",
  tanggalsettlementpajak: "",
  tanggaltransaksipajak: "",
  jamtransaksipajak: "",
  useridbrinetspajak: "",
  approvaltypepajak: "",
  approvalreasonpajak: "",
  statepajak: "",
  errmsgpajak: "",
  fileupload: "",
  nomorseqbrinetshold: "",
  tanggaltransaksihold: "",
  jamtransaksihold: "",
  useridbrinetshold: "",
  statehold: "",
  errmsghold: "",
  nodokumentsumber: "",
  stateLabel: "",
  currencyInquiry: "",
  jenisTransaksi: "",
  inquiryCif: "",
  namaRekInquiry: "",
  cifDataRekening: "",
  currencyDataRekening: "",
  namaDataRekening: "",
};

export const setReportData = (state, payload) => {
  state.data = {
    ...state.data,
    ...payload,
  };
};

export const resetData = (state) => {
  state.data = INITIAL_STATE;
};

export const resetTable = (state) => {
  state.dataTable = [];
};

export const setDataTable = (state, payload) => {
  state.dataTable = payload;
};

export const setDetailReport = (state, payload) => {
  state.dataDetail = payload;
};

export const updateDataDetail = (state, payload) => {
  state.dataDetail = {
    ...state.dataDetail,
    ...payload,
  };
};

export const resetDataDetail = (state) => {
  state.dataDetail = DEFAULT_REPORT;
};

export const setIsBack = (state, payload) => {
  state.isBack = payload;
};
