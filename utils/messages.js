module.exports = formatMessage = (username, text) => {
    return {
        username,
        text,
        time: require('moment')().format('H:mm')
    };
};
