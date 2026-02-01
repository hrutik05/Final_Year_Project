export function logInfo(message, meta = {}) {
  console.log('[INFO]', message, JSON.stringify(meta));
}

export function logError(err, meta = {}) {
  console.error('[ERROR]', err.message || err, JSON.stringify(meta));
  if (err.stack) console.error(err.stack);
}
