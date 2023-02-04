---
sidebar_position: 2
---

# Rejestr decyzji architektonicznych (ADR)

Poniżej przedstawiono opis propozycji decyzji architektonicznych w oparciu o powyższe założenia i doświadczenie zespołu IT.

<table>
  <tr>
    <th>Identyfikator</th>
    <td>A1</td>
  </tr>
  <tr>
    <th>Decyzja</th>
    <td>Programowanie w Java</td>
  </tr>
  <tr>
    <th>Część architektury</th>
    <td>Backend</td>
  </tr>
  <tr>
    <th>Uzasadnienie</th>
    <td>Zespół ma największe doświadczenie w tym języku, ma bardzo wiele dostępnych bibliotek ułatwiających pracę z formatem JSON oraz świetną obsługę strumieni, co będzie ważną kwestią, jeżeli chodzi o filtrowanie informacji.</td>
  </tr>
</table>

<table>
  <tr>
    <th>Identyfikator</th>
    <td>B1</td>
  </tr>
  <tr>
    <th>Decyzja</th>
    <td>Projektowanie komunikacji jako REST API</td>
  </tr>
  <tr>
    <th>Część architektury</th>
    <td>API</td>
  </tr>
  <tr>
    <th>Uzasadnienie</th>
    <td>Połączenie Frontendu i Backendu najlepiej zrealizować w takiej formie ze względu na dużą ilość zapytań o dane. Możliwość łatwego zorganizowania systemu kont i zarządzania nimi.</td>
  </tr>
</table>
<table>
  <tr>
    <th>Identyfikator</th>
    <td>B2</td>
  </tr>
  <tr>
    <th>Decyzja</th>
    <td>JSON jako format przesyłania danych</td>
  </tr>
  <tr>
    <th>Część architektury</th>
    <td>API</td>
  </tr>
  <tr>
    <th>Uzasadnienie</th>
    <td>Z powodu publicznych API które używają tego formatu, najlepiej będzie się w całym projekcie posługiwać nim, aby nie musieć wykonywać rzutowania.</td>
  </tr>
</table>
<table>
  <tr>
    <th>Identyfikator</th>
    <td>A2</td>
  </tr>
  <tr>
    <th>Decyzja</th>
    <td>Zastosowanie Spring-boot</td>
  </tr>
  <tr>
    <th>Część architektury</th>
    <td>Backend</td>
  </tr>
  <tr>
    <th>Uzasadnienie</th>
    <td>Z powodu potrzeby zaprojektowania przejrzystego i rozbudowanego REST API, przy którym potrzebujemy prawidłowo skonfigurowanych zależności.</td>
  </tr>
</table>
<table>
  <tr>
    <th>Identyfikator</th>
    <td>A3</td>
  </tr>
  <tr>
    <th>Decyzja</th>
    <td>MongoDB</td>
  </tr>
  <tr>
    <th>Część architektury</th>
    <td>Baza danych</td>
  </tr>
  <tr>
    <th>Uzasadnienie</th>
    <td>Duży stopień trudności w ustrukturyzowaniu danych potrzebnych w aplikacji oraz szybsze przeszukiwanie danych, wszystko zapisane jako JSON, większa przejrzystość bazy.</td>
  </tr>
</table>
<table>
  <tr>
    <th>Identyfikator</th>
    <td>A4</td>
  </tr>
  <tr>
    <th>Decyzja</th>
    <td>Użycie VueJS 3.0</td>
  </tr>
  <tr>
    <th>Część architektury</th>
    <td>Frontend</td>
  </tr>
  <tr>
    <th>Uzasadnienie</th>
    <td>Lekkość i elastyczność tego frameworku pozwala na sprawną organizacje CSS, HTML i JS na przodzie aplikacji, gdzie bardziej zawansowane frameworki były by nieadekwatne do potrzeb.</td>
  </tr>
</table>