const User = require("../models/sign_form");
var nodemailer = require("nodemailer");
var Admin = require("../models/admin");



// console.log(val);




module.exports.create = async function (req, res) {
  console.log("hello");
  var post = await User.create(req.body);

  //    console.log(req.body);
  //    return res.json({ message : "Post created !" , post}  );

  // ***************************************************** email **********************

  console.log("hello");

  // console.log("fuck() called :: )");
  //   // var em = document.forms.frm.e.value;
  //   var em = document.getElementById("Email").value;

  //   console.log(em);
  //   alert("Email is : " + em);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "v2s2photography@gmail.com",
      pass: "uxer facg qjwn kgkx",
    },
  });

  var mailOptions = {
    from: "v2s2photography@gmail.com",
    to: req.body.email ,
    subject: "V2S2 confirmation mail",
    text: "Thanks for visiting V2S2 Photography. Our executive team will soon come up with the best quotation for you.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  console.log("BYY");

 
  return res.redirect('back');
};

module.exports.check = async function (req, res) {
  if (req.body.email == "v2s2photography@gmail.com" && req.body.pass == 123) {
    console.log("Login successfull");
    try {
      const users = await User.find(); // Fetch all users from MongoDB
      res.render("info.ejs", { users }); // Render the EJS template
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    console.log("Error email or password");
  }
};
