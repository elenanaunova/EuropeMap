# EuropeMap

# Improvements

The user can recognise and guess the cities according to famous landmarks in that city. Instead of showing the pointer when clicking on the map, an icon of the landmark will be shown and the user has to drop it on the map.

# Design decision

I have used:
 - Change detection when new city has to be guessed
 - Flat folder structure in order to locate the code quickly and not overcomplicate things
 - One thing per file (such as Service/Component etc.)
 - Small functions to be easier to read, maintain and change the code
 - Communication between components with @Input() and @Output() decorators
 - Implementing lifecycle hook interfaces
