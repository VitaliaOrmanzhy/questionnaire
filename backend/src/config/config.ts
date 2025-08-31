
import "dotenv/config";

const serverConfig = {
    DEVELOPMENT: process.env.NODE_ENV == "development",
    TEST: process.env.NODE_ENV === "test",
    SERVER_HOSTNAME: process.env.SERVER_HOSTNAME || "localhosts",
    SERVER_PORT: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 12345,
}

export default serverConfig;