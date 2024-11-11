import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Link,
} from "@mui/material";
import { signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import Google from "./images/bgoogle.png";
import banner from "./images/banner.webp";
import { auth, googleauth, db } from "../firebase/Setup";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isAddAnotherAccount, setIsAddAnotherAccount] = useState(false);
  const navigate = useNavigate();

  // Google Sign-in or Sign-up handler
  const handleSignInWithGoogle = async (isSignUp = false) => {
    try {
      const result = await signInWithPopup(auth, googleauth);
      const user = result.user;

      if (!user) {
        setErrorMessage("Authentication failed. Please try again.");
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (isSignUp) {
        if (userDoc.exists()) {
          setErrorMessage("User already signed up! Please try to sign in.");
        } else {
          await setDoc(userRef, {
            username,
            password,
            email: user.email,
            profile_image: user.photoURL,
            lastSignIn: new Date().toISOString(),
          });
          console.log("User data added to Firestore");
          navigate("/main");
        }
      } else {
        if (userDoc.exists()) {
          navigate("/main");
        } else {
          setErrorMessage("No account found. Please sign up first.");
        }
      }
    } catch (err) {
      console.error("Error during sign-in or data storage:", err);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  // Forgot Password handler
  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
      setIsForgotPassword(false);
    } catch (err) {
      console.error("Error during password reset:", err);
      setErrorMessage("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <Box
      display="flex"
      height="100vh"
      width="100vw"
      sx={{ backgroundColor: "#f4f4f4" }}
    >
      {/* Left Side - Form Section */}
      <Box
        flex={1}
        sx={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", color: "blue" }}>
          Data Vault
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "20px", color: "#666" }}>
          Save your Data Safely and Enjoy your Life
        </Typography>

        {!isForgotPassword && !isAddAnotherAccount ? (
          <>
            <TextField
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              sx={{ width: "100%", mb: "15px" }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: "100%", mb: "20px" }}
            />
            <Button
              onClick={() => handleSignInWithGoogle(false)}
              size="large"
              variant="contained"
              sx={{
                width: "100%",
                borderRadius: "25px",
                mb: "10px",
                backgroundColor: "#007bff",
              }}
            >
              Log in
            </Button>

            <Button
              onClick={() => handleSignInWithGoogle(false)}
              size="large"
              variant="outlined"
              sx={{
                width: "100%",
                borderRadius: "25px",
                mb: "10px",
                borderColor: "#007bff",
                color: "#007bff",
              }}
            >
              Sign In with Google
              <img
                src={Google}
                alt="GOOGLE"
                style={{ height: "20px", width: "25px", marginLeft: "10px" }}
              />
            </Button>

            <Link
              href="#"
              onClick={() => setIsForgotPassword(true)}
              sx={{ textAlign: "center", display: "block" }}
            >
              Forgot Password?
            </Link>
            <Link
              href="#"
              onClick={() => setIsAddAnotherAccount(true)}
              sx={{ textAlign: "center", display: "block" }}
            >
              Add Another Account
            </Link>
          </>
        ) : isForgotPassword ? (
          <>
            <TextField
              label="Enter your email address"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "100%", mb: "20px" }}
            />
            <Button
              onClick={handleForgotPassword}
              size="large"
              variant="contained"
              sx={{
                width: "100%",
                borderRadius: "25px",
                mb: "10px",
                backgroundColor: "#007bff",
              }}
            >
              Send Reset Email
            </Button>
            <Link
              href="#"
              onClick={() => setIsForgotPassword(false)}
              sx={{ textAlign: "center", display: "block" }}
            >
              Back to Login
            </Link>
          </>
        ) : (
          <>
            <Button
              onClick={() => handleSignInWithGoogle(true)}
              size="large"
              variant="contained"
              sx={{
                width: "100%",
                borderRadius: "25px",
                mb: "10px",
                backgroundColor: "#007bff",
              }}
            >
              Sign Up with Google
            </Button>
            <Link
              href="#"
              onClick={() => setIsAddAnotherAccount(false)}
              sx={{ textAlign: "center", display: "block" }}
            >
              Back to Login
            </Link>
          </>
        )}

        {errorMessage && (
          <Snackbar
            open={Boolean(errorMessage)}
            autoHideDuration={6000}
            message={errorMessage}
            onClose={() => setErrorMessage("")}
          />
        )}
      </Box>

      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <img
          style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
          src={banner}
          alt="Banner"
        />
      </Box>
    </Box>
  );
};

export default Signin;
