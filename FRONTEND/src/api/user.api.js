import axiosinstance from "../utils/axiosinstance";

export const loginUser = async (password, email) => {
  const { data } = await axiosinstance.post("/api/auth/login", { email, password });
  return data;
};

export const registerUser = async (name, password, email) => {
  const { data } = await axiosinstance.post("/api/auth/register", { name, email, password });
  return data;
};

export const logoutUser = async () => {
  const { data } = await axiosinstance.get("/api/auth/logout");
    return data
}

export const registerUser = async (name,password,email) =>{
    const {data} = await axiosinstance.post("/api/auth/register",{name,email,password})
    return data
}

export const logoutUser = async () =>{
    const {data} = await axiosinstance.get("/api/auth/logout")
    return data
}

export const getCurrentUser = async () =>{
    const {data} = await axiosinstance.get("/api/auth/me")
    return data
}

export const getAllUserUrls = async () =>{
    const {data} = await axiosinstance.post("/api/user/urls")
    return data
}