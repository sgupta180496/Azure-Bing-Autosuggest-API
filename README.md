# Azure Bing Autosuggest
A live API, which can accept a POST request and runs the submitted content through the Azure Bing Autosuggest API before sending back the response.

## Post: /suggestions 
```javascript
bing-autosuggest-final-project.herokuapp.com/suggestions
```
User passes the "mkt" and the "query" in the body and the API returns back the response from the Azure Bing Autosuggest API.

#### HEADERS
----------
#### Content-Type
application/json

##### BODY  raw
----------

```javascript
{
	"mkt": "en-us",
	"query": "Ch"
}
```

----------

### Post: /suggestions 
```javascript
bing-autosuggest-final-project.herokuapp.com/suggestions
```

If the user does not specify "mkt", the API automatically accepts"en-us".

#### HEADERS
----------
#### Content-Type
application/json

##### BODY  raw
----------

```javascript
{
	"query": "Ch"
}
```

----------

### Post: /suggestions 
```javascript
bing-autosuggest-final-project.herokuapp.com/suggestions
```
When the JWT security mechanism is turned on, the user cannot access the API unless he has an Authorization token in the header. Thus, the user will receive a 403 Forbidden error.

#### HEADERS
----------
#### Content-Type
application/json

##### BODY  raw
----------

```javascript
{
	"query": "Ch"
}
```

----------

### Post: /suggestions 
```javascript
bing-autosuggest-final-project.herokuapp.com/login
```
On turning on the JWT security mechanism, when user accesses the /login endpoint, he receives a token which needs to be then used in the header to access the API.

#### HEADERS
----------
#### Content-Type
application/json

##### BODY  raw
----------

```javascript
{
	"query": "Ch"
}
```

----------

### Post: /suggestions 
```javascript
bing-autosuggest-final-project.herokuapp.com/suggestions
```
While using JWT mechanism, once the user passes the token in the header using Authorization, as Bearer *securityToken*, the user can then access the API and fetch results.

#### HEADERS
----------
#### Content-Type
application/json

#### Authorization

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IlNhbG9uaSIsImVtYWlsIjoic2d1cHRhMzhAdW5jYy5lZHUifSwiaWF0IjoxNTc2MDkwMTg3fQ.haHOIp9K7tpnuqNf__jBZiqFYoYPoJqcxs3Yomh435k
##### BODY  raw
----------

```javascript
{
	"query": "Ch"
}
```


### Security:
#### Helmet:
To handle security firstly, Helmet is used. Helmet can help protect the app from some well-known web vulnerabilities by setting HTTP headers appropriately. Helmet is actually just a collection of smaller middleware functions that set security-related HTTP response headers:

- csp sets the Content-Security-Policy header to help prevent cross-site scripting attacks and other cross-site injections.
- hidePoweredBy removes the X-Powered-By header.
- hpkp Adds Public Key Pinning headers to prevent man-in-the-middle attacks with forged certificates.
- hsts sets Strict-Transport-Security header that enforces secure (HTTP over SSL/TLS) connections to the server.
- ieNoOpen sets X-Download-Options for IE8+.
- noCache sets Cache-Control and Pragma headers to disable client-side caching.
- noSniff sets X-Content-Type-Options to prevent browsers from MIME-sniffing a response away from the declared content-type.
- frameguard sets the X-Frame-Options header to provide clickjacking protection.
- xssFilter sets X-XSS-Protection to enable the Cross-site scripting (XSS) filter in most recent web browsers.

#### JWT:
Also, to ensure authorization of users, JWT mechanism is also implemented. Since there is no database for this api, a mock user has been created as an authorized user. When an unauthorised user tries to access the API, they receive a 403 Forbidden error. On calling /login endpoint, the user receives a securityToken corresponding to the allowed mock user which they can then insert in the header and access the API. 
