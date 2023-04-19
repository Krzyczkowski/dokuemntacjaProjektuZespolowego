---
sidebar_position: 1
---

# Rejestracja użytkownika

Utworzenie nowego użytkownika

## Endpoint
> **POST**: `/api/auth/signup`

**Body : `JSON`**

Przykładowa zawartość body:
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


