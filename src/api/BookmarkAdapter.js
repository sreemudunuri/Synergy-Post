const API_URL = 'http://localhost:3000/api/v1';

export default class BookmarkAdapter {
  static getToken() {
    return localStorage.getItem('token');
  }

  static isLoggedIn() {
    return !!BookmarkAdapter.getToken();
  }

  static getBookmarks() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": BookmarkAdapter.getToken(),
      },
    };

    return fetch(`${API_URL}/users`, config)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Failed to aceess your page')
      })
      .catch(err => {
        console.warn(`Failed to fetch news.`, err);
        return [];
      });
  }

  static postLogin(email, password) {
    const config = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({ email, password })
    };

    return fetch(`${API_URL}/login`, config)
      .then(res => res.json());
  }

  static postRegistration(email, password) {
    const config = {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({ email, password })
    };

    return fetch(`${API_URL}/users`, config)
      .then(res => res.json());
  }
}
