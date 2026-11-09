const app = {
  init: () => true,
  processContent: (content) => {
    if (!content.type) throw new Error('Invalid content type');
    return { success: true, timestamp: Date.now() };
  }
};
module.exports = app;