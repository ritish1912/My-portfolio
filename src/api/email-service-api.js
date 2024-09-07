import axios from "axios";

const contactMeEmail = async (name, email, message) => {
  const reqObj = {
    name: name,
    email: email,
    message: message,
  };

  try {
    const res = await axios.post("http://localhost:8080/sendMail", reqObj, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
export default contactMeEmail;
