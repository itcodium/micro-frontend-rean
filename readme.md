# Steps

1. If using SystemJS + import maps, change the URL of single-spa in your import map:

2. In all your microfrontends (including root config), upgrade single-spa:
npm install single-spa@6


# Layout Engine

Installation
You only need to install the layout engine into your root config (not in any other application).

    npm install --save single-spa-layout
