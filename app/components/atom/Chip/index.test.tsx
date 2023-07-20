import React from "react";
import renderer from "react-test-renderer";
import Chip from "./index";

test('Chip renders correctly', () => {
    const tree = renderer.create(<Chip title={"Hiren"}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
