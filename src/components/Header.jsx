import keyConceptImage from './assets/images/key-concepts.png';

const Header = () => {
  return (
    <>
        <header>
        <img src={keyConceptImage} alt="key-concept" />
        <h1>Key React Concepts</h1>
        <p>Selected key react concepts you should know about</p>
      </header>
    </>
  )
}

export default Header