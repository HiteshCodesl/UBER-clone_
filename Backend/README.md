# User API Documentation

## Register New User
Endpoint to register a new user in the system. Creates a user account with the provided details and returns an authentication token.

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "John",    // Required, min 3 characters
    "lastname": "Doe"       // Optional, min 3 characters
  },
  "email": "john@doe.com",  // Required, min 5 characters
  "password": "secret123"   // Required, min 6 characters
}
```

### Success Response
**Code:** 201 CREATED
```json
{
  "token": "jwt.token.here",
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@doe.com"
  }
}
```

### Error Responses

#### Validation Errors
**Code:** 400 BAD REQUEST
```json
{
  "error": [
    {
      "msg": "invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Missing Required Fields
**Code:** 400 BAD REQUEST
```json
{
  "error": "this is required"
}
```

### Validation Rules
- **firstname**
  - Required
  - Minimum 3 characters
  - Validation message: "first name must be atleast 3 character long"

- **lastname**
  - Optional
  - If provided, minimum 3 characters
  - Validation message: "last name must be at 3 charcters"

- **email**
  - Required
  - Must be valid email format
  - Minimum 5 characters
  - Must be unique in the system
  - Validation message: "invalid email"

- **password**
  - Required
  - Minimum 6 characters
  - Will be hashed before storage
  - Validation message: "password must be 6 characters long"

### Security
- Password is hashed using bcrypt with 10 rounds of salting
- JWT token is generated upon successful registration
- Password is excluded from query results (select: false)

## Login User
Endpoint to authenticate a user and return a JWT token.

### Endpoint
```
POST /users/login
```

### Request Body
```json
{
  "email": "john@doe.com",  // Required, valid email
  "password": "secret123"   // Required, min 6 characters
}
```

### Success Response
**Code:** 200 OK
```json
{
  "token": "jwt.token.here"
}
```

### Error Responses

#### Validation Errors
**Code:** 400 BAD REQUEST
```json
{
  "errors": [
    {
      "msg": "invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "password incorrect",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Errors
**Code:** 400 BAD REQUEST
```json
{
  "errors": [
    {
      "msg": "Invalid email or password"
    }
  ]
}
```

### Validation Rules
- **email**
  - Required
  - Must be valid email format
  - Validation message: "invalid Email"

- **password**
  - Required
  - Minimum 6 characters
  - Validation message: "password incorrect"

## Get User Profile
Endpoint to get the authenticated user's profile.

### Endpoint
```
GET /users/profile
```

### Headers
```
Authorization: Bearer <your_token_here>
```

### Success Response
**Code:** 200 OK
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@doe.com"
}
```

### Error Responses

#### Unauthorized
**Code:** 401 UNAUTHORIZED
```json
{
  "message": "Unauthorized"
}
```

## Logout User
Endpoint to log out the authenticated user.

### Endpoint
```
GET /users/logout
```

### Headers
```
Authorization: Bearer <your_token_here>
```

### Success Response
**Code:** 200 OK
```json
{
  "message": "logged out"
}
```

### Error Responses

#### Unauthorized
**Code:** 401 UNAUTHORIZED
```json
{
  "message": "Unauthorized"
}
```