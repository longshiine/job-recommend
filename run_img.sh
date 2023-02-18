docker build -t seer .
docker run --rm -t -p 3000:3000\
  seer\
  npm run $1