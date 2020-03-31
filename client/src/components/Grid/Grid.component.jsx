import React from 'react';
import { Grid } from './Grid.styled'

const GridComponent = (props) => {

    return (
        <Grid>
            {props.children}
        </Grid>
    )
}

export default GridComponent;