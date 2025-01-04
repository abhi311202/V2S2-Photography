const express = require("express");
const path = require("path");
const User = require('../models/sign_form');

const router = express.Router();
const homeController = require("../controller/detail_save");

router.post("/addDetails", homeController.create);

router.get("/", (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/index.html");
});

router.get('/contactUs/admin.html', (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/admin.html");

})

router.get('/gridFlex.html', (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/gridFlex.html");

})



router.get("/index.html", (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/index.html");
});


router.get("/wed.html", (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/wed.html");
});



router.get("/gridFlex2.html", (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/gridFlex2.html");
});


router.get("/engage.html", (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/engage.html");
});


router.get("/gridFlex3.html", (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/gridFlex3.html");
});




router.get("/admin.html", (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/admin.html");
});



router.get("/contactUs/contactus.html", (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/contactus.html");
});



router.get('/prewed.html', (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/prewed.html");

})




router.get('/login', (req, res) => {
  const pd = path.join(__dirname, "..");

  res.sendFile(pd + "/views/admin.html");

})

// check pe check karne jao
router.post('/check', homeController.check);




// accessing the file to show data to admin

// router.get('/admin', async (req, res) => {

// });




module.exports = router;
