const express = require("express");
const json = require("body-parser").json;
const app = express();
const {userRouter} = require('./usre/router.user')

const router = express.Router()
router.get("/", (req, res) => {
  res.json({name: "roueter"})
})
app.use('/api', router)
app.use(userRouter)
app.use(json());
app.use((req, res, next) => {
  if (req.method === "POST") {
    console.log(req.body);
  }
  next();
});
app.disable("x-powered-by");
const port = 8080;

app.get("/", (req, res) => {
  console.log(req.ip)
  const data = {
    name: "ali",
    age: 44
  };
  res.status(200)
  res.json(data).end();
});
app.post("/api", (req, res) => {
  const { key1, key2 } = req.body;
  res.send(`key1 : ${key1} and key2: ${key2}`);
});

const start = () => {
  app.listen(port, () => {
    console.log(`server listen on http://127.0.0.1:${port}`);
  });
};

module.exports = {
    start
}
