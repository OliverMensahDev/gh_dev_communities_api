# Contributing to the Project

## Setting up

1. Run `npm install`
2. Create .env file and replace `xxx` with your own values

```env
NODE_ENV=development
PORT=3000
MONGO_URI=xxx
```

3. Test running the server with `npm run dev` command
4. Test making request to endpoints with postman.

# About Ghana Developer Communities Backend API

This is an API for developer community listings for communities in Ghana developer ecosystem. Below are all the functionalities to be implemented at

## Communities

- List all communities in the database
  - Pagination
  - Select specific fields in result
  - Limit number of results
  - Filter by fields
- Get single community
- Create new community
- Upload a photo for community
- Update community
- Delete Community

## Events

- List all events for community
- List all events in general
  - Pagination, filtering, etc
- Get single event
- Create new event
- Upload a photo for event
- Update event
- Delete event

## Users & Authentication

- User registration
- User login
- User logout
- Get user
- Password reset (lost password)
- Update user info
- User CRUD
- Add admins at the database level manually
