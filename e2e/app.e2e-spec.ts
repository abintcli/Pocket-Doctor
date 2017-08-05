import { PocketDocterPage } from './app.po';

describe('pocket-docter App', () => {
  let page: PocketDocterPage;

  beforeEach(() => {
    page = new PocketDocterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
