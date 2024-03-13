const CONNECTION = '192.168.193.54';
const MAIN_URL = `http://${CONNECTION}:8081/loan/v1/`;

const urls = {
    getUsers: `${MAIN_URL}user/getUsers`, // Use backticks and ${} correctly
    getAdmins: `${MAIN_URL}admin/getAdmins`,
    getJenisPinjamans: `${MAIN_URL}jenis-pinjaman/getJenisPinjamans`,
    getPromos: `${MAIN_URL}promo/getPromos`,
};

export default urls;