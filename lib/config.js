module.exports = {
    baseUrl: process.env.BASE_URL || 'http://the-internet.herokuapp.com',
    host: process.env.HOST || 'cbt',
    browserName: process.env.BROWSER || 'firefox',
    os_api_name: process.env.PLATFORM || 'Win7-C2',
    browser_api_name: process.env.BROWSER_VERSION || 'FF27',
    username: process.env.CBT_USERNAME,
    authkey: process.env.CBT_ACCESS_KEY
};
