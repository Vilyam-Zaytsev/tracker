const SETTINGS = {
    PORT: process.env.PORT || 3000,
    PATH: {
        USERS: '/api/users',
        COMPANIES: '/api/companies',
        WORKERS: '/api/workers',
    },
    HTTP_STATUSES: {
        OK_200: 200,
        CREATED_201: 201,
        NO_CONTENT_204: 204,
        BAD_REQUEST_400: 400,
        UNAUTHORIZED_401: 401,
        NOT_FOUND_404: 404
    },
    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017',
    DB_NAME: process.env.DB_NAME || 'tracker-dev'
};

export {SETTINGS};