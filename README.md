Negative Risk Annotation Plugin for Chrome
==========================================

This Chrome extension adds an annotation to linked markets on PredictIt to tell you
whether they are a good candidate for negative risk purchasing.  NOTE: this extension
ignores individual trades selling for more than 97¢, so factor that into your purchases.
![PredictIt Linked Market Example](linked-market-example.png)

Installation
============

1. Download the latest extension [here](https://github.com/phaedrus1992/pi/releases) and unzip it somewhere permanent.
2. Go to the [⠇ -> More Tools -> Extensions](chrome://extensions) menu.
3. Click the "Developer mode" button.
4. Click the "Load unpacked extension..." button and select the folder you unpacked the PredictIt extension into.
5. Make sure "Enabled" is checked.

Usage
=====

Browse to any linked Market page on PredictIt.  You will see one of three markers appear next to the "refresh" button:

* ❌ = Bad Bet (there is no potential to make money by buying all shares)
* 😐 = Mixed Bet (it is possible to win or lose money depending on the outcome)
* ✅ = Good Bet (no matter the outcome, you will make money)

Hover your mouse over the icon to see the potential gain or loss.