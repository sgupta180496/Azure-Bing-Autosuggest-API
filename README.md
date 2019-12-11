# Azure Bing Autosuggest
A live API, which can accept a POST request and runs the submitted content through the Azure Bing Autosuggest API before sending back the response.

## Post: /suggestions 
```javascript
localhost:8080/suggestions
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
localhost:8080/suggestions
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
localhost:8080/suggestions
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
localhost:8080/login
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
localhost:8080/suggestions
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
