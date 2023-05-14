import axios from "axios";

export function isEmpty(obj) {
    if(obj === null || obj === undefined) {
        return true
    } else {
        return Object.keys(obj).length === 0;
    }
}

export function logoutHandler() {
    const instance = axios.create({
        withCredentials: true
    });
    instance.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/logout')
    .then(success => {
    // reload
      window.location.reload()
    })
    .catch(err => {
      alert('error logging out Check connection settings')
    })
  }

