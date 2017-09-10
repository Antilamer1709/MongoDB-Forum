import { ForumPage } from './app.po';

describe('forum App', () => {
  let page: ForumPage;

  beforeEach(() => {
    page = new ForumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
