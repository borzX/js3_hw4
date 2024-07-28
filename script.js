/*  Задание 1. Получение данных о пользователе.

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/

Задание 2. Отправка данных на сервер.

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *

// Пример использования функции
const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });

saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

Работа должна быть выполнена с API: https://reqres.in/*/


/* ++++ Задание 1 ++++ */

const url = 'https://reqres.in/api/users?page=2';
const usrId = 7

async function getUserData(usrId) {
  const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Сервер ответил ошибкой');
    }
    return response.json()
}

getUserData(usrId).then((resp) => {
    const result = resp.data.find(x => x.id === usrId);
    if (result == undefined){
      console.log(`Указанный ID:${usrId} не найден`);
    }
    else{
      console.log(result);
    }
        
    }).catch(error => {
      console.log(error.message);
    });;
  

/* ++++ Задание 2 ++++ */

const url2 = 'https://reqres.in/api/users'

const user = {
  "name": "John Doe",
  "last_name": "unknown"
};

async function saveUserData(user) {
  const response = await fetch(url2, {
    method : "POST",
    body : JSON.stringify(user)
  });
    if (!response.ok) {
      throw new Error('Сервер ответил ошибкой');
    }
    return response.json()
}


saveUserData(user)
  .then((dat) => {
    console.log(dat);
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });