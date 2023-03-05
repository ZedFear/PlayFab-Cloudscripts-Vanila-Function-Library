# PlayFab-Cloudscripts-Vanila-Function-Library
All PlayFab Cloudscript Server API calls turned into separate functions for easier and faster access.

I made this function library with all of the PlayFab server API calls including all of the documentation in the comments for each function. Including parameters.
This means If you paste this into VSCode to work there on your cloudscripts, You can have info and hints for every function with what parameters it needs. This makes the documentation less relevant when working on cloudscripts. But
It also it speeds up the way you make API calls.
instead of getting inventory like this:
var result = server.GetUserInventory({PlayFabId: currentPlayerId});
you can just do this:
GetUserInventory(currentPlayerId);
or this:
var result = GetUserInventory(currentPlayerId);
