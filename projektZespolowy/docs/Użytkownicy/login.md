---
sidebar_position: 2
---

# Logowanie użytkownika

Wymagane dane do zalogowania się użytkownika do serwisu.

## Endpoint
 Metoda HTTP/Ścieżka: 
 >**POST**: `/api/auth/signin`

**Body : `JSON`**
 **Wymagany nagłówek autoryzacji z tokenem JWT** 
 
Parametry przykładowego zapytania:
```json
{
	"username": "imie",
	"password": "haslo", 
}
```

## Token JWT
```
 w Nagłówku Athorization zwracany jest token użytkownika,
 token JWT, który jest wymagany do każdego zapytania API
```


Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie, zwrócono token i dane użytkownika.
400 Bad Request – Przesłane dane uwierzytelniające są nieprawidłowe.
401 Unauthorized – Nie udało się uwierzytelnić użytkownika.
```

