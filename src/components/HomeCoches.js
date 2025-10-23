import React, { Component } from 'react'
import Global from "../Global"
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class HomeCoches extends Component {
    urlCoches = Global.apiCoches;
    state = {
        coches: [],
    }

    loadCoches = () => {
        var request = "api/Coches";
        axios.get(this.urlCoches + request).then(response => {
            this.setState({
                coches: response.data,
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches();
    }

    deleteCoche = (idCoche) => {
        var request = "api/Coches/DeleteCoche/" + idCoche
        axios.delete(this.urlCoches + request).then(response => {
            console.log("Coche eliminado " + idCoche);
            this.loadCoches();
        })
    }

    render() {
        return (
            <div>
                <h1>Home Coches</h1>
                <table className='table table-success'>
                    <thead>
                        <tr>
                            <th>ID Coche</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>Imagen</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.coches.map((coche, index) => {
                                return (<tr key={index}>
                                    <td>{coche.idCoche}</td>
                                    <td>{coche.marca}</td>
                                    <td>{coche.modelo}</td>
                                    <td>{coche.conductor}</td>
                                    <td><img src={coche.imagen} alt='imagen' style={{height: "100px", width: "100px"}}/></td>
                                    <td>
                                        <NavLink className="btn btn-info" to={"/update/" + coche.idCoche}>Update</NavLink>
                                        <NavLink className="btn btn-dark" to={"/details/" + coche.idCoche}>Details</NavLink>
                                        <button className='btn btn-danger' onClick={ () => {this.deleteCoche(coche.idCoche)} }>Delete</button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
