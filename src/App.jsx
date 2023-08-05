import componentImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventImage from './assets/images/events.png';

import './App.css';
import ListItem from './components/ListItem';
import Header from './components/Header';

function App() {
  const concepts= [
    {
      title:"Component",
      image:componentImage,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae animi distinctio sed sapiente ducimus corporis impedit aut libero tempora."
    },
    {
      title:'State',
      image:stateImage,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae animi distinctio sed sapiente ducimus corporis impedit aut libero tempora."
    },
    {
      title:'events',
      image:eventImage,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae animi distinctio sed sapiente ducimus corporis impedit aut libero tempora."
    }
    
  ];

  return (
    <>
      <Header/>
      <ul id="concepts">
        {
          concepts.map((concept,index)=>(
            <ListItem key={index} concept={concept}/>
          ))
        }
      </ul>
    </>
  )
}

export default App
