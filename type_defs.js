const gql = require('graphql-tag');

const typeDefs = gql`
    type CheckPoint {
        created_at: String!
        slug: String!
        checkpoint_time: String!
        location: String
        city: String
        state: String
        country_name: String
        message: String
        tag: String!
        subtag: String
        subtag_message: String
        zip: String
    }

    type Tracking {
        tracking_number: String!
        slug: String!
        active: Boolean!
        created_at: String!
        updated_at: String!
        last_updated_at: String!
        destination_country: String
        origin_country: String
        shipment_package_count: Int
        shipment_pickup_date: String
        shipment_delivery_date: String
        shipment_type: String
        shipment_weight: Float
        shipment_weight_unit: String
        checkpoints: [CheckPoint!]
        tag: String
        subtag: String
        subtag_message: String
    }

    type Query {
        tracking(tracking_number: String!): Tracking
    }
`;

module.exports = {
    typeDefs,
};