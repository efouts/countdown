import { CountdownPage } from './app.po';

describe('Countdown App', function() {
  let page: CountdownPage;

  beforeEach(() => {
    page = new CountdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
