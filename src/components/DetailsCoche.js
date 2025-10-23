import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DetailsCoche extends Component {
    urlCoche = Global.apiCoches;

    state = {
        coche: []
    }

    getCoche = () => {
        var id = this.props.id;
        var request = "api/Coches/FindCoche/" + id
        axios.get(this.urlCoche + request).then(response => {
            this.setState({
                coche: response.data
            })
        })
    }

    componentDidMount = () => {
        this.getCoche();
    }

    render() {
        return (
            <div>
                <h1>Details {this.state.coche.marca} {this.state.coche.modelo}</h1>
                <table className='table table-success'>
                    <thead>
                        <tr>
                            <th>ID Coche</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr>
                                <td>{this.state.coche.idCoche}</td>
                                <td>{this.state.coche.marca}</td>
                                <td>{this.state.coche.modelo}</td>
                                <td>{this.state.coche.conductor}</td>
                                <td><img src={this.state.coche.imagen} alt='imagen' style={{ height: "100px", width: "100px" }} /></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
