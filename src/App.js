import React from "react";
import profile from "./images/maleProfile.jpg"
import heart from "./images/heart-empty.jpeg"
import like from "./images/heart-filled.png"

function App() {
  const [contact, setContact] = React.useState({
    firstName: "Heivans",
    lastName: "Atoko",
    phone: " 0700705888",
    email: "abc@mail.com",
    isFavorite: false
  });

  let toggleHeart = contact.isFavorite ? like : heart


  function toggleFav () {
    setContact(prevState => ({
      ...prevState,
      isFavorite: !prevState.isFavorite
    }))
  }

  return (
    <main className="main">
      <article className="card">
        <img src={profile} className="card--image" />
        <div className="card--stats">
          <img
            src={toggleHeart}
            className="card--favorite"
            onClick={toggleFav}
           
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
