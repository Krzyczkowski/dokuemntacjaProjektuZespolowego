---
sidebar_position: 1
---

# Miasta

## Endpoint zwracający nazwy miast obsługiwanych przez nasze API ZTM

 Metoda HTTP/Ścieżka: 
> **GET**: `/api/ztm/cities`
>**Wymagany nagłówek autoryzacji z tokenem JWT**
## Wartości zwracane:

**Body : `JSON`**
```json
[ "warszawa", "gdansk" ]
```
Opis wartości:
```
Lista nazw miast z ZTM które obsługujemy.
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```