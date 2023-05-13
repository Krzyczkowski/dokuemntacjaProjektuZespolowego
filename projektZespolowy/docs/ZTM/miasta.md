---
sidebar_position: 1
---

# Miasta

## Endpoint zwracający nazwy miast obsługiwanych przez nasze API ZTM

 Metoda HTTP/Ścieżka: 
> **GET**: `/api/ztm/cities`

nazwa_miasta - nazwa miasta w którego przystanki chcemy pobrać

**Body : `JSON`**

Wartości zwracane:
```json
[ "warszawa", "gdansk" ]
```
Opis wartości:
```
Lista nazw miast
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```