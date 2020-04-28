import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const GoodsList = ({goods,match}) => {
    return (
        <div className="goods__list">
            <h2>List of goods</h2>
            <div className="responsive-table">
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={1}>#</Table.HeaderCell>
                            <Table.HeaderCell width={9}>Name of good</Table.HeaderCell>
                            <Table.HeaderCell width={4}>Price of good</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Edit</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {goods.map((good,index)=>{
                            return(
                                <Table.Row>
                                    <Table.Cell>{index+1}</Table.Cell>
                                    <Table.Cell>{good.title}</Table.Cell>
                                    <Table.Cell>{good.price}</Table.Cell>
                                    <Table.Cell>
                                        <Link to={`${match.path}/edit/${good.id}`}><Icon name="edit"/>Edit</Link>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default GoodsList;
