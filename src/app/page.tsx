import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="parentDiv">
        <div className="child1">
          Hey there,
          <br />
          My Name is <span className="name">Maryam</span>
          <br />I am a Next JS Developer
        </div>
        <div className="child2"> <img className="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbqG3NZuUc1H7Ks2mXRNuP7Ka37XSrM3Etg&s" /> </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )};