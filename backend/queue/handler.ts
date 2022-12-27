import Bull from "bull";

export const handlerCompleted = (job: Bull.Job) => {
  console.info(`Job in ${job.queue.name} completed for: ${job.data.header}`);
  job.remove();
};

export const handlerFailure = (job: Bull.Job, err: Error) => {
  if (job.attemptsMade >= 5) {
    console.info(
      `Job failures above threshold in ${job.queue.name} for: ${job.data.header}`,
      err
    );
    return null;
  }
  console.info(
    `Job in ${job.queue.name} failed for: ${job.data.header} with ${
      err.message
    }. ${5 - job.attemptsMade} attempts left`
  );
};

export const handlerStalled = (job: Bull.Job) => {
  console.info(`Job in ${job.queue.name} stalled for: ${job.data.header}`);
};

module.exports = {
  handlerCompleted,
  handlerFailure,
  handlerStalled,
};
