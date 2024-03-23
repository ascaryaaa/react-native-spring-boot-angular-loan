const API_URL = "http://localhost:8083/loan/v1/"
const API_LOGIN = "http://localhost:8083/rest/auth/"

export const listPengajuanPinjaman = API_URL + 'form/get-form';
export const detailPengajuanPinjaman = API_URL + 'form/';
export const listMonitoringPinjaman = API_URL + 'pinjaman/get-pinjamans';
export const detailMonitoringPinjaman = API_URL + 'pinjaman/';
export const createPinjamanUrl = API_URL + 'pinjaman/post-pinjaman';
export const createPengajuanPinjamanUrl = API_URL + 'form/post-form';
export const detailAdmin = API_URL + 'admin/';
export const loginAdmin = API_LOGIN + 'login-admin';