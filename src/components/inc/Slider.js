 import React from 'react';
 import Slider1 from '../images/Cherry Blossom kinder garten.png';
 import Slider2 from '../images/school wallpaper 1.jpg';
 import Slider3 from '../images/school wallpaper 2.jpg';
 import Slider4 from '../images/school wallpaper 3.jpg';
 import Slider5 from '../images/school wallpaper 5.jpg';
 import Slider6 from '../images/school wallper 6.jpg';
 


 function Slider(){

    return(
      <div id="carouselExampleAutoplaying " class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src={Slider1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Slider2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Slider3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Slider4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Slider5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Slider6} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

    );

 }
 export default Slider;
