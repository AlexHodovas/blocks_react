import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import App, { initialWidth, initialHeight, cellSize } from "../App";

configure({ adapter: new Adapter() });

it("full App renders correctly", () => {
  const tree = renderer
    .create(
      <App
        initialWidth={initialWidth}
        initialHeight={initialHeight}
        cellSize={cellSize}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("buttons", () => {
  const onClick = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App onClick={onClick} />);
  });

  it("addRowButton works", () => {
    const button = wrapper.find("#addRowButton").at(0);
    button.simulate("click");

    expect(
      wrapper
        .find("#addRowButton")
        .at(0)
        .props().tableHeight
    ).toEqual(5);
  });

  it("addColumnButton works", () => {
    const button = wrapper.find("#addColumnButton").at(0);
    button.simulate("click");

    expect(
      wrapper
        .find("#addColumnButton")
        .at(0)
        .props().tableWidth
    ).toEqual(5);
  });

  it("deleteRowButton works", () => {
    const button = wrapper.find("#deleteRowButton").at(0);
    button.simulate("click");

    expect(
      wrapper
        .find("#deleteRowButton")
        .at(0)
        .props().tableHeight
    ).toEqual(3);
  });

  it("deleteColumnButton works", () => {
    const button = wrapper.find("#deleteColumnButton").at(0);
    button.simulate("click");

    expect(
      wrapper
        .find("#deleteColumnButton")
        .at(0)
        .props().tableWidth
    ).toEqual(3);
  });

  it("last row not removed", () => {
    const button = wrapper.find("#deleteRowButton").at(0);
    button.simulate("click");
    button.simulate("click");
    button.simulate("click");

    expect(
      wrapper
        .find("#deleteRowButton")
        .at(0)
        .props()
        .isOnlyOneRow()
    ).toEqual(true);

    expect(
      wrapper
        .find("#deleteRowButton")
        .at(0)
        .props().isDeleteRowButtonHidden
    ).toEqual(true);
  });

  it("last column not removed", () => {
    const button = wrapper.find("#deleteColumnButton").at(0);
    button.simulate("click");
    button.simulate("click");
    button.simulate("click");

    expect(
      wrapper
        .find("#deleteColumnButton")
        .at(0)
        .props()
        .isOnlyOneColumn()
    ).toEqual(true);

    expect(
      wrapper
        .find("#deleteColumnButton")
        .at(0)
        .props().isDeleteColumnButtonHidden
    ).toEqual(true);
  });
});
