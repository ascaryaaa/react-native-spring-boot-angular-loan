const CONNECTION = "192.168.210.168";
const MAIN_URL = `http://${CONNECTION}:8080/loan/v1/`;

const urls = {
  getUsers: `${MAIN_URL}user/get-users`, // Use backticks and ${} correctly
  getAdmins: `${MAIN_URL}admin/get-admins`,
  getJenisPinjamans: `${MAIN_URL}jenis-pinjaman/get-jenis-pinjamans`,
  getPromos: `${MAIN_URL}promo/get-promos`,
};

export default urls;
