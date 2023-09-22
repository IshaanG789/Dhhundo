const Storage = {
    setToken: (data) => localStorage.setItem("token", data),
    getToken: () => localStorage.getItem("token"),
    setUserData: (data) => localStorage.setItem("user data", JSON.stringify(data)),
    getUserData: () => JSON.parse(localStorage.getItem("user data")),
    setLocation: (data) => localStorage.setItem("location",  JSON.stringify(data)),
    getLocation: () => JSON.parse(localStorage.getItem("location")),
    removeData: (key) => localStorage.removeItem(key),
    clearAllData: () => localStorage.clear(),
  
  };
  
  export default Storage;