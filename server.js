const http = require("http");
const port = 3001;
const host = "127.0.0.1";

const server = http.createServer((request, response) => {
  const { method, url } = request;

  switch (method) {
    case `GET`:
      response.end("Way to GET!");
    case `POST`:
      response.end("POST was your request method!");
    default:
      response.end(
        "This isn't your grandma's Pokemon API - and you didn't use a GET or a POST request"
      );
  }
});

server.listen(port, host, () => {
  console.log(`Server is listening at ${port} on ${host}!`);
});
