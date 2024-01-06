# Doodledraft Server: Real-Time Drawing Application Server

This repository is the server-side component of the [Doodledraft project](https://github.com/shubham-mishra-ca/nextjs-doodledraft), a simplified clone of [Excalidraw](https://excalidraw.com/). It's built with Node.js, Express, and Socket.IO to handle real-time communication between clients for a seamless collaborative drawing and diagramming experience.

### Technology Stack Highlights

- **Express & Socket.IO**: Sets up an Express and Socket.IO server to manage and broadcast drawing actions in real-time.
- **CORS Handling**: Configured to handle Cross-Origin Resource Sharing, differentiating between development and production environments for optimal performance and security.
- **Real-Time Communication**: Utilizes Socket.IO to facilitate real-time interaction between multiple clients, ensuring all actions are synchronized across users.
- **Event Handling**: Listens and responds to various drawing event types like 'beginPath', 'drawLine', and 'changeConfig', making the drawing experience interactive and responsive.
- **Broadcasting**: Employs broadcasting techniques to relay drawing events to all connected clients simultaneously, ensuring every participant's canvas is updated in real time.


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/doodledraft-server.git
    ```

2. Navigate to the project directory:

    ```sh
    cd doodledraft-server
    ```

3. Install the necessary packages:

    ```sh
    npm install
    ```

    Or if you're using yarn:

    ```sh
    yarn install
    ```

### Starting the Server

To start the server, run:

```sh
node index.js
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

## License

Distributed under the MIT License. See `LICENSE` for more information.


## Acknowledgements

- [Excalidraw](https://github.com/excalidraw/excalidraw) for the initial inspiration.
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Socket.io](https://socket.io/)
