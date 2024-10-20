# Backend
1) Inside a directory called SSApp, create a directory called server
   ```shell
   mkdir server
   cd server
   ```
2) Inside the directory, initialize node
   ```shell
   npm init
   ```
   Set entry point to "server.js" in the options that appear upon running the command.

3) Install dependencies
   ```shell
   npm i bcryptjs cloudinary cookie-parser cors dotenv ejs express ioredis jsonwebtoken mongoose node-cron nodemailer ts-node-dev typescript
   ```
   Also install the corresponding types for typescript
   ```shell
    npm i @types/ejs @types/nodemailer @types/bcryptjs @types/cookie-parser @types/cors @types/express @types/jsonwebtoken @types/node @types/node-cron
   ```

3) Make connections for your backend database and add the link to your .env file. Make similar adjustments for cloudinary, redis, and gmail as a host for sending emails
   
   ```shell
   PORT = 8000
   ORIGIN =['http://localhost:3000/']
   DB_URL = 'mongodb://localhost:27017/lms'
   NODE_ENV = development
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   REDIS_URL = 
   ACTIVATION_SECRET = 
       ```

- Make your host connection set to gmail personal account for "development" (to be changed when in "production")
   ```shell
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 465
   SMTP_SERVICE = gmail
   SMTP_MAIL = 
   SMTP_PASSWORD = 
   ```

- Generate access token values using a random character generator with Capital and Small letters, Numbers, and Symbols characteristics which is between 20 and 40 characters long. Upon generation, paste the generated random characters in the access and refresh token values:

   ```shell
   ACCESS_TOKEN = '' 
   REFRESH_TOKEN = ''
   ACCESS_TOKEN_EXPIRE = 5
   REFRESH_TOKEN_EXPIRE = 3
   ```


4) Define the following models for your backend
   - CourseModel
   - LayoutModel
   - notificationModel
   - orderModel
   - userModel

5) Start the development server (port 8000)
   ```shell
    npm run dev
   ```
6) Create API endpoints  for making requests:
   ### AUTH
   - register user (POST) - "http://localhost:8000/api/v1/registration"
   ```shell
   {
    "name": "",
    "email": "",
    "password": ""
   }
   ```
- activate user (POST) - "http://localhost:8000/api/v1/activate-user"
   ```shell
   {
       "activation_code": "",
       "activation_token": ""
   }
   ```

- login user (POST) - "http://localhost:8000/api/v1/login"
     ```shell
      {
       "email": "",
       "password": ""
      }
     ```

- logout user (GET) - "http://localhost:8000/api/v1/logout"
- refresh token (GET) - "http://localhost:8000/api/v1/refresh"
- social auth (POST) - "http://localhost:8000/api/v1/socialAuth"
      ```shell
      {
      
      }
      ```



   
# Unit Tests for backend API endpoints
![Screenshot (248)](https://github.com/KNyathi/DataParser/assets/124944851/1116bb16-2ec5-4859-9ac1-d3ad4032782a)

### the code for tests is found in myapp/tests.py

 
