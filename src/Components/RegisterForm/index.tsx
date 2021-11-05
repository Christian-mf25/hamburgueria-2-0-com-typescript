import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Provider/Auth";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { Background, Form } from "../LoginForm/style";

interface Data {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}

export const RegisterForm = () => {
  const history = useHistory();
  const { signUp, token } = useAuth();

  if (token) {
    history.push("/dashboard");
  }

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    name: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(5, "Minimo de 5 digitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, minúscula número e um caractere special"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({ resolver: yupResolver(schema) });

  const handleForm = ({ email, name, password, confirm_password }: Data) => {
    const data = { email, name, password, confirm_password };
    signUp(data, history);
  };

  return (
    <Background>
      <div className="container">
        <div className="top">
          <h3>Cadastro</h3>
          <Link to="/">Retornar para o login</Link>
        </div>

        <Form onSubmit={handleSubmit(handleForm)}>
          <TextField
            label="Nome"
            color="info"
            size="medium"
            variant="outlined"
            margin="dense"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

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

          <TextField
            label="Confirmar senha"
            color="info"
            size="medium"
            variant="outlined"
            margin="dense"
            {...register("confirm_password")}
            error={!!errors.confirm_password}
            helperText={errors.confirm_password?.message}
          />

          <Button type="submit" variant="contained" size="medium">
            Cadastrar
          </Button>
        </Form>
      </div>
    </Background>
  );
};
