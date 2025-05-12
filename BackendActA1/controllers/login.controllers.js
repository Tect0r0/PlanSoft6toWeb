import jwt from "jsonwebtoken";
import crypto from "crypto";
import db from "../utils/firebase.js"; // Asegúrate de que la ruta sea correcta

export const login = async (req, res) => {
  try {
    const user = await db.collection("users").doc(req.body.username).get();
    if (!user.exists) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const userData = user.data();
    const salt = userData.password.slice(0, 10);
    const preHash = salt + req.body.password;
    const hashing = crypto.createHash("sha256");
    const hash = hashing.update(preHash).digest("hex");
    const hashSalt = salt + hash;

    const isLogin = userData.password === hashSalt;

    if (isLogin) {
      const token = jwt.sign({ sub: userData.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({ isLogin: true, user: userData, token });
    } else {
      return res
        .status(401)
        .json({ isLogin: false, message: "Invalid username or password" });
    }
  } catch (err) {
    console.error("Error de login FB:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const salt = crypto.randomBytes(5).toString("hex");
    const preHash = salt + password;
    const hashing = crypto.createHash("sha256");
    const hash = hashing.update(preHash).digest("hex");
    const hashed = salt + hash;

    await db
      .collection("users")
      .doc(username)
      .set({ name, username, password: hashed });

    res.status(200).json({
      success: true,
      message: "User created successfully :)",
      user: { name, username, password },
    });
  } catch (err) {
    console.error("Error de signup FB:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
