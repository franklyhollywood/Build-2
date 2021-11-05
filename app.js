//I have no idea what I'm doing.  I'm just taking a wild stab from previous
//labs that I have done.....

module.exports = (rawRequest) => {
  const firstParsedRequest = rawRequest.split('\r\n\r\n');
  const [method] = firstParsedRequest[0].split(' ');

  return { method };
};
