module.exports = {
    format_time: (rawDate) => {
        return rawDate.toLocaleDateString();
    },
    json: (obj) => {
        return JSON.stringify(obj);
    },
};