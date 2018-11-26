import React, {Component} from 'react'
import styled from 'styled-components'
import {Table} from 'reactstrap'

const Block = styled.div`
    margin-top: 10px;
`

export default class RTable extends Component {
    constructor(props) {
        super(props)
    }

    generate = ()=> {
        let body = []
        for(let i = 0; i < 5; i++) {
            body.push(<tr>
                <th scope="row">{i+1}</th>
                <td>*</td>
                <td>*</td>
                <td>*</td>
                <td>*</td>
            </tr>)
        }
        return body
    }

    render() {
        return (
            <Block>
                <Table bordered hover dark>
                    <thead>
                        <tr>
                            <th>Subnet</th>
                            <th>SubnetID</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Broadcast</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.generate()}
                    </tbody>
                </Table>
            </Block>
        )
    }
}