import express from "express";

const app = express();

app.set("view engine", "pug");
// templete 경로설정
app.set("views", __dirname + "/views");

// public 은 무슨의미인지 모르겠지만 파일 공유를 위한 경로 설정
app.use("/public", express.static(__dirname + "/public")) 
//home.pug 를 rendering 해주는 route handler 를 만듬
app.get("/", (req, res) => {res.render("home")})

const handleListen = ()=>{console.log("Listening on http://localhost:3000")};
app.listen(3000, handleListen);