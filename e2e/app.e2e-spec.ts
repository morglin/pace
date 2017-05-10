import { PacePage } from './app.po';

describe('pace App', function() {
  let page: PacePage;

  beforeEach(() => {
    page = new PacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
