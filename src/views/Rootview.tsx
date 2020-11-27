import React, { FC } from "react";
import { TextField, Card, Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core";



const Rootview: FC = () => {



    return (

        <p>
            <Card>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <form className="login_Page" noValidate autoComplete="off" >
                        <TextField id="outlined-basic" label="User Name" />
                        <TextField id="filled-basic" label="eMail" variant="filled" />
                        <TextField id="outlined-basic" label="password" variant="outlined" />
                    </form> 
                </Grid>
            </Card>

            <Card>
                <Grid container direction="row" justify="space-around" alignItems="center">
                    <Button>Login</Button>
                </Grid>
            </Card>
            


        </p>
        
    );

};

export default Rootview;