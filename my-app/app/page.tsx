
import Header from "./components/Headers/page";
import Nav from "./components/Nav/page";
import Videodemo from "./components/Videodm/page";
import Whis from "./components/whis/page";
import Swiperss from "./components/Swiperslider/page";
import His from "./components/History/page";
import Gallery from "./components/Album/page";
import Musicss from "./components/music/page";
import ThankyouPage from "./components/Thankyou/page";
export default function Home() {
  return (
   
    <div className=" ">
      <div className="bg-violet-50" >
        <section  className="max-w-xl mx-auto  ">
          <Header />
        </section>
      </div>
     
      <section className="w-full px-1 md:px-2" id="nav">
        <Nav />
      </section>

      <section className="w-full px-1 md:px-2" id="video">
        <Videodemo />
      </section>

      <section className="w-full px-1 md:px-2 " id="whis">
          <Whis />
      </section>

      <section className="w-full px-1 md:px-2 " id="swiper">
          <Swiperss/>
      </section>
      <section className="w-full px-1 md:px-2 " id="his">
          <His/>
      </section>
     
      <section className="w-full px-1 md:px-2 " id="all">
          < Gallery/>
      </section>

      <section className="w-full px-1 md:px-2 " id="all">
    
       <Musicss/>
      
      
      </section>

      <section className="w-full px-1 md:px-2 " id="all">
    
       
      <ThankyouPage/>
      
      </section>
    
    
    
    </div>
  );
}


