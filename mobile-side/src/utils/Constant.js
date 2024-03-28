<<<<<<< HEAD
const CONNECTION = "192.168.209.98";
=======
const CONNECTION = "192.168.193.54";
>>>>>>> 47d45cba36b0bb2e7763f50bbf1b4e799b9f3d61

const PORT = "8083";
const MAIN_URL = `http://${CONNECTION}:${PORT}/loan/v1/`;
const LOGIN_URL = `http://${CONNECTION}:${PORT}/rest/auth/`;

const urls = {
  getUsers: `${MAIN_URL}user/get-users`,
  getAdmins: `${MAIN_URL}admin/get-admins`,
  getJenisPinjamans: `${MAIN_URL}jenis-pinjaman/get-jenis-pinjamans`,
  getPromos: `${MAIN_URL}promo/get-promos`,
  getAccounts: `${MAIN_URL}accounts/get-accounts`,
  loginAccount: `${LOGIN_URL}login-account`,
  getUserDetailByHashedId: `${MAIN_URL}account/hid/`,
  getFormListUser: `${MAIN_URL}form/get-user-form/`,
  postForm : `${MAIN_URL}form/post-form`,
  softDeleteForm: `${MAIN_URL}form/soft-delete-form/`,
  getCabang:`${MAIN_URL}cabang/get-cabangs`,
  getMonitoringDetail: `${MAIN_URL}pinjaman/get-pinjaman-form/`,
};

export default urls;