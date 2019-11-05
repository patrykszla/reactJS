import React, {Component} from 'react';
import Heading from './Heading';
import UsersList from './UsersList';

// className bo to element javascriptowy a slowo class jest tam zarezerwowane

class Users extends Component {
  
  constructor() { // to tez metoda
      super(); //sciagnij wszystko z klasy dziedziczonej i wypisz
      this.state = {
          users: ['Adam', 'Olga', 'Kasia', 'Tomek'] //musimy przypisac obiekt do stanu nie mozna bezposrednio tablicy
      }
  }

//nasze metody miedzy konstruktorem a renderem
  addUser = (e) => {
    e.preventDefault(); //zablokuj
    this.setState(prevState =>{  //dla tego obiektu ustaw nowy stan(funkcja update)
        return({users: [...prevState.users, this.userInput.value]}) //zwroc nowy obiekt users tzn z inputa 
    }); //zawsze trzeba uzywac medoty setState bo nie zadziala
    console.log(this.userInput.value);
  }
  
  //
  removeUser = (indexToDelete) => {
           
           let filteredArray = this.state.users.filter((element, index) => {
                return index !== indexToDelete; //filtruje i wyswietla wszystkie oprocz tego ktorego kliknelismy
           })
            this.setState({users: filteredArray});
            
            

  }


    render () {
         return (
           <div className="users">
                <Heading text="User's list" />
                            {/* metoda tej klasy tylko sie do niej odwolujemy */}
                <form onSubmit={this.addUser} className="add-user-form" >          
                 {/* w refie wywolujemy funkcje w ktorej przekazujemy parametr(budujemy referencje do tego obiektu*/}
                    <input type="text" placeholder="Nazwa użytkownika" ref={input=>this.userInput = input}/>
                    <button >Add user</button>
                </form>

                <UsersList usersList={this.state.users} deleteUser={this.removeUser}/>
           </div>
        );
    }
}

export default Users