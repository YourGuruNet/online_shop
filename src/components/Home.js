import React, { Component } from 'react';
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../components/Images/slider1.jpg';
import slider2 from '../components/Images/slider2.jpg';
import slider3 from '../components/Images/slider3.jpg';


export class Home extends Component {
    componentDidMount() {
        $() ;
      }
    
    render() {
        return (
            <div>   
                      <div className='container-fluid' style={{'padding':"0", 'margin': "0"}}>  
                        <Carousel>  
                        <Carousel.Item style={{'height':"400px"}} >  
                           <img style={{'height':"400px"}}  
                          className="d-block w-100"  
                          src={slider2} alt="test" />  
                        <Carousel.Caption>  
                             <h3>Best Phones in the town!</h3>  
                        </Carousel.Caption>  
                        </Carousel.Item  >  
                        <Carousel.Item style={{'height':"400px"}}>  
                             <img style={{'height':"400px"}}  
                              className="d-block w-100"  
                              src={slider1} alt="test"/>  
                        <Carousel.Caption>  
                                   <h3>Come and grabs your favorite...</h3>  
                        </Carousel.Caption>  
                        </Carousel.Item>  
                        <Carousel.Item style={{'height':"400px"}}>  
                            <img style={{'height':"400px"}}  
                            className="d-block w-100"  
                            src={slider3}  alt="test" />  
                        <Carousel.Caption>  
                            <h3>Free shipping worldwide</h3>  
                        </Carousel.Caption>  
                        </Carousel.Item>  
                        </Carousel>  
              </div>  
          </div>  
        )
    }
}

export default Home;

