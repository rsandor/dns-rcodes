# dns-rcodes

![Build Status](https://travis-ci.org/rsandor/dns-rcodes.svg?branch=master)
![Dependency Status](https://david-dm.org/rsandor/dns-rcodes.svg)
![DevDependency Status](https://david-dm.org/rsandor/dns-rcodes/dev-status.svg)

Maps easy to remember names to DNS rcode (response code) values. The DNS rcodes
exposed by the module are specified in the following RFCs:
[RFC1035](http://tools.ietf.org/html/rfc1035),
[RFC2136](http://tools.ietf.org/html/rfc2136),
[RFC2930](http://tools.ietf.org/html/rfc2930),
[RFC2845](http://www.iana.org/go/rfc2845),
[RFC4635](http://tools.ietf.org/html/rfc4635),
[RFC6672](http://tools.ietf.org/html/rfc6672),
[RFC6891](http://tools.ietf.org/html/rfc6891),
[RFC6895](http://tools.ietf.org/html/rfc6895)

## Usage

```js
var rcodes = require('dns-rcodes');

// Get the rcode for "No Error" (0)
var noErrorCode = rcodes.NoError;

// Or get rcode for "Refused" (5)
var refusedCode = rcodes.Refused;
```

## Rcodes

Below is the list of rcodes exposed by the library:

rcode | Name | Description
------|------|------------
`0` | `NoError` | No error condition.
`1` | `FormatError` | The name server was unable to interpret the query.
`2` | `ServerFailure` | The name server was unable to process this query due to a problem with the name server.
`3` | `NameError` | Meaningful only for responses from an authoritative name server, this code signifies that the domain name referenced in the query does not exist.
`4` | `NotImplemented` | The name server does not support the requested kind of query.
`5` | `Refused` | The name server refuses to perform the specified operation for policy reasons.  For example, a name server may not wish to provide the information to the particular requester, or a name server may not wish to perform a particular operation.
