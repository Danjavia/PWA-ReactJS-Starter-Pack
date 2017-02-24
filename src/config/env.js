/**
 * Set custom variables here
 **/
let GRAPHQL_ENDPOINT;

/**
 * Assign environment variables values
 * for development and production here
 **/
if (process.env.NODE_ENV === 'development') {
    GRAPHQL_ENDPOINT = 'https://my-awesome-domain-dev.com/graphql';
} else {
    GRAPHQL_ENDPOINT = 'https://my-awesome-domain-prod.com/graphql';
}

/**
 * Exported Environment Variables
 **/
export {
    GRAPHQL_ENDPOINT
};