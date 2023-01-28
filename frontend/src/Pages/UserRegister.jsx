import appContext from '../context/appContext';
import { useContext } from 'react';

function UserRegister() {
 const { userName, setUserName, loginField } = useContext(appContext);

 const handleChange = ({target}) => {
    if(target.name === "user-name") setUserName(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/register', {
      celphone: loginField,
      name: userName
    }).then((resp) => {
      if (!resp.data.message) history('/user/register');
      else history('/home');
    }).catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      name="user-name"
      onChange={handleChange} 
    />
    <input type="submit"/>
  </form>
  );
}

export default UserRegister;
