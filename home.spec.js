describe('Home Page', function(){

    beforeEach(function(){
        jasmine.addMatchers(customMatchers);

        isAngularSite(false);
        browser.driver.get(browser.baseUrl);
    });

    it('should have a title', function(){
        expect(browser.driver.getTitle()).toEqual('A ride whenever you need one - Lyft');
    });

    fit('should change Explore button color on mouseover', function(){
        var exploreButton = $('button[data-reactid="30"]');
        expect(exploreButton.isPresent()).toBe(true);
        expect(exploreButton).toHaveClass('icon-chevron-down');
        browser.driver.actions().mouseMove(exploreButton).perform();
        browser.driver.sleep(500);
        expect(exploreButton.getCssValue('color')).toBe('rgba(255, 0, 191, 1)');
        expect(exploreButton).toHaveClass('icon-chevron-up');
    });

    it('should navigate to partnerships page', function(){
        var exploreButton = $('button[data-reactid="30"]');
        browser.driver.actions().mouseMove(exploreButton).perform();
        browser.driver.sleep(500);
        var partnershipsLink = $('a[data-reactid="61"]');
        partnershipsLink.click();
        expect(browser.driver.getCurrentUrl()).toBe('https://www.lyft.com/partnerships');
    });

    it('should be goofy', function(){
        expect({
            hyuk: 'this is fun'
        }).not.toBeGoofy();

        expect({
            hyuk: 'gawrsh is fun'
        }).toBeGoofy(' is fun');
    });

});