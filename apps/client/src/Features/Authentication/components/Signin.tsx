import { Button, Grid, TextField } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form"

type FormData = {
  login: string;
  password: string;
}

export const Signin = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
<form onSubmit={onSubmit}>

    <Grid container textAlign="center">
      <Grid item spacing={2} xs={12} margin={2}>
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
