import Bull from "bull";

// Docker config
export const connectQueue = (name: string) =>
  new Bull(name, {
    redis: { port: 6379, host: "redisss" },
  });
