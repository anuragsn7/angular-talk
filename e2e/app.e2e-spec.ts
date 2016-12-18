import { AngularTalkPage } from './app.po';

describe('angular-talk App', function() {
  let page: AngularTalkPage;

  beforeEach(() => {
    page = new AngularTalkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
