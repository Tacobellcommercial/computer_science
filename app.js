const express = require("express");



const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs")
app.use(express.json())

app.get("/", (req, res)=>{
  res.redirect("/home");
})

app.get("/home", (req, res)=>{
  res.render("Home", {
    title: "Yes: Reddit is potentially covering for extreme leftist communities"
  });
})

app.get("/about", (req, res)=>{
  res.render("About", {
    title: "About this site"
  })
})

app.get("/legal", (req, res)=>{
  res.render("Legal", {
    title: "Legal"
  })
})

app.get("/support", (req, res)=>{
  res.render("Support", {
    title: "Support"
  })
})

app.get("/contact", (req, res)=>{
  res.render("Contact", {
    title: "Contact"
  })
})


app.get("*", (req, res)=>{
  res.render("Error", {
    title: "Error!"
  })
})



app.listen(process.env.PORT, ()=>{
  console.log("Listening on port 3000");
})
