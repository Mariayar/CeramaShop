import React, { useState, useEffect } from 'react';
import './app.css';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import CardList from '../cardList/cardList.jsx';
import data from '../../assets/data.json';
import SearchInfo from '../searchInfo/searchInfo';
import api from '../utils/api';

function App() {
  const [cards, setCards] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {}, []); как прописывать хук

  const handleInput = (e) => {
    setSearchQuery(e.target.value); 
  } 

  // Для поля поиска товара по названию
  useEffect(() => {
    const filteredCards = data.filter((item)=>
    item.name.toUpperCase().includes(searchQuery.toUpperCase())
    );
    setCards([...filteredCards]);
  }, [searchQuery]);

  useEffect(() => {
    api.getProductsList().then((data) => setCards(data.products));
    api.getUserInfo().then((userData)=>setCurrentUser(userData))
  }, []);

  return (
    <>
      <Header changeInput={handleInput} />
      <main className='content__container'>
        <SearchInfo searchText={searchQuery} searchCount={cards.length}/>
        <div className='content__cards'>
          <CardList data={cards}/>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
