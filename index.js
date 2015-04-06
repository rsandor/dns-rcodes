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
  'NotZone': 10,

  // Defined in RFC6891 (http://tools.ietf.org/html/rfc6891)
  'BadVersion': 16,

  // Defined in RFC2845 (http://tools.ietf.org/html/rfc2845)
  'BadSignature': 16,
  'BadKey': 17,
  'BadTime': 18,

  // Defined in RFC2930 (http://www.iana.org/go/rfc2930)
  'BadMode': 19,
  'BadName': 20,
  'BadAlgorithm': 21,

  // Defined in RFC4635 (http://www.iana.org/go/rfc4635)
  'BadTruncation': 22
};
