# Graduation_project 🖥️

- Node version: 17.1.0
- NPM version: 8.1.2

- Backend server start on port ```5000```
- Frontend client start on post ```3000```

## Download dependencies

```
cd frontend
npm i
cd ../backend/
npm i
```

## Start backend server

### Environment variables

First things first config your `.env` file. Example can be found in the `.env.example` file.

```
PORT=5000

MONGO_USERNAME=username
MONGO_PASSWORD=password
MONGO_HOSTNAME=exampleproject.mongodb.net
MONGO_PORT=0.0.0.0
MONGO_DB=exampledatabase

SECRET_KEY=SuperSecretKey

ADMIN_USERNAME=JohnDoe
ADMIN_EMAIL=johndoe@example.com
ADMIN_PASSWORD=SecurePassword

SITE_URL=http://example.com:3000
```

Make sure you are in the **`backend`** folder. Then run server.

```
npm run dev
```

## Start frontend client

### Environment variables

Example can be found in the `.env.example` file.

```
REACT_APP_API_URL=http://example.com:5000/
```

Make sure you are in the **`frontend`** folder. Then run server.

```
npm start
```

### Free to enjoy! 🌟
