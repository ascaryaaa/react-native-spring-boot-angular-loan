const CONNECTION = "192.168.174.140";

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
};

export default urls;
