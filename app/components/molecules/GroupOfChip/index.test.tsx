import React from "react";
import renderer from "react-test-renderer"
import GroupOfChip from "./index";


test('GroupOfChips renders correctly', () => {
    const tree = renderer.create(<GroupOfChip chips={["Hiren", "Work"]}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
