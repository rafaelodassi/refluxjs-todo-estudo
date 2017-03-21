import React, { Component } from 'react';

class ComponentAbout extends Component {
    render(){
        return (
            <div>
                <nav className="nav-bread">
                    <div className="container nav-wrapper">
                        <div className="col s12">
                            <a href="/" className="breadcrumb">Home</a>                            
                            <a href="/about" className="breadcrumb">Sobre o estudo</a>                            
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <h4>Sobre o estudo</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam sem, placerat vel varius et, vestibulum a lectus. Integer vitae iaculis orci. Suspendisse non orci nec tortor scelerisque consectetur. Vestibulum convallis fringilla massa, in egestas ante iaculis ut. Cras id lorem elementum, congue purus viverra, pharetra quam. Aliquam non metus eu urna sodales viverra sit amet sit amet magna. Quisque turpis turpis, consectetur non finibus ut, cursus eu ex. Integer interdum ligula erat, quis porta sem bibendum id. Quisque sed vulputate dui. Nulla ullamcorper suscipit molestie. Praesent quis leo eget urna consectetur sagittis vitae a nisi. Donec leo enim, rhoncus et sem sed, posuere ultricies tortor. Sed tincidunt ex a mi condimentum, et tristique nunc dictum. Nullam dui urna, congue ut ipsum eget, interdum gravida turpis. Integer sollicitudin arcu enim, et pellentesque eros feugiat vel.</p>
                </div>
            </div>
        );
    }
}

export default ComponentAbout