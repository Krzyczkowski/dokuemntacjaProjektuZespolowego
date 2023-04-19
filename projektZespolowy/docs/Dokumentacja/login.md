---
sidebar_position: 2
---

# Logowanie użytkownika

Logowanie użytkownika do serwisu

## Endpoint
> **POST**: `/api/auth/signup`

**Body : `JSON`**

Przykładowa zawartość body:
```
{
	"username": "imie",
	"password": "haslo", 
}
```
Wartości zwracane:

* `id` - id użytkownika
* `username` - nazwa użytkownika
* `email` - email użytkownika
* `roles` - uprawnienia użytkownika



