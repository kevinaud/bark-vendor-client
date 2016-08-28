import { Rc5Page } from './app.po';

describe('rc5 App', function() {
  let page: Rc5Page;

  beforeEach(() => {
    page = new Rc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
