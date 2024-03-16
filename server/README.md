### Node Project Set up ###
1. Create node project using following command
==> ```npm init @eslint/config```
2. install package for eslint with prettier [note:- use extensions ***lintel***]
==> ```npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev```
    create .prettierignore and .prettierrc file add code a/c require
3. install husky for to run something before git pre-commit to restrict code push to repo
==> ```npx install husky-init && npm install```
    also we can set pre-commit run command using following command
    ```npx husky set .husky/pre-commit "npm run lint"```
    ```npx husky add .husky/pre-commit "npm run lint"```
4. install helmet for header content-security
==> ```npm install helmet```
