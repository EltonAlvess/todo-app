import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { PromiseProvider } from 'mongoose';

export default  props => (
    <div role='from' className='todoForm'>
        
        <Grid cols='12 8 6'>
            <input id='description' className='form-control' placeholder='Add new Task'
            onChange={props.handleChange}
            value={props.description}></input>
        </Grid>

        <Grid cols='12 8 6'>
            <IconButton style='primary' icon='plus' 
                onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)