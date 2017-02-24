import { FreelancerAppPage } from './app.po';

describe('freelancer-app App', () => {
  let page: FreelancerAppPage;

  beforeEach(() => {
    page = new FreelancerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
