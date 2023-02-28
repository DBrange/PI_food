const { sequelize } = require("./db");
const app = require("./app");

const PORT = 3001;

sequelize.sync({force: true}).then( async () => {
  app.listen(PORT, async () => {
    console.log("listening on port", PORT);
  });
})
.catch(err => err.message)