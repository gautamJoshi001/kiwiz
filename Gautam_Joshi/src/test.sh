# simple curl test of 2 endpoints assuming default port for Flask, adjust as needed
curl -X POST http://localhost:3000/transactions
echo
curl http://localhost:3000/report