import { CourseListsAngularAppPage } from './app.po';

describe('course-lists-angular-app App', () => {
  let page: CourseListsAngularAppPage;

  beforeEach(() => {
    page = new CourseListsAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
