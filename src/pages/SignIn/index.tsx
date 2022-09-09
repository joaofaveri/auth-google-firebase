import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../services/firebase'
import './styles.scss'

export function SignIn() {

  const [user, setUser] = useState<User>({} as User)

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then(result => setUser(result.user))
      .catch(error => console.log(error))
  }


  return (
    <div className="container">
      <div className='user'>
        {user.photoURL && <img src={user.photoURL} alt="Foto do Usuário" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social como serviço da Google, facilitando a vida do usuário e permitindo utilizar a aplicação sem fazer cadastro.
      </span>

      <button type="button" className="button" onClick={handleGoogleSignIn}>
        <FontAwesomeIcon icon={faGoogle} />  Entrar com Google
      </button>
    </div>
  )
}