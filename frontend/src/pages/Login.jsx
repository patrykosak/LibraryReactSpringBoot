import React, { useContext, useState } from 'react'
import { Form,Button,Alert } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import styles from './login.module.scss';

const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [isShowForgot, setIsShowForgot] = useState(false);
    const [isError, setIsError] = useState(false)

    const navigate = useNavigate();

    const {loginUser} = useContext(AuthContext)



    const sendEmailHandler = () => {
      console.log("send email with password");
  }

    const handleLogin = async (e) => {
        e.preventDefault();

        const params = new URLSearchParams();
        params.append('username', email);
        params.append('password', password);

        await axios.post("http://localhost:8090/login", params).then(res=>{
            if(res.status===200){
              console.log(res)
                navigate("/")
                loginUser(res.data,res.data.access_token)
              }
                else
                  setIsError(true)

        }).catch((e) => {
            console.log(e)
            setIsError(true)
                })
    }

    const loginContext = (
      <>
          <p>Witamy ponownie! Zaloguj się do swojego konta i wypożyczaj książki</p>
          {isError &&
              <Alert variant="danger">
                  Nieprawidłowe hasło lub E-mail!
              </Alert>}
          <div className={styles.floatingLabel}>
              <input placeholder="E-mail" type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off" required />
              <label htmlFor="email">E-mail: </label>
              <div className={styles.icon}>
                  <svg enableBackground="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(0 -952.36)">
                          <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
                      </g>
                      <rect className={styles.st0} style={{ fill: 'none' }} width="100" height="100" />
                  </svg>

              </div>
          </div>
          <div className={styles.floatingLabel}>
              <input placeholder="Hasło" type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} autoComplete="off" required />
              <label htmlFor="password">Hasło: </label>
              <div className={styles.icon}>
                  <svg enableBackground="new 0 0 24 24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <rect className={styles.st0} style={{ fill: 'none' }} width="24" height="24" />
                      <path className={styles.st1} style={{ fill: '#010101' }} d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
                      <path className={styles.st1} style={{ fill: '#010101' }} d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z" />
                      <path className={styles.st1} style={{ fill: '#010101' }} d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z" />
                  </svg>
              </div>
          </div>
          <button className={styles.action} type="submit">Zaloguj się</button>
          <span onClick={() => { setIsShowForgot((prevState) => !prevState) }} className={styles.discrete}>Zapomniałeś hasła?</span>
      </>
  );

  const forgotContext = (
      <>
          <p>Aby zresetować hasło, wpisz poniżej swój adres e-mail. Do którego zostanie wysłana wiadomość z instrukcją, jak ponownie uzyskać dostęp.</p>
          <div className={styles.floatingLabel}>
              <input placeholder="E-mail" type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off" required/>
              <label htmlFor="email">E-mail: </label>
              <div className={styles.icon}>
                  <svg enableBackground="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(0 -952.36)">
                          <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
                      </g>
                      <rect className={styles.st0} style={{ fill: 'none' }} width="100" height="100" />
                  </svg>
              </div>
          </div>
          <div className={`${styles.buttonSpace} mb-3`}>
              <button className="me-2" onClick={() => { setIsShowForgot((prevState) => !prevState) }} type="button">Anuluj</button>
              <button className={styles.action} onClick={sendEmailHandler} type="button">Wyślij</button>
          </div>
      </>
  );


  return (
    <div className={styles.login}>
            <div className={styles.session}>
                <div className={styles.left}>
                </div>
                <form onSubmit={handleLogin}>
                    <h4>Biblioteka</h4>
                    {!isShowForgot ? loginContext : forgotContext}
                </form>
            </div>
        </div>
  )
}

export default Login