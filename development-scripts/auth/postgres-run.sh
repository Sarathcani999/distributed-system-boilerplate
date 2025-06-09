docker run -d \
  --name postgres_auth_db \
  -e POSTGRES_DB=auth \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -v $(pwd)/../../data/postgres-auth-data:/var/lib/postgresql/data \
  --restart unless-stopped \
  postgres:15.1-alpine