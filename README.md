## Ractive Dataz

a really shitty chrome extension I use to debug stuff.

I guess I'll improve it "soon" :)

### Requirements

you need to have `Ractive` as a global variable in the website you're debugging.

### global variable `ractive_infoz`

because the expression handler doesn't allow me to create local variables,
I assign `Ractive.getNodeInfo($0)` to this variable. it's useful. sorry about
the pollution.

#### origin

I forget where I found the original code. credit to this unknown person :)

updated to use `Ractive.getNodeInfo` for 0.8 support
