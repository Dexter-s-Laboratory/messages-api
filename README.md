# Superbox Mobile App: Messages API

This repo is the Messages API of the Superbox mobile app. This API is designed to handle messaging functionalities for the Superbox collectibles e-commerce platform. The messaging functionality connects opotential buyers with sellers facilitating efficient and effective communication and transactions.

## Table of Contents

- [Introduction](#introduction)
- [Authentication](#authentication)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Messages API provides endpoints for managing conversations and messages between users on the Superbox mobile app. Messages enables efficient and effective communication between buyers and sellers.

## Authentication

Authentication is required for accessing the Messages API. Firebase authentication is used to ensure secure and authorized access to the API endpoints.

## Getting Started

Follow the instructions below to set up and run the Messages API on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (Node Package Manager)
- PostgreSQL (v13 or later)

### Installation

1. Clone this repository to your local machine using:

   ```
   git clone https://github.com/your-username/messages-api.git
   ```

2. Navigate to the project directory:

   ```
   cd messages-api
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and provide the necessary environment variables. Here is an example:

   ```
    PGUSER=postgres_user
    PGHOST=postgres_host
    PGPASSWORD=postgres_password
    PGDATABASE=postgres_database
    PGPORT=postgres_port
    PORT=3001
    GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/serviceAccountKey
   ```

5. Start the server:

   ```
   npm start
   ```

   The server will run on the specified port (default: 3000).

## API Endpoints

- `GET /api/m/conversations`: Get a list of user conversations.
- `GET /api/m/messages/:conversation_id`: Get messages for a specific conversation.
- `POST /api/m/messages`: Create a new message.
- `PUT /api/m/conversations/:conversation_id/archive`: Archive a conversation.
- `DELETE /api/m/messages/:message_id`: Delete a message.

## Technologies Used

![Node](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

## Contributing

We welcome contributions to improve this Messages API. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Make your changes and test thoroughly.
4. Create a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License.