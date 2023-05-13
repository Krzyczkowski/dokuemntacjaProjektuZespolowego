---
sidebar_position: 2
---

# Czasy przyjazdów

Endpointy zwracający wszystkie przyjazdy PKP dla danej stacji 

## Endpoint czasów przyjazdów
 Metoda HTTP/Ścieżka: 
> **GET**: `/api/pkp/stops/{stop_id}`

**Body : `JSON`**


Wartości zwracane:

```json
[{ 
  "stop_id": "12369",
  "route_id": "TLK",
  "service_id": "2023-05-08",
  "arrival_time": "15:47:30",
  "departure_time": "15:54:30",
  "platform": "I",
  "trip_headsign": "Gdynia Główna",
   "trip_short_name": "15102 Biebrza"
}, (...))]
```
Opis wartości:
```
stop_id - id stacji
route_id - nazwa linii kolejowych
service_id - dzien
arrival time - czas przyjazdu
departure time - czas odjazdu
platform - peron
trip_headsign - kierunek 
trip_short_name = nazwa pociągu
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```
