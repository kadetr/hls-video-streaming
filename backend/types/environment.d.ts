import { IVideoDoc } from "./custom";

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_PATH: string;
    }
  }
}
