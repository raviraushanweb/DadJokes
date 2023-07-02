# Dad Jokes API

![version](https://img.shields.io/badge/version-1.0.0-blue)

This is an API for Dad Jokes, implemented using Node.js and TypeScript with Express and Mongoose for MongoDB integration.

## Table of Contents

- [Dad Jokes API](#dad-jokes-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Scripts](#scripts)
  - [Features](#features)
- [Endpoints Documentation](#endpoints-documentation)
  - [Get a Joke](#get-a-joke)
    - [Request](#request)
      - [Example](#example)
    - [Response](#response)
      - [Example](#example-1)
  - [Get Multiple Jokes](#get-multiple-jokes)
    - [Request](#request-1)
      - [Example](#example-2)
    - [Response](#response-1)
      - [Example](#example-3)
  - [License](#license)
  - [Author Information](#author-information)
  - [Dependencies](#dependencies)

## Installation

First, clone this repository:

```
git clone https://github.com/raviraushanweb/DadJokes.git
```

Navigate to the project directory:

```
cd DadJokes
```

Then, install the dependencies:

```
npm install
```

To start the development server, run:

```
npm run dev
```

## Scripts

The following scripts are available:

- `npm start` - Start the production server (ensure to build the project first).
- `npm run dev` - Start the development server using nodemon and ts-node.
- `npm run build` - Compile the TypeScript code into JavaScript.

## Features

- REST API for fetching dad jokes.
- Built with Node.js, Express, and TypeScript.
- MongoDB integration with Mongoose.

# Endpoints Documentation

## Get a Joke

This endpoint allows you to retrieve a random joke.

### Request

- Method: GET
- URL: `http://localhost:3010/api/v1/getajoke`

#### Example

```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'http://localhost:3010/api/v1/getajoke'
};

axios.request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

### Response

The response will be a JSON object containing the following fields:

- `author` (string): The author of the joke.
- `url` (string): The URL of the joke source.
- `joke` (string): The content of the joke.
- `date` (string): The date and time the joke was posted.
- `viewCount` (number): The number of times the joke has been viewed.

#### Example

```json
{
  "author": "kingkwassa",
  "url": "https://old.reddit.com/r/dadjokes/comments/5m7obg/global_warming_doesnt_worry_me/",
  "joke": "Global warming doesn't worry me. It's global cooling that gives me shivers.",
  "date": "2017-01-05T17:24:28.000Z",
  "viewCount": 1
}
```

Note: The values shown in the example response are for illustrative purposes and may vary in the actual response.

## Get Multiple Jokes

This endpoint allows you to retrieve multiple random jokes.

### Request

- Method: GET
- URL: `http://localhost:3010/api/v1/getmultiplejoke/{count}`

Replace `{count}` with the number of jokes you want to retrieve. For example, to get 10 jokes, use `http://localhost:3010/api/v1/getmultiplejoke/10`.

#### Example

```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'http://localhost:3010/api/v1/getmultiplejoke/10'
};

axios.request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

### Response

The response will be an array of JSON objects, each representing a joke. Each joke object will have the following fields:

- `author` (string): The author of the joke.
- `url` (string): The URL of the joke source.
- `joke` (string): The content of the joke.
- `date` (string): The date and time the joke was posted.
- `viewCount` (number): The number of times the joke has been viewed.

#### Example

```json
[
  {
    "author": "DoomRulz",
    "url": "https://old.reddit.com/r/dadjokes/comments/oanbkf/which_generation_does_forrest_gump_belong_to/",
    "joke": "Which generation does Forrest Gump belong to? Gen A.",
    "date": "2021-06-30T02:17:52.000Z",
    "viewCount": 1
  },
  {
    "author": "indiana_aithan",
    "url": "https://old.reddit.com/r/dadjokes/comments/oan8cc/i_was_teaching_my_son_how_to_drive/",
    "joke": "I was teaching my son how to drive... I was teaching my son how to drive in a church parking lot and he was going nuts having a good time when one of the sisters came out and said 'Nun of us are as excited as y'all are'",
    "date": "2021-06-30T02:12:45.000Z",
    "viewCount": 1
  },
  // More jokes...
]
```

Note: The values shown in the example response are for illustrative purposes and may vary in the actual response. The number of jokes in the array will be equal to the specified count in the request.

## License

This project is licensed under the MIT License.

## Author Information

- Ravi Raushan - [raviraushanweb@gmail.com](mailto:raviraushanweb@gmail.com)

For more information, please refer to the [homepage](https://github.com/raviraushanweb/DadJokes#readme).

Found a bug? Report it on [GitHub](https://github.com/raviraushanweb/DadJokes/issues) and help improve the application.

## Dependencies

Here are the main dependencies for the project:

**Production**

- [axios](https://www.npmjs.com/package/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)

**Development**

- [@types/axios](https://www.npmjs.com/package/@types/axios)
- [@types/dotenv](https://www.npmjs.com/package/@types/dotenv)
- [@types/mongoose](https://www.npmjs.com/package/@types/mongoose)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [eslint](https://www.npmjs.com/package/eslint)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [typescript](https://www.npmjs.com/package/typescript)
