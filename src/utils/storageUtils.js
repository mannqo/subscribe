import store from 'store'
const USER_KEY = 'user_key'

// eslint-disable-next-line
export default {
  saveUser(user) {
    // sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    store.set(USER_KEY, user)
  },
  getUser() {
    // return JSON.parse(sessionStorage.getItem(USER_KEY) || '{}')
    return store.get(USER_KEY) || {}
  },
  removeUser() {
    // sessionStorage.removeItem(USER_KEY);
    store.remove(USER_KEY)
  }
}