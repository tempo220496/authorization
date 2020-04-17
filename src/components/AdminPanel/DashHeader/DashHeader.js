import React from "react";
import { Button, Grid, GridRow, GridColumn, Icon, Search, Dropdown, Image } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions/authAction";
import styled from "styled-components";

const Header = styled.header`
  padding: 2rem 2rem 2rem 0;
  background: #fff;
`;

const trigger=(
    <span>
        <Image avatar src="https://cdn3.f-cdn.com/contestentries/1211056/27637491/5a39bea42397c_thumb900.jpg" />John Doe
    </span>
);

const options=[
    {key:'user',text:'Account',icon:'user'},
    {key:'settings',text:'Settings',icon:'settings'},
    {key:'sign-out',text:'Sign Out',icon:'sign out'}
];

const DashHeader = ({ history }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout(history));
  };
  return (
    <Header className="dashboard__header">
      <Grid>
        <GridRow className="dashboard__header">
          <GridColumn tablet={1}>
            <Icon
              name="bars"
              color="blue"
              size="large"
              className="dashboard__toggle"
            />
          </GridColumn>
          <GridColumn tablet={10}>
            <Search input={{icon:'search',iconPosition:'left'}} />
          </GridColumn>
          <GridColumn textAlign="right" tablet={5}>
            <Dropdown 
                style={{marginRight:'2rem'}}
                trigger={trigger}
                options={options}
                pointing="top left"
                icon={null}
            />
            <Button color="blue" onClick={onLogout}>
              Exit
            </Button>
          </GridColumn>
        </GridRow>
      </Grid>
    </Header>
  );
};

export default DashHeader;
