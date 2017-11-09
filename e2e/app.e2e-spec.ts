import { AppiredPage } from './app.po';

describe('appired App', function() {
  let page: AppiredPage;

  beforeEach(() => {
    page = new AppiredPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
