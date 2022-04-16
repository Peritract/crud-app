# crud-app
Example CRUD app for experimenting with/demoing concepts

## Architecture

This app currently consists of two separate services, both managed using Docker Compose.

### API

An Express app

### DB

A PostgreSQL database

## Development

Start the various containers with

```bash
./scripts/startup.sh
```

and stop it all (including removing the database) with

```bash
./scripts/teardown.sh
```

For convenience, `./scripts/reset.sh` will run both the above commands in reverse order, along with removing `./api/node_modules`, resetting and running the app.