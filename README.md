# food hub

[![Build Status](https://travis-ci.org/Cavdy/food-hub.svg?branch=order-api-test)](https://travis-ci.org/Cavdy/food-hub)

[![Maintainability](https://api.codeclimate.com/v1/badges/2125ffc869ccec6424a4/maintainability)](https://codeclimate.com/github/Cavdy/food-hub/maintainability)

## Getting Started

## Clone the Repository.

https://github.com/Cavdy/food-hub.git

## Prerequisites

- Node v10.15.0 or above
- Npm v6.4 or above

## Endpoints

<table>
<tr>
    <th>HTTP VERB</th>
	<th>ENDPOINT</th>
	<th>FUNCTIONALITY</th>
</tr>
<tr>
	<td>GET</td>
	<td>api/v1/meals/</td>
	<td>Caterers can get all meals options they uploaded</td>
</tr>
<tr>
	<td>GET BY ID</td>
	<td>api/v1/meals/:mealId</td>
	<td>Caterers can get meal by Id</td>
</tr>
<tr>
	<td>POST</td>
	<td>api/v1/meals/</td>
	<td>Catereres can add meal options linked to their account</td>
</tr>
<tr>
	<td>PUT</td>
	<td>api/vi/meals/:mealId</td>
	<td>Caterers can update their meal options</td>
</tr>
<tr>
	<td>DELETE</td>
	<td>api/v1/meals/:mealId</td>
	<td>Caterers can delete their meal options</td>
</tr>
<tr>
	<td>GET</td>
	<td>api/v1/menu/</td>
	<td>Caterers and Users can Get the menu for the day </td>
</tr>
<tr>
	<td>POST</td>
	<td>api/v1/menu/</td>
	<td>Caterers can Set a menu for the day</td>
</tr>
<tr>
	<td>GET</td>
	<td>api/v1/orders</td>
	<td>Get All Orders</td>
</tr>
<tr>
	<td>GET BY ID</td>
	<td>api/v1/orders/:orderId</td>
	<td>Get Order by Id</td>
</tr>
<tr>
	<td>POST</td>
	<td>api/v1/orders</td>
	<td>Users can make orders</td>
</tr>
<tr>
	<td>PUT</td>
	<td>api/v1/orders/:orderId</td>
	<td>Caterers/Users can modify their orders</td>
</tr>
<tr>
	<td>DELETE</td>
	<td>api/v1/orders/:deleteId</td>
	<td>Caterers/Users can delete their orders</td>
</tr>
</table>

## Installation

**On your Local Machine**

- Pull the [develop](https://github.com/Cavdy/food-hub.git) branch off this repository
- Run `npm install` to install all dependencies
- Run `npm run start` to start the app
- Access endpoints on **localhost:5900**

## Running the tests

Run `npm run test` in the terminal for the cloned folder.

## Built With

- [Node.js](http://www.nodejs.org/) - Runtime-Enviroment

## GitHub Url Pages

URL: https://cavdy-play.github.io/food-hub/

## Heroku Link

URL: https://food-hub-api.herokuapp.com

## Trello board

URL: https://trello.com/b/RdOs7r30/book-a-meal

## Authors

- **Isaiah Ikenna Franklin**
