import { Button, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useMutation } from "urql";
import { setAuth } from "../helpers";

type FormData = {
  login: string;
  password: string;
}

const MUTATION_LOGIN = `mutation LoginMutation($login: String!, $password: String!) {
  Login(username: $login, password: $password) {
    sessionId
  }
}`

export const Signin = () => {
  const [result, doLogin] = useMutation(MUTATION_LOGIN)
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const result = await doLogin(data);

      if (result.error) {
        console.log('Error Login:', result.error);
      } else {
        setAuth(result.data.sessionId);
        navigate('/app');
      }

    } catch(err) {
      console.log('Error Login:', err);
    }

  });

  return (
    <form onSubmit={onSubmit}>
      <Grid container textAlign="center" spacing={2}>
        <Grid item  xs={12} margin={2}>
        <Controller name="login" rules={{required: true}} control={control} render={({ field }) =>  <TextField {...field} />} />

        </Grid>
        <Grid item xs={12} margin={2}>
        <Controller name="password" rules={{ required: true  }} control={control} render={({ field }) => <TextField {...field} type="password" />} />

        </Grid>

        <Grid item xs={12} margin={3}>
        <Button type="submit" variant="outlined">Signin</Button>

        </Grid>

      </Grid>
    </form>

  )
}
