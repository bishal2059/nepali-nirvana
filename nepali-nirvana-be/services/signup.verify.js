const signInDataVerification = async function (userData) {
  return new Promise((resolve, reject) => {
    if (!userData.firstName) {
      reject({ error: "First Name is required" });
    }
    if (!userData.lastName) {
      reject({ error: "Last Name is required" });
    }
    if (!userData.gender) {
      reject({ error: "Gender is required" });
    }
    if (!userData.email) {
      reject({ error: "Email is required" });
    }
    if (!userData.password) {
      reject({ error: "Password is required" });
    }
    resolve(userData);
  });
};

module.exports = {
  signInDataVerification,
};
