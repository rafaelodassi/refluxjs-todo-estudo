import React, { Component } from 'react';

class ComponentHome extends Component {
    render(){
        return (
            <div>
                <nav className="nav-bread">
                    <div className="container nav-wrapper">
                        <div className="col s12">
                            <a href="/" className="breadcrumb">Home</a>                            
                        </div>
                    </div>
                </nav>

                <div className="container">                                  
                    <h4>Home</h4>                              
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam sem, placerat vel varius et, vestibulum a lectus. Integer vitae iaculis orci. Suspendisse non orci nec tortor scelerisque consectetur. Vestibulum convallis fringilla massa, in egestas ante iaculis ut. Cras id lorem elementum, congue purus viverra, pharetra quam. Aliquam non metus eu urna sodales viverra sit amet sit amet magna. Quisque turpis turpis, consectetur non finibus ut, cursus eu ex. Integer interdum ligula erat, quis porta sem bibendum id. Quisque sed vulputate dui. Nulla ullamcorper suscipit molestie. Praesent quis leo eget urna consectetur sagittis vitae a nisi. Donec leo enim, rhoncus et sem sed, posuere ultricies tortor. Sed tincidunt ex a mi condimentum, et tristique nunc dictum. Nullam dui urna, congue ut ipsum eget, interdum gravida turpis. Integer sollicitudin arcu enim, et pellentesque eros feugiat vel.</p>
                    <p>Proin vestibulum libero felis, lobortis lobortis ligula pharetra sit amet. Morbi dignissim suscipit augue ac rutrum. Vivamus tempor tellus lorem, vitae pulvinar erat dignissim vitae. Curabitur augue dui, viverra gravida purus vitae, eleifend condimentum nisi. Nunc vel odio molestie, maximus ipsum quis, volutpat ligula. Curabitur enim mi, iaculis in vestibulum vel, iaculis a purus. Nam eget fringilla sapien, at suscipit risus. Phasellus tristique libero in lorem tincidunt porttitor. In enim metus, aliquet ac efficitur eu, molestie ac nunc. Ut laoreet commodo lectus, a ornare nisl efficitur vitae. Pellentesque placerat neque eu libero placerat, sit amet ullamcorper nulla lobortis. Pellentesque vulputate et leo et condimentum. Sed hendrerit commodo ipsum consequat lobortis. Cras egestas diam quis risus posuere, et hendrerit ligula sodales. Mauris ut augue id enim molestie efficitur.</p>
                </div>
            </div>
        );
    }
}

export default ComponentHome