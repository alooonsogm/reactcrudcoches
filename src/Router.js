import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import MenuCoche from './components/MenuCoche'
import HomeCoches from './components/HomeCoches'
import CreateCoche from './components/CreateCoche'
import UpdateCoche from './components/UpdateCoche'
import DetailsCoche from './components/DetailsCoche'

export default class Router extends Component {
    render() {
        function UpdateElement() {
            var { id } = useParams();
            return <UpdateCoche id={id} />
        }

        function DetailsElement() {
            var { id } = useParams();
            return <DetailsCoche id={id} />
        }
        return (
            <BrowserRouter>
                <MenuCoche />
                <Routes>
                    <Route path="/" element={<HomeCoches />} />
                    <Route path="/create" element={<CreateCoche />} />
                    <Route path="/update/:id/" element={<UpdateElement />} />
                    <Route path="/details/:id/" element={<DetailsElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
