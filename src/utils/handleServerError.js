export default function handleServerError(status) {

  if (status == "Error: 409") {
    return "Пользователь с таким email уже существует.";
  } else if (status === "Error: 401") {
    return "Вы ввели неправильный логин или пароль.";
  } else if (status === "Error: 500") {
    return "На сервере произошла ошибка.";
  }
  return 1;
}
