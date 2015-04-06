# dns-rcodes

![Build Status](https://travis-ci.org/rsandor/dns-rcodes.svg?branch=master)
![Dependency Status](https://david-dm.org/rsandor/dns-rcodes.svg)
![DevDependency Status](https://david-dm.org/rsandor/dns-rcodes/dev-status.svg)

Maps easy to remember names to DNS RCODE (response code) values.

## Usage

```js
var rcodes = require('dns-rcodes');

// Get the rcode for "No Error" (0)
var noErrorCode = rcodes.NoError;

// Or get rcode for "Refused" (5)
var refusedCode = rcodes.Refused;
```

## RCODEs

Below is a list of exposed RCODEs organized by RFC.

### [RFC1035](http://tools.ietf.org/html/rfc1035)

RCODE | Name | Description
------|------|------------
`0` | `NoError` | No error condition.
`1` | `FormatError` | The name server was unable to interpret the query.
`2` | `ServerFailure` | The name server was unable to process this query due to a problem with the name server.
`3` | `NameError` | Meaningful only for responses from an authoritative name server, this code signifies that the domain name referenced in the query does not exist.
`4` | `NotImplemented` | The name server does not support the requested kind of query.
`5` | `Refused` | The name server refuses to perform the specified operation for policy reasons.  For example, a name server may not wish to provide the information to the particular requester, or a name server may not wish to perform a particular operation.

### [RFC2136](http://tools.ietf.org/html/rfc2136)

RCODE | Name | Description
------|------|------------
`6` | `YXDomain` | Some name that ought not to exist, does exist.
`7` | `YXRRSet` | Some RRset that ought not to exist, does exist.
`8` | `NXRRSet` | Some RRset that ought to exist, does not exist.
`9` | `NotAuth` |  The server is not authoritative for the zone named in the Zone Section.
`10` | `NotZone` |  A name used in the Prerequisite or Update Section is not within the zone denoted by the Zone Section.

### [RFC6891](http://tools.ietf.org/html/rfc6891)

RCODE | Name | Description
------|------|------------
`16` | `BadVersion` | Requestor provided a version option not compatible with the server.

### [RFC2845](http://tools.ietf.org/html/rfc2845)
RCODE | Name | Description
------|------|------------
`16` | `BadSignature` | TSIG Signature Failure.
`17` | `BadKey` | Key not recognized.
`18` | `BadTime` | Signature out of time window.

### [RFC2930](http://www.iana.org/go/rfc2930)
RCODE | Name | Description
------|------|------------
`19` | `BadMode` | Incorrect TKEY mode.
`20` | `BadName` | Duplicate TKEY name.
`21` | `BadAlgorithm` | Algorithm not supported.

### [RFC4635](http://www.iana.org/go/rfc4635)
RCODE | Name | Description
------|------|------------
`22` | `BadTruncation` | Bad truncation.
