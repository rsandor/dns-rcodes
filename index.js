/**
 * DNS Rcode name map.
 * @author Ryan Sandor Richards
 * @module dns-rcodes
 */
module.exports = {
  // Defined in RFC1035 (http://tools.ietf.org/html/rfc1035)
  'NoError': 0,
  'FormatError': 1,
  'ServerFailure': 2,
  'NonExistentDomain': 3,
  'NotImplemented': 4,
  'Refused': 5
};
