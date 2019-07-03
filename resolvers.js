const AFTERSHIP_API_KEY = process.env.AFTERSHIP_API_KEY;
const Aftership = require('aftership')(AFTERSHIP_API_KEY);
const countries = require("i18n-iso-countries");

const resolvers = {
    Query: {
        tracking: (root, args, context, info) => {
            const tracking_number = args.tracking_number;
            const path = `/trackings/fedex/${tracking_number}`;
            return Aftership.call('GET', path).then(function (result) {
                const tracking = result.data.tracking;
                if (tracking.destination_country_iso3) {
                    tracking.destination_country = countries.getName(tracking.destination_country_iso3, "en")
                }
                if (tracking.origin_country_iso3) {
                    tracking.origin_country = countries.getName(tracking.origin_country_iso3, "en")
                }
                return result.data.tracking;
            }).catch(function (err) {
                console.log(err);
                return null;
            });
        },
    },
};

module.exports = {
    resolvers,
};