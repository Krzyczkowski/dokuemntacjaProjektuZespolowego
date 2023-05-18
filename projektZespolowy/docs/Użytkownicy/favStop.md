---
sidebar_position: 1
---

# Ulubione przystanki


## Dodawanie nowego ulubionego przystanku

 Metoda HTTP/Ścieżka: 
> **POST**: `/api/favorite/stop/add`  


 **Wymagany nagłówek autoryzacji z tokenem JWT**   
**Body : `JSON`**

Parametry przykładowego zapytania:
```json
{
	"cityName": "Bydgoszcz",
	"stopName": "jagielonow",
	"stopIds": ["123","321"], 
	"status": false 
}
```
Opis wartości:
```
cityName - nazwa miasta
stopName - nazwa zespołu przystanku
stopIds  - id's przystanków należących do zespołu
status - status dla urządzenia Raspberry
```

Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request – Przesłane dane rejestracji są nieprawidłowe.
401 Unauthorized – brak autoryzacji.
```









## Pobieranie wszystkich ulubionych przystanków  
 **Wymagany nagłówek autoryzacji z tokenem JWT**   
 Metoda HTTP/Ścieżka: 
> **POST**: `/api/favorite/stop/getAll/by/user`



Wartości zwracane:
```
(todo) Obiekty  
```

Kody błędów:
```
200 OK – Wszystko przebiegło pomyślnie.
400 Bad Request – Przesłane dane rejestracji są nieprawidłowe.
401 Unauthorized – brak autoryzacji.
```