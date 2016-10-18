Negative Risk Annotation Plugin for Chrome
==========================================

This Chrome extension adds an annotation to linked markets on PredictIt to tell you if they are a good candidate for negative risk purchasing.  NOTE: by default, this extension ignores individual trades selling for more than 97¢.  To change this, see the "Options" in the extension.

![PredictIt Linked Market Example](linked-market-example.png)

Installation
============

1. Download the latest extension [here](https://github.com/phaedrus1992/pi/releases) and unzip it. This Chrome extension needs to access the unpacked directory when the plugin runs, so don't delete it.
2. In Chrome, navigate to the [⠇ -> More Tools -> Extensions](chrome://extensions) menu.
3. Click the "Developer mode" button.
4. Click the "Load unpacked extension..." button and select the folder where you unpacked the zip file.
5. Make sure "Enabled" is checked on the extension.

Version History
===============

0.3
---

* New emoji for especially good deals. (including an option for configuring the threshold for "Great")
* Spacing/layout fix for icon on first display.
* "Detailed" view which will show the icon + gain/loss numbers directly in the PredictIt view.
* Support for calculating negative risk from "Yes" purchases. (You must enable this in the options.)

0.2.1
-----

* Fix a memory leak in the refresh code that would cause PredictIt pages to slow down over time.

0.2
---
* Automatically re-calculate (refresh) every X seconds.
* Display "❓" if there are too few markets to calculate negative risk.
* Add an icon for the extension.
* Add "Options" in the extension page to make the maximum market price and refresh interval configurable.

0.1
---

Initial Release


Usage
=====

Browse to any linked Market page on PredictIt.  You will see one of three markers appear next to the "refresh" button:

* ❓ = Too few markets to calculate negative risk.
* ❌ = Bad Bet (there is no potential to make money by buying all shares)
* 😐 = Mixed Bet (it is possible to gain or lose money depending on the outcome)
* ✅ = Good Bet (no matter the outcome, you should make money)
* 🤑 = Great Bet (based on a configurable threshold)

Hover your mouse over the icon to see the potential gain or loss.

Disclaimer
==========

The information provided by this extension is for informational purposes only.  It should not be considered legal or financial advice.  You should consult with an attorney or other professional to determine what may be best for your individual needs.

This extension does not make any guarantee or other promise as to any results that may be obtained from using its content. No one should make any investment decision without first consulting his or her own financial advisor and conducting his or her own research and due diligence. To the maximum extent permitted by law, we disclaim any and all liability in the event any information, commentary, analysis, opinions, advice and/or recommendations prove to be inaccurate, incomplete or unreliable, or result in any investment or other losses.

Content contained on or made available through the extension is not intended to and does not constitute legal advice or investment advice and no attorney-client relationship is formed. Your use of the information provided by the extension is at your own risk.

Using this extension may be considered against PredictIt's terms of use, so you are on your own, buddy. ¯\\\_($)\_/¯

If it breaks in half, you get to keep both halves.
