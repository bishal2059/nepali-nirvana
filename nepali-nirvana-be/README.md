## Setup up Server Locally:

Follow the steps, as shown in project README.md

## Configuration:

1. Make sure to create and .env file in the root with the following attributes:

```

PORT=8000
MONGO_URL= //Use MongoDB Connect URI
ACCESS_TOKEN_SECRET= //Random hex string
REFRESH_TOKEN_SECRET= //Random hex string
CLIENT_ID= //Client Id for Google OAuth
CLIENT_SECRET= //Client Secret for Google OAuth
EMAIL_VERFIY_SECRET=//Random hexString
HOST_ID=//google oAuth IF
HOST_PASS=//google oAuth Pass

```

### To start server:

```
npm run watch

```

Server is listening on: [Server](http://localhost:8000)

## Deployment:

In deployment make sure to uncomment the **FOR DEPLOYMENT** code in the app.js file in the root directory of the server.

## POSTMAN Collection:

The Postman collection can be used to: [POSTMAN](https://www.postman.com/lunar-star-564635/workspace/nepali-nirvana)
