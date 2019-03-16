# Countries

# Description
Countries is a RESTful API for adding, retrieving and deleting country list. It's aimed to showcase building RESTful API with data structures.

# Table of Contents
<ul>
            <li>
                <a href="#Technologies">Technologies</a>
            </li>
            <li>
                <a href="#Features">Features</a>
            </li>
          <li>
                <a href="#Installations">Installation</a>
            </li>
        </ul>
        
# Technologies
<ul>
<li>Nodejs (Express framework)</li>
  </ul>

# Features
<ul>
<li>Users Login</li>
<li>Post country</li>
<li>Get Country</li>
<li>Delete Country</li>
</ul>

# Getting Started
# Installation
<ul>
<li>git clone https://github.com/akinyeleolat/countries.git</ul>
<li>cd countries</li>
<li>git checkout develop</li>
<li>run npm install</li>
<li>Set environment variables
<ul>
<li>PORT</li>
<li>SECRET_KEY</li>
<li>USER</li>
<li>PASSWORD</li>
</ul>
</li>
<li>run npm start</li>
</ul>

# Test with Postman
<ul>
<li>install POSTMAN app</li>
<li>navigate to localhost:PORT/endpoints on POSTMAN</li>
<li>Request body for Login is username AND password while for POST and DELET is countryName</li>
<li>Request header token must be set to access all the routes except login</li>
<li>
</ul>

# API Endpoint Route
Currently,
<table>
  <tr>
    <td>HTTP VERB</td>
    <td>ENDPOINT</td>
    <td>TASK</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>api/login/</td>
    <td>User Login</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>api/countries</td>
    <td>Add Country to the list</td>
  </tr>
   <tr>
    <td>GET</td>
    <td>api/countries</td>
    <td>Get All Country</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>api/countries</td>
    <td>Delete a specific country base on the name</td>
  </tr>
  </table>
  
# Author
Akinyele Oluwatosin