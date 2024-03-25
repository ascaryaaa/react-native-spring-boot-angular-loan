<<<<<<< HEAD
const CONNECTION = "192.168.209.183";
=======
const CONNECTION = "192.168.209.169";
>>>>>>> 155f5711acd004cf400f934b4422a8d160ebd078

const PORT = "8083";
const MAIN_URL = `http://${CONNECTION}:${PORT}/loan/v1/`;
const LOGIN_URL = `http://${CONNECTION}:${PORT}/rest/auth/`;

const urls = {
  getUsers: `${MAIN_URL}user/get-users`, // Use backticks and ${} correctly
  getAdmins: `${MAIN_URL}admin/get-admins`,
  getJenisPinjamans: `${MAIN_URL}jenis-pinjaman/get-jenis-pinjamans`,
  getJenisPinjamans: `${MAIN_URL}jenis-pinjaman/`,
  getPromos: `${MAIN_URL}promo/get-promos`,
  getAccounts: `${MAIN_URL}accounts/get-accounts`,
  loginAccount: `${LOGIN_URL}login-account`,
};

export default urls;
