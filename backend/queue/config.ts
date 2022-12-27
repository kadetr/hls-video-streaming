import Bull from "bull";

// Docker setup
export const connectQueue = (name: string) =>
  new Bull(name, {
    redis: { port: 6379, host: "redisss" },
  });

//Local Setup
// export const connectQueue = (name: string) =>
//   new Bull(name, {
//     redis: { port: 6379, host: "127.0.0.1" },
//   });
