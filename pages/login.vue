<template>
  <div class="login__page">
    <div class="header__container">
      <button @click="$router.push('/')">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button @click="$router.push('/')">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="mx-auto login__container" max-width="240">
      <div class="logo">
        <img src="../static/DOIT.png" alt="logo" />
      </div>
      <h1 v-if="!isForgotPassword && !isSignUp && !nextStep">Login</h1>
      <h1 v-if="isSignUp">Sign up 1/2</h1>
      <h1 v-if="nextStep">Sign up 2/2</h1>
      <h1 v-if="isForgotPassword">Forgot password</h1>
      <form class="login__form" @click.prevent>
        <BaseInput
          v-if="nextStep"
          label="Username"
          autocomplete="off"
          type="text"
          placeholder="BestPlayerInTheWorld2020"
          emitFunction="updateName"
          @updateName="updateName"
        />
        <BaseInput
          v-if="!isSignUp && !nextStep"
          label="Username or Email"
          autocomplete="off"
          type="email"
          placeholder="google@gmail.com"
          emitFunction="updateEmail"
          @updateEmail="updateEmail"
        />
        <BaseInput
          v-if="isSignUp && !nextStep"
          label="Email"
          autocomplete="off"
          type="email"
          placeholder="google@gmail.com"
          emitFunction="updateEmail"
          @updateEmail="updateEmail"
        />
        <BaseInput
          v-if="!isForgotPassword && !nextStep"
          label="Password"
          type="password"
          emitFunction="updatePassword"
          @updatePassword="updatePassword"
        />
        <BaseSelect v-if="nextStep" :options="cities" label="Country" />
        <BaseCalendar
          v-if="nextStep"
          label='Date'
          @updateDate="updateDate"
          />
        <button v-if="!isForgotPassword && !isSignUp && !nextStep" class="login__btn" @click="login">Login</button>
        <button v-if="isForgotPassword" class="login__btn" @click="forgotPassword">Reset password</button>
      </form>
      <div v-if="nextStep" class="terms">
          <BaseCheckbox @updateCheckbox="updateCheckbox" />
          <p>I’m have at least 13 years of age and agree to the <a href="#">terms of service</a></p>
        </div>
        <button v-if="isSignUp" class="login__btn" @click="setNextStep">Next step</button>
        <button v-if="nextStep" class="login__btn" @click="createAccount" :disabled="!terms">Create an account</button>
        
      <div v-if="!isForgotPassword && !nextStep" class="login__section">
        <p>or login with</p>
        <div class="socials__container">
          <a href="#"><img src="../static/socials/facebook.png" alt="facebook"></a>
          <a href="#"><img src="../static/socials/blizard.png" alt="blizard"></a>
          <a href="#"><img src="../static/socials/google.png" alt="google"></a>
          <a href="#"><img src="../static/socials/steam.png" alt="steam"></a>
        </div>
      </div>
      <div class="register__section">
        <a v-if="!isForgotPassword && !isSignUp && !nextStep" @click="changePassword(true)">
          Forgot password?
        </a>
        <a v-if="isSignUp && !nextStep" @click="isSignUp = false; snackbar = false; success = false">
          Already have an account?
        </a>
        <a v-if="isForgotPassword" @click="changePassword(false)">
          Back to login
        </a>
        <p v-if="!isForgotPassword && !isSignUp && !nextStep">Don't have an account?
          <a @click="isSignUp = true; snackbar = false; email = ''; password = ''">
          Sign up!
        </a>
        </p>
      </div>
    </div>
    <BaseNotification 
      :message="message"
      :color="color"
      :canShow="snackbar"
    />
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  layout: 'login',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      isForgotPassword: false,
      snackbar: false,
      message: '',
      color: '',
      success: false,
      isSignUp: false,
      nextStep: false,
      country: 'Ukraine',
      birthDate: '',
      terms: false,
      cities: ["USA", "Ukraine", "Russia", "China", "Japan", "1", "2", "3", "4", "5", "6", "7", "8", "9", ]
    }
  },
  watch: {
  },
  mounted() {
    // console.log(firebase);
  },
  methods: {

    updateCheckbox(data) {
      this.terms = !data;
    },

    updateDate(date) {
      console.log(date);
      this.birthDate = date;
    },

    setNextStep() {
      if (this.password !== '' && this.email !== '') {
        this.nextStep = true;
        this.isSignUp = false;
      } else {
        this.snackbar = true;
      }
    },

    createAccount() {
      if (this.email !== '' && this.password !== '' && this.name !== '' && this.terms) {
        try {
          this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {

              firebase.database().ref('users').child(user.user.uid).set({
                id: user.user.uid,
                email: this.email,
                name: this.name,
                country: this.country,
                birthDate: new Date(this.birthDate).toDateString(),
                registrationDate: new Date().toDateString(),
                nickname: '',
                sex: '',
                age: '',
                nationality: this.country,
                website: '',
                level: 0,
                awards: [
                  {
                    game: "StarCraft II",
                    level: 13
                  },
                  {
                    game: "Hearthstone",
                    level: 4
                  },
                  {
                    game: "World of Tanks",
                    level: 8
                  },
                  {
                    game: "CS:GO",
                    level: 10
                  },
                ]
              }).then(() => {
                this.$router.push({path: '/profile'})
                
              })
              .catch(err => console.error(err.message))

            })
        } catch(err) {
          console.error(err.message);
        }
      } else {
        alert('something went wrong')
      }
    },

    changePassword(val) {
      if (val === true) {
        this.isForgotPassword = true;
        this.email = '';
        this.snackbar = false;
      }
      else {
        this.isForgotPassword = false;
        this.email = '';
        this.snackbar = false;
      }
    },

    updateName(data) {
      if (data) {
        this.name = data;
      }
    },

    updatePassword(data) {
      if (data) {
        this.password = data;
      }
    },
    
    updateEmail(data) {
      if (data) {
          this.email = data;
      }
    },

    login() {
      this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
            .then((user) => {
              if (user) {
                this.snackbar = true
                this.color = 'success'
                this.$router.push({path: '/profile'})
              }
            })
          .catch((e) => {
            this.snackbar = true
            this.color = 'red'
            console.error(e.message);
          })
    },

    forgotPassword() {
      this.$fire.auth.sendPasswordResetEmail(this.email)
        .then(() => {
          // this.message = 'Reset link sent to ' + this.email
          this.snackbar = true;
          this.color = 'success'
        })
        .catch((e) => {
          console.error(e.message);
          this.snackbar = true;
          this.color = 'red'
        })
    }
  }
}
</script>


<style lang="scss" scoped>


*a {
  text-decoration: underline;
  color: -webkit-link;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}

.error__message {
  color: red;
}

.login__page {
  
  // position: absolute;
  min-height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0b1729;
  color: white;
  .header__container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    button {
      margin: 24px;
      i {
        cursor: pointer;
        color: rgba(28, 47, 77, 1);
        font-size: 32px;
        margin: 8px;
        &:hover {
          color: rgba(98, 124, 163, 1);
        }
      }
    }
  }
  .login__container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 240px;
    h1 {
      margin-bottom: 30px;
      &:nth-child(2) {
        width: 270px;
        text-align: center;
      }
    }
    .logo {
      margin-bottom: 40px;
      img {
        height: 88px;
      }
    }
    .login__form {
      display: flex;
      flex-direction: column;
      width: 100%;
      .select__group {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 15px;
        label {
            font-size: 14px;
            margin-bottom: 5px;
        }
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;

          background: url('@/static/arrow_down.png') no-repeat;
          background-position: 95% !important;
          width: 240px;
          height: 40px;
          padding-left: 15px;
          outline: none;
          border: 1px solid #142f57;
          border-radius: 2px;
          color: rgba(98, 124, 163, 1);
          option {
            color: rgba(98, 124, 163, 1);
            
          }
          
        }
      }
      .birth {
        label {
          font-size: 14px;
        }
        .inputs__group {
          margin-top: 5px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          input {
            text-align: center;
            padding: auto;
            outline: none;
            color: rgba(98, 124, 163, 1);
            width: 72px;
            height: 40px;
            border-radius: 2px;
            border: 1px solid #142f57;
            &::placeholder {
              color: rgba(98, 124, 163, 1);
              text-align: center;
            }
          }
        }
      }
      
    }
    .terms {
      display: flex;
      align-items: center;
      width: 98%;
      margin: 16px 0 22px;
      input {
        margin-right: 16px;
      }
      p {
        color: #627CA3;
        width: 185px;
        font-size: 12px;
        a {
          text-decoration: none;
        }
      }
    }
    .login__btn {
        background: linear-gradient(180deg, #2788F6 0%, #0960E0 100%);
        border-radius: 2px;
        width: 240px;
        height: 40px;
        opacity: 1;
        transition: opacity ease .5s;
        &:hover {
          transition: opacity ease .5s;
          opacity: .7;
        }
      }
    .login__section {
      width: 100%;
      p {
        margin: 30px 0 16px;
        text-align: center;
        color: #627CA3;
      }
      .socials__container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 85%;
        margin: 0 auto;
        a {
          border: 1px solid #16263D !important;
          border-radius: 2px;
          width: 24px;
          height: 24px;
          padding: 20px;
          border: 1px solid;
          display: flex;
          justify-content: center;
          align-items: center;
          color: transparent;
          img {
            width: 24px;
          }
        }
      }
    }
    .register__section {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      color: #627CA3;
      a {
        margin: 0 auto 12px;
      }
    }
  }
}
</style>