const CONNECTION = "192.168.210.123";
const PORT = "8083";
const MAIN_URL = `http://${CONNECTION}:${PORT}/loan/v1/`;
const LOGIN_URL = `http://${CONNECTION}:${PORT}/rest/auth/`;

const urls = {
  getUsers: `${MAIN_URL}user/get-users`, // Use backticks and ${} correctly
  getAdmins: `${MAIN_URL}admin/get-admins`,
  getJenisPinjamans: `${MAIN_URL}jenis-pinjaman/get-jenis-pinjamans`,
  getPromos: `${MAIN_URL}promo/get-promos`,
  getAccounts: `${MAIN_URL}accounts/get-accounts`,
  loginAccount: `${LOGIN_URL}login-account`,
};

export default urls;
