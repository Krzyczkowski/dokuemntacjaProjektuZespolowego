---
sidebar_position: 1
---

# Stacje

## Endpoint zwracający wszystkie stacje PKP w Polsce

 Metoda HTTP/Ścieżka: 
> **GET**: `/api/pkp/stops`

nazwa_miasta - nazwa miasta w którego przystanki chcemy pobrać

**Body : `JSON`**

Wartości zwracane:
```json
[{ "stop_id": "12369", "stop_name": "Pisz", "stop_lat": "53.63182419077", "stop_lon": "21.79292007566", "stop_IBNR": "436"}, (...)]
```
Opis wartości:
```
stop_id - id stacji 
stop_name - nazwa stacji
stop_lat - szerokość geograficzna stacji
stop_lon - wysokośc geograficzna stacji
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```