'use strict';
let users = {
  hack() {
      for(let key in users) {
          console.dir(`${key}: ${users[key]}`);
      }
  }
};

// скрытие метода hack объекта users от самого hack
Object.defineProperty(users, 'hack', {
  writable: true,
  configurable: true,
  enumerable: false
});

let data = () => {
  return ([
    (prompt('Введите ваше имя', '') || 'Аноним'),
    (prompt('Ваш возраст?', '') || 0),
    (prompt('Ваш гендер?', '') || 'бисексуал'),
    prompt('Пароль?', '')
  ]);
};

class User {
  constructor(name, age, sex, isAdmin) {
    this.name = name;
    this._isAdmin = (isAdmin === 'StarCraft II') ? true : false;
    this.age = age;
    this.sex = sex;
    this._id = Math.random().toString(36).slice(4);
    users[this._id] = this;
    this._activity = 'chill';
  }
  
  update() {
    name.textContent = this.name;
    age.textContent = `Возраст: ${this.age}`;
    sex.textContent = `Пол: ${this.sex}`;
    admin.textContent = (this._isAdmin) ? 'Администратор' : null;
    id.textContent = 'id: ' + this._id;
  }
  
// setId('vmnrp8y3v') - присваивание id для this.
  setId(newId) {
    console.dir(`Id пользователя ${this.name} с id ${this._id} изменён на ${newId}`);
    delete users[this._id];
    this._id = newId;
    users[this._id] = this;
  }

/* s: Флексочильные методы */
  flex() {
    this._activity = 'flex';
    console.dir(`${this.name} флексит!`);
  }
  chill() {
    this._activity = 'chill';
    console.dir(`${this.name} чиллит!`);
  }

/* toString переводит user'a в строку типа:
   имя: Богдан, возраст: 13, админ: true
*/
  toString() {
    return `имя: ${this.name}, возраст: ${this.age}, пол: ${this.sex}, админ: ${this._isAdmin}`;
  }
}

User.getId = (user) => {
  console.dir(`Id пользователя ${user.name} - ${user._id}`);
}

User.randId = (user) => {
  let setNewId = () => Math.random().toString(36).slice(4);
  let newId = setNewId();
  if (users[newId]) newId = setNewId();
  console.dir(`Id пользователя ${user.name} с id ${user._id} изменён на ${newId}`);
  delete users[user._id];
  user._id = newId;
  users[user._id] = user;
}

let register = document.querySelector('.register');
let name = document.querySelector('.name');
let age = document.querySelector('.age');
let sex = document.querySelector('.sex');
let admin = document.querySelector('.admin');
let id = document.querySelector('.id');
let user;

register.addEventListener('click', () => {
    user = new User(...data());
    user.update();

    // Уязвимость системы :( [(Взлом серверов)]
    users.hack();
})
