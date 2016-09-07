describe('Partnerships Page', function () {

    //Multi-use Variables
    var couponRadio = element(by.id('newRider'));
    var fundraiseRadio = element(by.id('fundraise'));
    var companyRadio = element(by.id('lyftForWork'));
    var loginButton = element(by.id('start'));

    //Pre-test Method
    beforeEach(function () {
        isAngularSite(true);
        browser.get('/partnerships')
    });


    //Tests
    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Partnerships - Lyft');
    });

    it('should have couponPartner as the first radio button', function () {
        couponRadio.click();
        var partnershipType = element.all(by.model('partnership.partnerType'));

        expect(partnershipType.get(0).getAttribute('value')).toEqual('couponPartner');


    });

    it('should select the fundraise radio button', function () {
        element(by.id('fundraise')).getAttribute('checked').then(function (value) {
            expect(value).not.toBeTruthy();
        });
        fundraiseRadio.click();
        element(by.id('fundraise')).getAttribute('checked').then(function (value) {
            expect(value).toBe('true');
        });
        couponRadio.click();
        element(by.id('fundraise')).getAttribute('checked').then(function (value) {
            expect(value).not.toBeTruthy();
        });

    });

    it('should have a disabled button before selecting a radio, then enabled after', function () {
        expect(loginButton.isEnabled()).toBe(false);
        couponRadio.click();
        expect(loginButton.isEnabled()).toBe(true);
    });

    it('should open modal when login button clicked when 2nd radio button selected', function () {
        loginButton.click();
        var modal = element(by.css('.lyft-auth-modal-embed'));
        expect(modal.isPresent()).toBe(false);
        couponRadio.click();
        loginButton.click();
        expect(modal.isPresent()).toBe(true);
    });

    it('should navigate to mobility solutions when login button clicked when 3rd radio button selected', function () {
        companyRadio.click();
        loginButton.click();
        //turn off waiting for angular (since the new page doesn't use angular)
        browser.ignoreSynchronization = true;
        expect(browser.getCurrentUrl()).toBe('http://get.lyft.com/mobility-solutions/');
        //turn angular waiting back on
        browser.ignoreSynchronization = false;
    });

});
