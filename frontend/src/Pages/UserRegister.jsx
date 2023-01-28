import appContext from '../context/appContext';
import { useContext } from 'react';
import Axios from 'axios';

function UserRegister() {
 const { userName, setUserName, loginField } = useContext(appContext);

 const handleChange = ({target}) => {
    if(target.name === "user-name") setUserName(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/user/register', {
      celphone: loginField,
      name: userName
    }).then((resp) => {
      console.log(resp);
    }).catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      name="user-name"
      onChange={handleChange} 
    />
    <input type="submit" value="Salvar"/>
  </form>
  );
}

export default UserRegister;
