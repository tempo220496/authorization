import React from 'react';
import AddGoodForm from './AddGoodForm/AddGoodForm';
import AddCategory from './AddCategory.js/AddCategory';
import DashModule from '../../../UI/DashModule/DashModule';
import { Grid } from 'semantic-ui-react';

const AddGood = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <DashModule>
                    <AddGoodForm title="Add good" />
                </DashModule>
            </Grid.Column>
            <Grid.Column width={6}>
                <DashModule>
                    <AddCategory title="Add category" />
                </DashModule>
            </Grid.Column>
        </Grid>
    );
}

export default AddGood;
