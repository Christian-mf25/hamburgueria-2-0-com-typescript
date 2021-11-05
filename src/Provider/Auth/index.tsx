import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../Services/API";
import { History } from "history";

interface AuthProps {
  children: ReactNode;
}

interface Data {
  email: string;
  name?: string;
  password: string;
  confirm_password?: string;
}

interface AuthProviderData {
  id: string;
  token: string;
  isLoggedIn: boolean;
  Logout: (history: History) => void;
  login: (userData: Data, history: History) => void;
  signUp: (userData: Data, history: History) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const id = localStorage.getItem("@Burguer:id") || "";
  const token = localStorage.getItem("@Burguer:token") || "";

  const signUp = (userData: Data, history: History) => {
    API.post("/register", userData)
      .then((_) => {
        toast.success("Usuário cadastrado");
        history.push("/");
      })
      .catch((_) => toast.error("Tente outro e-mail"));
  };

  const login = (userData: Data, history: History) => {
    API.post("/login", userData)
      .then((res) => {
        localStorage.clear();
        toast.success(`Bem vindo ${res.data.user.name}`);
        localStorage.setItem("@Burguer:token", res.data.accessToken);
        localStorage.setItem("@Burguer:id", res.data.user.id);
        setIsLoggedIn(true);
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("E-mail ou senha inválido");
      });
  };

  const Logout = (history: History) => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ token, id, isLoggedIn, Logout, login, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
