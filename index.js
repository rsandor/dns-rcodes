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
  'NameError': 3,
  'NotImplemented': 4,
  'Refused': 5,

  // Defined in RFC2136 (http://tools.ietf.org/html/rfc2136)
  'YXDomain': 6,
  'YXRRSet': 7,
  'NXRRSet': 8,
  'NotAuth': 9,
  'NotZone': 10
};
