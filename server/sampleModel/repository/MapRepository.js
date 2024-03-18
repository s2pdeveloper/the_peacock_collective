const axios = require("axios");

exports.getCurrentLocation = async latlng => {
    const options = {
        url: `${process.env.GETLOCATION}${latlng.latitude},${latlng.longitude}&key=${process.env.GOOGLEMAPKEY}`,
        method: "GET",
    };
    const response = await axios(options);
    const responseOK = response && (response.status >= 200 || response.status < 300);
    if (responseOK) {
        return response.data;
    }
    customErrorLogger(response.data);
};