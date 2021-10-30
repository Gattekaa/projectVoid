import React from "react";
import { makeStyles} from '@material-ui/styles'
import Paper from "@material-ui/core/paper";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";


const userStyles = makeStyles({
    root: {
        padding: 16,
        width: 275,
        marginRight: 16,
        height: 315
    },
    button: {
        width: '100%',
    }
})

const tags = [
    { id: 1, name: 'viniciusolsen'},
    { id: 2, name: 'ariaolsen'},
    { id: 3, name: 'courtneyolsen'},
    { id: 4, name: 'lorenaolsen'},
    
]




function NavBar() {
    const classes = userStyles();

    return (
        <Paper className={classes.root}>
            <Button className={classes.button} variant="outlined" color="secondary" href="http://localhost:3000/sign-in">Registre-se</Button>
            <ListSubheader>{`Tags em alta`}</ListSubheader>
            {
                tags.map((item) =>(
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button >
                Exibir mais Tags
            </ListItem>
        </Paper>
    )
}   
export default NavBar;