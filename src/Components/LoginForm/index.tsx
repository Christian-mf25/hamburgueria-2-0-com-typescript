import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Provider/Auth";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { Background, Form } from "./style";

interface Data {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const history = useHistory();
  const { login, token } = useAuth();

  if (token) {
    history.push("/dashboard");
  }

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(5, "Minimo de 5 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({ resolver: yupResolver(schema) });

  const handleForm = ({ email, password }: Data) => {
    const data = { email, password };
    login(data, history);
  };

  return (
    <Background>
      <div className="container">
        <h3>Login</h3>
        <Form onSubmit={handleSubmit(handleForm)}>
          <TextField
            label="E-mail"
            color="info"
            size="medium"
            variant="outlined"
            margin="dense"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Senha"
            color="info"
            size="medium"
            variant="outlined"
            margin="dense"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button type="submit" variant="contained" size="medium">
            Logar
          </Button>
        </Form>
        <p className="text">Crie sua conta para saborear muitas delícias e matar sua fome!</p>

        <Button
          onClick={() => history.push("/register")}
          color="inherit"
          variant="contained"
          size="medium"
        >
          Cadastrar
        </Button>
      </div>
    </Background>
  );
};
