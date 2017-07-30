import { PictueSearchPage } from './app.po';

describe('pictue-search App', () => {
  let page: PictueSearchPage;

  beforeEach(() => {
    page = new PictueSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
