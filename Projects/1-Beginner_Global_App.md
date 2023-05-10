# Global Time Zone App
Geographical maps can be a great way to present a global view of where data applies to different countries and regions. 
There are a number of third-party tools and libraries that can be used to help create these maps such as Basemap, Cartopy as well as Geopandas and Geoplot. 
This article will show how to use Geopandas to display a world map showing countries with higher Under Five Mortality Rates in darker colors.

**Tier:** 1-Beginner

The Global Time & Date can be presented through different Programming languages such as Pyhton, Java, C++, etc.

## Using Python

- [ ] Pygal is a Python module that is mainly used to build SVG (Scalar Vector Graphics) graphs and charts. 
- [ ] We might want to plot the World Map with country wise boundaries and might even want to represent or differentiate countries on a geographical basis or based on some data in our project.

## Installation

- [ ] pip install pygal_maps_world

## Syntax

- worldmap =  pygal.maps.world.World()

## Sample Code (Note: This is not a whole code, use logic before moving ahead)

import pygal
worldmap =  pygal.maps.world.World()
worldmap.title = 'Countries'
worldmap.add('Random Data', {
        'aq' : 10,
        'cd' : 30,
        'de' : 40,
        'eg' : 50,
        'ga' : 45,
        'hk' : 23,
        'in' : 70,
        'jp' : 54,
        'nz' : 41,
        'kz' : 32,
        'us' : 66
})
worldmap.render_to_file('abc.svg')
print("Success")

## Example projects

- [ Plotting Countries Based on Data.](https://www.geeksforgeeks.org/plotting-world-map-using-pygal-in-python/) by [GeeksforGeeks]
- [World Time Clock & Map With jQuery And Bootstrap](https://www.jqueryscript.net/time-clock/World-Time-Clock-Map-App.html)
- 
