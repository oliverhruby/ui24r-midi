import { AngularElectronPage } from "./app.po";
import { browser, element, by } from "protractor";

describe("angular-electron App", () => {
  let page: AngularElectronPage;

  beforeEach(() => {
    page = new AngularElectronPage();
  });

  it("should show the widgets on the home page", () => {
    page.navigateTo("/");
    // TODO: write a test
    // expect(element(by.css('app-home h1')).getText()).toMatch('App works !');
  });
});
