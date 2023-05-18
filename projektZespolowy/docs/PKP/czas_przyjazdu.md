---
sidebar_position: 2
---

# Czasy przyjazdów

Endpointy zwracający wszystkie przyjazdy PKP dla danej stacji 
 
 **Wymagany nagłówek autoryzacji z tokenem JWT** 
## Endpoint czasów przyjazdów
 Metoda HTTP/Ścieżka: 
> **GET**: `/api/pkp/stops/{stop_id}`     
 **przykład**: `/api/pkp/stops/12369`     




*stop_id* - id stacji 


## Wartości zwracane:

**Body : `JSON`**
```json
[{ 
  "stop_id": "12369",
  "route_id": "TLK",
  "service_id": "2023-05-08",
  "arrival_time": "15:47:30",
  "estimatedTime": "15:54:30",
  "tripId": "I",
  "headsign": "Gdynia Główna",
   "trip_short_name": "15102 Biebrza"
}, (...))]
```
Opis wartości:
```
stop_id - id stacji
route_id - nazwa linii kolejowych
service_id - dzien
arrival_time - czas przyjazdu
estimatedTime - czas odjazdu
tripId - peron
headsign - kierunek 
trip_short_name = nazwa pociągu
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```
