const handlerCompleted = (job) => {
  console.info(`Job in ${job.queue.name} completed for: ${job.data.header}`);
  job.remove();
};

const handlerFailure = (job, err) => {
  if (job.attemptsMade >= job.opts.attempts) {
    console.info(
      `Job failures above threshold in ${job.queue.name} for: ${job.data.header}`,
      err
    );
    return null;
  }
  console.info(
    `Job in ${job.queue.name} failed for: ${job.data.header} with ${
      err.message
    }. ${job.opts.attempts - job.attemptsMade} attempts left`
  );
};

const handlerStalled = (job) => {
  console.info(`Job in ${job.queue.name} stalled for: ${job.data.header}`);
};

module.exports = {
  handlerCompleted,
  handlerFailure,
  handlerStalled,
};
