---
sidebar_position: 1
---

# Rejestracja użytkownika

Wymagane dane i sposób rejestracji użytkownika do serwisu.

## Endpoint

 Metoda HTTP/Ścieżka: 
> **POST**: `/api/auth/signup`

**Body : `JSON`**

Parametry przykładowego zapytania:
```
{
	"username": "imie",
	"email": "poczta@poczta.pl",
	"password": "haslo", 
	"roles": ["user"] 
}
```
Wartości zwracane:

`message` - informacja z rezultatem na request
Wartości message:
* "Error: Email is already in use!" - email zajęty przez innego użytkownika
* "Error: Username is already taken!" - zajęta mazwa uzytkownika
* "rawPassword cannot be null" - brak hasła w zapytaniu


Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request – Przesłane dane rejestracji są nieprawidłowe.
```