# Timestamp Microservice | Farahmand Moslemi

## Part 1 of Free Code Camp Backend Challenges

### User stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.
### Example usage:
`https://farahmand-timestamp-microservice.glitch.me/August%2007,%202017`

`https://farahmand-timestamp-microservice.glitch.me/1502141022176`

`https://farahmand-timestamp-microservice.glitch.me/2017-08-17`

`https://farahmand-timestamp-microservice.glitch.me/Hello`

### Example output:
`{"unix":1502141022176,"natural":"August 7, 2017"}`

`{"unix":null,"natural":null}`