
# MorocStay Backend

Backend API for the MorocStay hotel booking application.

## Setup

1. Install dependencies:
```
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/morocstay
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

3. Start the server:
```
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires authentication)

### Hotels
- `GET /api/hotels` - Get all hotels
- `GET /api/hotels/:id` - Get hotel by ID
- `POST /api/hotels` - Create hotel (admin only)
- `PUT /api/hotels/:id` - Update hotel (admin only)
- `DELETE /api/hotels/:id` - Delete hotel (admin only)

### Rooms
- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/:id` - Get room by ID
- `POST /api/rooms` - Create room (admin only)
- `PUT /api/rooms/:id` - Update room (admin only)
- `DELETE /api/rooms/:id` - Delete room (admin only)

### Admin
- `GET /api/admin/dashboard` - Get dashboard statistics (admin only)
- `GET /api/admin/users` - Get all users (admin only)
- `POST /api/admin/users` - Create admin user (admin only)
- `GET /api/admin/bookings` - Get all bookings (admin only)
- `PATCH /api/admin/bookings/:id` - Update booking status (admin only)
