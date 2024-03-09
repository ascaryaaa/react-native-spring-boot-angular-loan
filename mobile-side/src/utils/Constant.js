const CONNECTION = '192.168.234.54';
const MAIN_URL = `http://${CONNECTION}:8081/loan/v1/`;

const urls = {
    getUsers: `${MAIN_URL}user/getUsers`, // Use backticks and ${} correctly
};

export default urls;