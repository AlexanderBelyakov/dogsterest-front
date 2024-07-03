import { AppBar, Button, Toolbar, Box} from '@mui/material'
import './Header.css'

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    
                    <Button href='/' color="inherit">All Pics</Button>
                    <Button href='/saved' color="inherit">Saved</Button>
                    
                </Toolbar>
            </AppBar>
            </Box>
    )
}

export default Header