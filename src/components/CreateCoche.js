import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateCoche extends Component {
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();
    urlCoche = Global.apiCoches;

    state = {
        status: false
    }

    insertCoches = (event) => {
        event.preventDefault();
        var request = "api/Coches/InsertCoche";
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;
        var imagen = this.cajaImagen.current.value;

        var coche = {
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        axios.post(this.urlCoche + request, coche).then(response => {
            this.setState({
                status: true
            })
        })
    }

  render() {
    return (
      <div>
        {
            this.state.status == true &&
            <Navigate to="/"/>
        }
        <h1>New Coche</h1>
        <form>
            <label>Marca: </label>
            <input type='text' ref={this.cajaMarca} className='form-control'/>
            <label>Modelo: </label>
            <input type='text' ref={this.cajaModelo} className='form-control'/>
            <label>Conductor: </label>
            <input type='text' ref={this.cajaConductor} className='form-control'/>
            <label>Imagen: </label>
            <input type='text' ref={this.cajaImagen} className='form-control'/>
            <button className='btn btn-info' onClick={this.insertCoches}>Nuevo Coche</button>
        </form>
      </div>
    )
  }
}
