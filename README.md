# Bookshelf(Andrew) Local Proxy Server

> Proxy server running all four modules.
> Module instances contained in modules folder.
> Html serves 4 bundles from cloudfront rather than local files honsted on computer.

## Related Projects

  >hrr37 hermes-4 group repos

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

localhost:3005/books/:id endpoint shows page with all modules (id ranges from 1-100)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory of all modules included in modules folder
  > npm install && npm run seed && npm run start:dev

From within the root directory of proxy server:
  > npm install && npm run start:proxy


