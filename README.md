# BackEnd for website
1. Create A folder

1. Go to this folder through command line prompt
1. Write on cmd ` npm init ` then write setting
1. Write on cmd ` npm install typescript@latest -g `
1. Write on cmd ` tsc --init ` to initialize `tsconfig.json` file then choose the setting you want.
1. Write on cmd ` npm install --save-dev typescript`
1. Create a folder src and create `server.ts` file in it
1. Write on cmd  Write on cmd ` npm install --save-dev express @types/express`
1. To use typescript put a script in `package.json` which is `"build:"tsc"`
1. Write on cmd  Write on cmd ` npm install --save-dev body-parser @types/body-parser`
1. Write on cmd  Write on cmd ` npm install --save-dev nodemone`
1. In `package.json` file write a script `"start": "nodemon ./src/server.ts"`
## Database Connection


    `CREATE USER username WITH PASSWORD 'password123';
    CREATE DATABASE databasedname;
    \c shopping
    GRANT ALL PRIVILEGES ON DATABASE databasedname TO shopping_user;`
