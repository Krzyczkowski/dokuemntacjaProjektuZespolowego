---
sidebar_position: 1
---

# Pociągi

## Endpoint zwracający informacje o pociągach

 **Zwraca tylko ograniczoną ilość (100) obiektów, które przejechały dzisiaj najdłuższy dystans.**

 Metoda HTTP/Ścieżka: 
> **GET**: `/api/pkp/trains/getBest`

## Wartości zwracane:

**Body : `JSON`**
```json
[ 
 {   
    "id": "38100 Górski",
    "name": "38100 Górski",
    "line": "?",
    "status": "W DRODZE",
    "distanceTraveled": 790996,
    "scheduleList": 
    [
     { "arrival_time": "15:29:00", "estimatedTime": "15:32:00", "official_dist_traveled": "799246", "StopName": "Dobiegniew" },
     { "arrival_time": "16:09:00", "estimatedTime": "16:10:00", "official_dist_traveled": "831335", "StopName": "Choszczno" },
       (...)        
    ], 
     "lastStopSchedule": { "arrival_time": "14:53:00", "estimatedTime": "14:57:00", "official_dist_traveled": "776323", "StopName": "Krzyż" } 
  },
(...)
]
```
Opis wartości:
```
id - id pociągu
name - nazwa pociągu
line - wartość na razie nie obsługiwana
status - status pociągu "NA STACJI"/"W DRODZE"/"KONIEC"
distanceTraveled - dystans przebyty w tym momencie (w metrach)
scheduleList - lista przyszłych przyjazdów na stacje, gdzie:
     arrival_time - czas przyjazdu
     estimatedTime - czas odjazdu
     official_dist_traveled - oficjalny dystans przebyty przez pociąg już na stacji (w metrach)
     StopName - nazwa przystanku
lastStopSchedule: ostatnio odwiedzona przez pociąg stacja, parametry takie jak w scheduleList
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```
## Endpoint zwracający informacje o statystykach


 Metoda HTTP/Ścieżka: 
> **GET**: `/api/pkp/trains/info`

## Wartości zwracane:
```json
{ 
     "averageSpeed": "23.22261724806004",
     "arrivalsToday": "3770",
     "arrivalsMaxToday": "6868",
     "arrivalsInMonth": "220948" 
}
``` 
Opis wartości:
```
averageSpeed - średnia prędkość wszystkich pociągów w metrach na sekundę
arrivalsToday - ilość dzisiejszych (obecnie) przyjazdów na stację
arrivalsMaxToday - ilość wszystkich dzisiejszych przyjazdów na stację
arrivalsInMonth - ilość przyjazdów w tym miesiącu
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```