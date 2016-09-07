# Protractor-Tests-Lyft
A test suite for Lyft using Protractor

## Specifications
- Framework: Jasmine
- Selenium Address: http://localhost:4444/wd/hub
- Browsers: Chrome

## Before Tests
- Loads [Partnerships - Lyft](https://www.lyft.com/partnerships)

## Global Variables
- `var couponRadio = element(by.id('newRider'));`
- `var fundraiseRadio = element(by.id('fundraise'));`
- `var companyRadio = element(by.id('lyftForWork'));`
- `var loginButton = element(by.id('start'));`


## Current Tests
- Title should be 'Partnerships - Lyft'
- First radio button should have a value of 'couponPartner'
- Clicking on fundraiseRadio should check the fundraise radio button
- The purple login button should be disabled until a radio is selected
- If the third radio button is selected, the login button should navigate to [Mobility Solutions](http://get.lyft.com/mobility-solutions/')