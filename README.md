# Multi-Step Form Application

A full-stack multi-step form application built with React and Node.js, featuring MongoDB for data storage.

## Features

- ✅ Multi-step form with progress tracking
- ✅ Form validation
- ✅ Data persistence with MongoDB
- ✅ Beautiful gradient UI design
- ✅ Responsive design
- ✅ RESTful API

## Tech Stack

**Frontend:**
- React 19.2.0
- CSS3 (Custom styling with gradients and animations)

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```
project/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── MultiStepForm.js
│   │   │   ├── Step1.js
│   │   │   ├── Step2.js
│   │   │   └── Step3.js
│   │   ├── styles.css
│   │   └── index.js
│   └── package.json
│
└── server/                # Backend Node.js server
    ├── index.js
    ├── models/
    │   └── Submission.js
    ├── routes/
    │   └── formRoutes.js
    ├── .env
    └── package.json
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn

### Clone Repository

```bash
git clone https://github.com/vanshjain137/multi-step-form.git
cd multi-step-form
```

### Backend Setup

```bash
# Navigate to server folder
cd server

# Install dependencies
npm install

# Create .env file
echo "MONGODB_URI=mongodb://127.0.0.1:27017/multistepform" > .env
echo "PORT=5001" >> .env

# Start backend server
node index.js
```

Backend will run on `http://localhost:5001`

### Frontend Setup

```bash
# Navigate to frontend folder (open new terminal)
cd client

# Install dependencies
npm install

# Start React app
npm start
```

Frontend will run on `http://localhost:3000`

## Usage

1. **Start MongoDB** (if not running):
   ```bash
   # Mac
   brew services start mongodb-community
   
   # Windows
   net start MongoDB
   
   # Linux
   sudo systemctl start mongod
   ```

2. **Start the backend server** (Terminal 1):
   ```bash
   cd server
   node index.js
   ```

3. **Start the frontend** (Terminal 2):
   ```bash
   cd client
   npm start
   ```

4. **Open browser** and go to `http://localhost:3000`

5. **Fill out the form**:
   - Step 1: Personal Details (Name, Email)
   - Step 2: Address Details (Address, City, Zip)
   - Step 3: Confirm and Submit

6. **View submissions**: Go to `http://localhost:5001/api/form`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/form` | Get all form submissions |
| POST | `/api/form` | Submit new form data |

## Environment Variables

### Backend (.env)

```env
MONGODB_URI=mongodb://127.0.0.1:27017/multistepform
PORT=5001
```

## MongoDB Atlas Setup (Optional)

To use MongoDB Atlas (cloud) instead of local MongoDB:

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `.env`:

## Troubleshooting

### Port 5000 Already in Use
If you get an error about port 5000 being in use:
- Change `PORT=5001` in backend `.env`
- Update fetch URL in `Step3.js` to `http://localhost:5001/api/form`

### MongoDB Connection Error
- Make sure MongoDB is installed and running
- Check MongoDB is running on default port 27017
- Verify connection string in `.env`

### CORS Errors
- Make sure backend is running on port 5001
- Frontend should fetch from `http://localhost:5001/api/form`
- Backend has CORS headers configured

## Future Enhancements

- [ ] Add form field validation with error messages
- [ ] Add edit functionality
- [ ] Add delete functionality
- [ ] Add search/filter for submissions
- [ ] Add user authentication
- [ ] Add file upload support
- [ ] Add email notifications

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

## Author

Vansh Jain - [GitHub Profile](https://github.com/vanshjain137)

## Acknowledgments

- React Documentation
- MongoDB Documentation
- Express.js Documentation
- MongoDB Documentation
- Express.js Documentation
