import { createServer } from "./create-server";

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const server = await createServer();
  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

void bootstrap();
