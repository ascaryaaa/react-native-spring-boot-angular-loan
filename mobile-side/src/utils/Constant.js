<<<<<<< HEAD
const CONNECTION = "192.168.193.54";
=======
const CONNECTION = "192.168.209.162";
>>>>>>> 4757c36ab5955c950876994bb746697f7e11ad6c

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
