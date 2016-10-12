import { EfoutsGithubIoPage } from './app.po';

describe('efouts-github-io App', function() {
  let page: EfoutsGithubIoPage;

  beforeEach(() => {
    page = new EfoutsGithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
