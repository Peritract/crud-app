docker compose down --volumes --remove-orphans;
rm -rf ./api/node_modules
rm -rf ./client/node_modules
docker compose up;