---
sidebar_position: 2
---

# Czasy przyjazdów

Endpointy zwracający wszystkie przyjazdy dla danego przystanku

## Endpoint czasów przyjazdów
 Metoda HTTP/Ścieżka: 
> **GET**: `/api/ztm/{nazwa_miasta}/info/{displayCode}`
>**Wymagany nagłówek autoryzacji z tokenem JWT**

Wartości przyjmowane:

nazwa_miasta - nazwa miasta w którego przystanki chcemy pobrać
displayCode - id zespołu przystanku



## Wartości zwracane:

**Body : `JSON`**
<p>	Warszawa:</p>

```json
{ "departures": [ {"estimatedTime": "10:45:00", "headsign": "Utrata", "tripId": "138" }, (....) ]}
```
Gdańsk:
```json
{
  "displaycode": "20",
  "name": "Oliwa",
  "departures": [
    {
      "id": "T52R6",
      "delayInSeconds": -24,
      "estimatedTime": "2023-05-11T08:48:35Z",
      "headsign": "Łostowice Świętokrzyska",
      "routeId": 6,
      "scheduledTripStartTime": "2023-05-11T08:37:00Z",
      "tripId": 52,
      "status": "REALTIME",
      "theoreticalTime": "2023-05-11T08:49:00Z",
      "timestamp": "2023-05-11T08:46:22Z",
      "trip": 6145271,
      "vehicleCode": "1085",
      "vehicleId": 145834,
      "vehicleService": "006-08",
      "StopID": 2046
    },
```
Opis wartości:
```
estimatedTime - planowany czas przyjazdu 
headsign - 
city - miasto w którym dany przystanek się znajduje
orginalName oraz name - nazwa przystanku
type - rodzaj przystanku, możliwe wartości:
	T - tramwaje
	A - autobusy
	TA - tramwaje i autobusy
	? - nieznany typ 
drivingDirection - nazwa następnego przystanku 
idStop1...4 - id pojedyńczych przystanków (słupków) należących do danej kolecji, gdzie 0 to brak przystanku
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```
