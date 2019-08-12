# Sequlize-cli 사용법

- sequelize init
- sequelize model:generate --name User --attributes userId:string,name:string,engName:string
- sequelize db:migrate
- sequelize db:migrate:undo
- sequelize seed:generate --name userData
- sequelize db:seed:all
- sequelize db:seed:undo:all