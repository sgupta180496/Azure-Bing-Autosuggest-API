# Azure Bing Autosuggest
A live API, which can accept a POST request and runs the submitted content through the Azure Bing Autosuggest API before sending back the response.

### API: bingautosuggest.tk:8080/suggestions

## Post: /suggestions 
```javascript
bingautosuggest.tk:8080/suggestions
```

#### Query Parameters

```javascript
{
	"mkt": "en-us",
	"query": "Ch"
}
```

#### Content-Type
application/json

##### BODY  raw
```javascript
{
	"mkt": "en-us",
	"query": "Ch"
}
```

### Response:
```javascript
{
    "_type": "Suggestions",
    "queryContext": {
        "originalQuery": "Ch"
    },
    "suggestionGroups": [
        {
            "name": "Web",
            "searchSuggestions": [
                {
                    "url": "https://www.bing.com/search?q=chrome&FORM=USBAPI",
                    "displayText": "chrome",
                    "query": "chrome",
                    "searchKind": "WebSearch"
                },
                {
                    "url": "https://www.bing.com/search?q=chime&FORM=USBAPI",
                    "displayText": "chime",
                    "query": "chime",
                    "searchKind": "WebSearch"
                },
                {
                    "url": "https://www.bing.com/search?q=chase&FORM=USBAPI",
                    "displayText": "chase",
                    "query": "chase",
                    "searchKind": "WebSearch"
                },
                {
                    "url": "https://www.bing.com/search?q=chipotle&FORM=USBAPI",
                    "displayText": "chipotle",
                    "query": "chipotle",
                    "searchKind": "WebSearch"
                },
                {
                    "url": "https://www.bing.com/search?q=chegg&FORM=USBAPI",
                    "displayText": "chegg",
                    "query": "chegg",
                    "searchKind": "WebSearch"
                },
                {
                    "url": "https://www.bing.com/search?q=cheap+flights&FORM=USBAPI",
                    "displayText": "cheap flights",
                    "query": "cheap flights",
                    "searchKind": "WebSearch"
                },
                {
                    "url": "https://www.bing.com/search?q=chick-fil-a&FORM=USBAPI",
                    "displayText": "chick-fil-a",
                    "query": "chick-fil-a",
                    "searchKind": "WebSearch"
                },
                {
                    "url": "https://www.bing.com/search?q=chewy&FORM=USBAPI",
                    "displayText": "chewy",
                    "query": "chewy",
                    "searchKind": "WebSearch"
                }
            ]
        }
    ]
}

```

----------

### Post: /suggestions 
```javascript
bingautosuggest.tk:8080/suggestions
```
If the user does not specify "mkt", the API automatically accepts"en-us".

#### Content-Type
application/json

##### BODY  raw

```javascript
{
	"query": "Ch"
}
```

----------

### Post: /suggestions 
```javascript
bingautosuggest.tk:8080/suggestions
```
When the JWT security mechanism is turned on, the user cannot access the API unless he has an Authorization token in the header. Thus, the user will receive a 403 Forbidden error.

#### Content-Type
application/json

##### BODY  raw

```javascript
{
	"query": "Ch"
}
```

### Response:
```javascript
Forbidden
```

----------

### Post: /login
```javascript
bingautosuggest.tk:8080/login
```
On turning on the JWT security mechanism, when user accesses the /login endpoint, he receives a token which needs to be then used in the header to access the API.

#### Content-Type
application/json

##### BODY  raw
```javascript
{
	"query": "Ch"
}
```

### Response:
```javascript
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IlNhbG9uaSIsImVtYWlsIjoic2d1cHRhMzhAdW5jYy5lZHUifSwiaWF0IjoxNTc2MTAyNzI2fQ.6S7-fEpEe4rxu_M57f9o4b64knv5mO9swMossTNil8U"
}
```

----------

### Post: /suggestions 
```javascript
bingautosuggest.tk:8080/suggestions
```
While using JWT mechanism, once the user passes the token in the header using Authorization, as Bearer *securityToken*, the user can then access the API and fetch results.

#### HEADERS
##### Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6IlNhbG9uaSIsImVtYWlsIjoic2d1cHRhMzhAdW5jYy5lZHUifSwiaWF0IjoxNTc2MDkwMTg3fQ.haHOIp9K7tpnuqNf__jBZiqFYoYPoJqcxs3Yomh435k

#### Content-Type
application/json

##### BODY  raw
```javascript
{
	"query": "Ch"
}
```

### Postman Documentation: 
https://documenter.getpostman.com/view/8810065/SWE85HTa

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

## References:

- https://docs.microsoft.com/sl-si/azure/cognitive-services/bing-autosuggest/quickstarts/nodejs
- https://expressjs.com/en/advanced/best-practice-security.html
- https://www.youtube.com/watch?v=7nafaH9SddU
