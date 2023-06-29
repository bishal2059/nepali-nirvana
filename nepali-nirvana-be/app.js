const path = require("path");
const config = require("./services/config");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const loginRoute = require("./routes/login.route");
const signUpRoute = require("./routes/signup.route");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const { getGoogleUser } = require("./models/user.model");
const dashboardRoute = require("./routes/dashboard.route");
const { authenticateUser } = require("./middlewares/authenticate.middleware");
const { checkVerifiedUser } = require("./middlewares/verify.middleware");
const verifyRoute = require("./routes/verify.route");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(morgan("combined"));
app.use(cookieParser());

app.use(express.json());
app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET,
      callbackURL: "/login/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await getGoogleUser(
          profile._json.email,
          profile._json.email_verified
        );
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// FOR DEPLOYMENT:
// app.use("/", express.static(path.join(__dirname, "public")));

//FOR DEPLOYMENT:
// app.get("/", (req, res) => {
//   return res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use("/login", loginRoute);
app.use("/signup", signUpRoute);
app.use("/verify", verifyRoute);
app.use("/dashboard", authenticateUser, checkVerifiedUser, dashboardRoute);

module.exports = app;
