import React, { Component } from 'react'
import Global from '../Global';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default class UpdateCoche extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();
    urlCoche = Global.apiCoches;

    state = {
        elCoche: [],
        status: false
    }

    getCoche = () => {
        var id = this.props.id;
        var request = "api/Coches/FindCoche/" + id
        axios.get(this.urlCoche + request).then(response => {
            this.setState({
                elCoche: response.data
            })
        })
    }

    componentDidMount = () => {
        this.getCoche();
    }

    updateCoche = (event) => {
        event.preventDefault();
        var request = "api/Coches/UpdateCoche";
        var id = parseInt(this.cajaId.current.value);
        var marca = this.cajaMarca.current.value;
        var modelo = this.cajaModelo.current.value;
        var conductor = this.cajaConductor.current.value;
        var imagen = this.cajaImagen.current.value;

        var coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        axios.put(this.urlCoche + request, coche).then(response => {
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
        <h1>Update Departamento</h1>
        <form>
            <label>Numero: </label>
            {/*Ponemos el input del id hidden ya que no tenemos que dejar que le cliente modifique el numero porque sino dara error el PUT*/}
            {/*En React en vez de value habra que poner defaultValue en los input porque sino no dejara escribir en los input */}
            <input type='hidden' ref={this.cajaId} className='form-control' defaultValue={this.props.id}/>
            <label>Marca: </label>
            <input type='text' ref={this.cajaMarca} className='form-control' defaultValue={this.state.elCoche.marca}/>
            <label>Modelo: </label>
            <input type='text' ref={this.cajaModelo} className='form-control' defaultValue={this.state.elCoche.modelo}/>
            <label>Conductor: </label>
            <input type='text' ref={this.cajaConductor} className='form-control' defaultValue={this.state.elCoche.conductor}/>
            <label>Imagen: </label>
            <input type='text' ref={this.cajaImagen} className='form-control' defaultValue={this.state.elCoche.imagen}/>
            <button className='btn btn-info' onClick={this.updateCoche}>Update</button>
        </form>
      </div>
    )
  }
}
