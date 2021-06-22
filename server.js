const http = require("http");
const port = 3001;
const host = "127.0.0.1";

const server = http.createServer((request, response) => {
  console.log(request.method);
  console.log(request.url);

  response.end("This isn't your grandma's Pokemon API");
});

server.listen(port, host, () => {
  console.log(`Server is listening at ${port} on ${host}!`);
});
