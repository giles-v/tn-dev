exports.slugify = (str) => {
  const cleaned = str.replace(/([^a-zA-Z0-9 ]+)/g, '-');
  const slashed = cleaned.replace(/[\-\s]+/g, '-');
  return slashed.toLowerCase();
}