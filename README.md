###

### You can check out the live page [here](https://hotel-booking-nfsq.onrender.com/).

- You'll need to wait for the server to start on render.com, which typically takes a maximum of 50 seconds due to the limitations of the free plan.

![Hotel Booking](https://github.com/mehmeteminavcil/hotel-booking/blob/main/frontend/public/Booking.png?raw=true)

## Hotel Booking MERN App

- Welcome to Hotel Booking Web Application! This project is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Tailwind CSS, TypeScript, Cloudinary for image hosting, CORS, JWT authentication, server-side rendering, and end-to-end testing with Playwright.

- Hotel booking web application allows users to browse available hotels, view details about each hotel, and make bookings for their desired dates. Users can create accounts, manage their bookings, and leave reviews for hotels they have stayed at.

## Technologies Used

- Frontend: React.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript
- Backend: Node.js, TypeScript, Express.js, MongoDB
- Authentication: JSON Web Tokens (JWT)
- Database: MongoDB Atlas
- Image Hosting: Cloudinary
- CORS: Cross-Origin Resource Sharing for secure API requests
- Server-side Rendering: Improved performance and SEO
- End-to-End Testing: Playwright for automated testing
- Deployment: Render

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Features:

- User Authentication: Secure user authentication system allows users to sign up, log in, and manage their accounts.
- Hotel Listings: Browse a list of available hotels, with details such as name, location, and pricing.
- Booking Management: Users can search for available hotels for their desired dates and make bookings.
- Admin Panel: Admin users have access to an admin panel to manage hotels, bookings, and user accounts.
- Responsive Design: The application is designed to be responsive and work seamlessly across various devices and screen sizes.

## Getting started:

To run this project locally, follow these steps:

1. Clone this repository to your local machine.

```
 git clone https://github.com/mehmeteminavcil/hotel-booking.git
```

2. Install dependencies by running `npm install` in the `frontend`, `backend`, and `e2e-test` directories.

3. Set up environment variables:
4. Create a `.env` file in the `frontend` and `backend` directory.
5. Add your environment variables into `.env` file.
6. Front End `.env` file has to include this variables:

```
VITE_API_BASE_URL=http://localhost:7000
VITE_STRIPE_PUB_KEY=<YOUR_STRIPE_PUBLIC_KEY>
```

7. Backend `.env` file has to include this variables:

```
PORT=7000
MONGODB_CONNECTION_STRING=<YOUR_MONGODB_KEY>
JWT_SECRET_KEY=<YOUR_JWT_SECRET_KEY>
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
CLOUDINARY_API_SEC=<YOUR_CLOUDINARY_API_SECRET>
STRIPE_API_KEY=<YOUR_STRIPE_API_KEY>
```

8. Start the backend server by running `npm run dev` in the `backend` directory.
9. Start the frontend server by running `npm run dev` in the `frontend` directory.
10. Open your web browser and navigate to :

```
 http://localhost:5173/
```

## Contact

If you have any questions or feedback, feel free to contact me.

- [mehmeteminavcill@gmail.com](mailto:mehmeteminavcill@gmail.com)
