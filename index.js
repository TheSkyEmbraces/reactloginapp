const express = require("express");
const app = express();
const port = 3000;
const { user } = require("./models/user");

const config = require("./config/key");

//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//application/json
app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    config.mongoUrl
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   //   useCreateIndex: true,
    //   //   useFindAndModify: false,
    // }
  )
  .then(() => console.log("MonggoDB 잘 연결이 됨"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("반갑습니다!");
});

app.post("/register", (req, res) => {
  //회원 가입 할 때 필요한 정보들을 클라이언트에서 가져오면
  const userDB = new user(req.body);

  //그 정보를 데이터 베이스에 넣어준다.
  userDB.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
