import { Typography, Stack, Button, Card, FormControl, TextField, Checkbox, FormControlLabel  } from '@mui/material'
import './App.css'
import DiscordIcon from './assets/discord'
import { useUserStore } from './store/userStore'


function App() {
  const user = useUserStore(state => state.user)
  const auth = useUserStore(state => state.auth)
  const login = useUserStore(state => state.login)


  if (auth) return (
    <div className="App">
      <header className="App-header">
        <Stack spacing={2}>
          <Typography variant="h2" component="h1">Hoshi Impact</Typography>
          <Button variant="contained" color="primary">Play Now!</Button>
          <Card variant='outlined' sx={{
            padding: 2,
          }}>
            <Stack spacing={2}>
              <Typography variant="h4" component="h2">Welcome back, {user.username}</Typography>
              <Button variant="contained" color="primary">Logout</Button>
            </Stack>
          </Card>
        </Stack>
      </header>
    </div>
  )


  return (
    <div className="App">
      <header className="App-header">
        <Stack spacing={2}>
          <Typography variant="h2" component="h1">Hoshi Impact</Typography>
          <Button variant="contained" color="primary">Play Now!</Button>
          <Card variant='outlined' sx={{
            padding: 2,
          }}>
            <Button variant="contained" color="primary" onClick={()=>login}>Login</Button>
          </Card>
          <Stack spacing={2} direction="row" sx={{
            width: '100%',
            justifyContent: 'center'
          }}>
            <Button variant="contained" color="primary" sx={{
              width: '100%'
            
            }}>Sign Up</Button>
            <Button variant="contained" color="primary" sx={{
              width: '100%'
            }}>Login With<DiscordIcon sx={{
              marginLeft: 1
            }}/></Button>
          </Stack>
        </Stack>
      </header>
    </div>
  )
}

export default App
