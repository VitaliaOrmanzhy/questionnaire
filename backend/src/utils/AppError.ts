import { threadId } from "worker_threads";

class AppError extends Error {
    messageCode: string;
    status: number;

  constructor(messageCode: string, status: number) {
    super(messageCode);
    this.messageCode = messageCode;
    this.status = status;
  }
}

export default AppError;