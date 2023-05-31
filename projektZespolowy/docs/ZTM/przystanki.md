---
sidebar_position: 1
---

# Przystanki

## Endpoint zwracający wszystkie przystanki dla danego miasta

 Metoda HTTP/Ścieżka: 
> **GET**: `/api/ztm/{nazwa_miasta}/displays`

nazwa_miasta - nazwa miasta w którego przystanki chcemy pobrać

**Body : `JSON`**

Wartości zwracane:
```json
[ { 
	"displayCode": "1001",
	"city": "Warszawa",
	"originalName": "Kijowska",
	"name": "Kijowska",
	"type": "T",
	"drivingDirection": "al.Zieleniecka",
	"idStop1": 1,
	"idStop2": 3,
	"idStop3": 5,
	"idStop4": 0 
  },(...)}]
```
Opis wartości:
```
displayCode - id zespołów przystanków 
city - miasto w którym dany przystanek się znajduje
orginalName oraz name - nazwa przystanku
type - rodzaj przystanku, możliwe wartości:
	T - tramwaje
	A - autobusy
	TA - tramwaje i autobusy
	? - nie znany typ 
drivingDirection - nazwa następnego przystanku 
idStop1...4 - id pojedyńczych przystanków należących do danej kolecji, gdzie 0 to brak przystanku
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```

## Endpoint zwracający wyłącznie nazwy wraz z id zespołu przystanków

 Metoda HTTP/Ścieżka: 
> **GET**: `/api/ztm/displays/{nazwa_miasta}`
>**Wymagany nagłówek autoryzacji z tokenem JWT**
nazwa_miasta - nazwa miasta w którego przystanki chcemy pobrać




## Wartości zwracane:

**Body : `JSON`**
```json
 { 
	"Budapesztańska": [ "512", "513", "514", "515" ],
	"Piekarnicza": [ "500", "501" ],
	"Siedlce": [ "523", "521", "522", "520", "482" ],
	 (...)
  }
```
Opis wartości:
```
wartości zwracane w formacie:
"nazwa_przystanku" : [lista displayCode]
gdzie displayCode to id zespołu przystanków
```
Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request - podano złe wartości.
401 Unauthorized – brak autoryzacji.
```