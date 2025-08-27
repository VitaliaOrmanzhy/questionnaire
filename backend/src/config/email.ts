import "dotenv/config";

interface Config {
    host: string;
    port: number;
    secure: boolean,
    user: string,
    pass: string
}

const config: Config = {
    host: process.env.EMAIL_HOST!,
    port: parseInt(process.env.EMAIL_PORT as string, 10),
    secure: process.env.EMAIL_SECURE === 'true',
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASSWORD!
}

export default config;