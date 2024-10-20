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
   #### AUTH ROUTES
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
     
   #### COURSE ROUTES
   - create course (POST) - "http://localhost:8000/api/v1/create-course"
   ```shell
      {
        "name": "",
        "description": "",
        "price": ,
        "estimatedPrice": ,
        "tags": "",
        "level": "",
        "demoUrl": "",
        "benefits": [
          { "title": "" },
        ],
        "prerequisites": [
          { "title": "" },
        ],
        "courseData": [
          {
            "title": "",
            "description": "",
            "videoUrl": "",
            "videoSection": "",
            "videoLength": ,
            "links": [
              {
                "title": "",
                "url": ""
              }
            ]
          }
        ]
      }

   ```

   - edit course (PUT) - "http://localhost:8000/api/v1/edit-course/:id"
   ```shell
      {
         "name": ""
      }
   ```

   - get course (GET) - "http://localhost:8000/api/v1/get-course/:id"
  
   - get all courses (GET) - "http://localhost:8000/api/v1/get-courses"
  
   - get course by user (GET) - "http://localhost:8000/api/v1/get-course-content/:id"
  
   - add question (PUT) - "http://localhost:8000/api/v1/add-question"
     ```shell
      {
          "question":"",
          "courseId": "",
          "contentId": ""
          
      }
     ```

   - add answer (PUT) - "http://localhost:8000/api/v1/add-answer"
   ```shell
      {
          "answer": "",
          "courseId": "",
          "contentId": "",
          "questionId": ""
          
      }
   ```

   - add review (PUT) - "http://localhost:8000/api/v1/add-review/:id"
   ```shell
   {
    "review": "",
    "rating": 
   }
   ```

   - add reply (PUT) - "http://localhost:8000/api/v1/add-reply"
   ```shell
      {
          "comment": "",
          "courseId": "",
          "reviewId": ""
      }
   ```

   - get all courses (admin-only) (GET) - "http://localhost:8000/api/v1/get-courses"
  
   - delete course (admin-only) (DELETE) - "http://localhost:8000/api/v1/delete-course/:id"
  
   #### ORDER ROUTES
   - create order (POST) - "http://localhost:8000/api/v1/create-order"
   ```shell
      {
          "courseId": ""
      }
   ```

   - getall orders (admin-only) (GET) - "http://localhost:8000/api/v1/get-orders"
  
   #### NOTIFICATION ROUTES
   - get notifications (GET) - "http://localhost:8000/api/v1/get-all-notifications"
  
   - update notification (PUT) - "http://localhost:8000/api/v1/update-notification/:id"


   #### ANALYTICS ROUTES
   - get user analytics (GET) - "http://localhost:8000/api/v1/get-users-analytics"
  
   - get course analytics (GET) - "http://localhost:8000/api/v1/get-courses-analytics"
  
   - get order analytics (GET) - "http://localhost:8000/api/v1/get-orders-analytics"
  
   #### LAYOUT ROUTES
   - create layout (POST) - "http://localhost:8000/api/v1/create-layout"
   ```shell
      {
          "type": "Categorie",
          "categories": [
              {"title": ""
              }, 
          ]
      }
   ```

   - edit layout (PUT) - "http://localhost:8000/api/v1/edit-layout"
   ```shell
      {
          "type": "Categories",
          "categories": [
              {"title": ""
              }, 
          ]
      }
   ```

   - get layout (GET) - "http://localhost:8000/api/v1/get-layout"
   ```shell
      {
          "type": "Categories"
      }
   ```

   #### USER ROUTES
   - user info (GET) - "http://localhost:8000/api/v1/me"
  
   - update user info (PUT) - "http://localhost:8000/api/v1/update-user-info"
   ```shell
      {
          "name": ""
      }
   ```

   - update user password (PUT) - "http://localhost:8000/api/v1/update-user-password"
   ```shell
      {

          "oldPassword": "",
          "newPassword": ""
      }
   ```

   - update profile picture (PUT) - "http://localhost:8000/api/v1/update-profile-picture"
   ```shell
      {
          "avatar": ""
      }
   ```

   - get all users (admin-only) (GET) - "http://localhost:8000/api/v1/get-users"

   - update user role (admin-only) (PUT) - "http://localhost:8000/api/v1/update-user"
   ```shell
      {
          "id": "",
          "role" : ""
      }
   ```

   - delete user (admin-only) (DELETE) - "http://localhost:8000/api/v1/delete-user/:id"
  


 
