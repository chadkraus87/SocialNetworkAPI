# SocialNetworkAPI
A NoSQL Social Network Application

![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)

## Description

This is a backend API for a social network platform that allows users to share their thoughts, reactions, and connect with other users. The application follows the Model-View-Controller (MVC) architecture and uses Node.js, Express.js, MongoDB, and Mongoose for data management.

[GitHub Repository](https://github.com/chadkraus87/SocialNetworkAPI)

![Front End Landing Page](/public/images/snapiroutes.png)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To run this API locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project's root directory in your terminal.
3. Run the following command to install the required dependencies: `npm install`
4. Set up your MongoDB database and configure the connection settings in the `config/connection.js` file.
5. Run the command `npm start` to start the application.
6. The API will now be available at `http://localhost:3001`.

## Usage
This API provides the following endpoints:

- **GET `/api/users`**: Get all users.
- **GET `/api/users/:userId`**: Get a single user by their ID.
- **POST `/api/users`**: Create a new user.
- **PUT `/api/users/:userId`**: Update an existing user by their ID.
- **DELETE `/api/users/:userId`**: Delete a user by their ID.

- **POST `/api/thoughts`**: Create a new thought.
- **GET `/api/thoughts/:thoughtId`**: Get a single thought by its ID.
- **PUT `/api/thoughts/:thoughtId`**: Update an existing thought by its ID.
- **DELETE `/api/thoughts/:thoughtId`**: Delete a thought by its ID.
- **GET `/api/thoughts`**: Get all thoughts.

- **POST `/api/thoughts/:thoughtId/reactions`**: Create a new reaction to a thought.
- **DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`**: Delete a reaction from a thought.

Make sure to use a tool like Insomnia or Postman to test the API endpoints. Refer to the API documentation for more details on the request and response formats for each endpoint.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing
Contributions to this project are welcome. If you would like to contribute, please fork the repository and submit a pull request.

## Tests
N/A

## Questions
If you have any questions or comments about this project, please contact me at chadkraus87@gmail.com. You can also find more information and other projects on my GitHub https://github.com/chadkraus87. If you encounter any issues or bugs while using this tool, please report them to the project GitHub repository so that they can be addressed. Additionally, contributions to this project are always welcome. If you would like to contribute, please review the project contribution guidelines and submit a pull request. Thank you for your support!
