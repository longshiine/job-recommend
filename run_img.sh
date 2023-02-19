docker build -t job_recommend .
docker run -d --rm -t -p 3000:3000\
  job_recommend\
  npm run $1