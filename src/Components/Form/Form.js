import React from "react";
import "./Form.scss";

import styled from "styled-components";

import Button from "./../UI/Button/Button";

const ResponsiveFormBtn = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
    padding: 0 3vw 3vh 3vw;
  }
`;

const Form = () => {
  return (
    <React.Fragment>
      <form>
        <div className="form-content">
          <div className="sectionOne">
            <div className="inputs-section-one">
              <input placeholder="Nombre"></input>
              <input placeholder="Email"></input>
              <input placeholder="Provincia"></input>
              <input placeholder="Tel'efono"></input>
            </div>
            <div className="checkbox-container">
              <input type="checkbox"></input>
              <label>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum consequat venenatis consequat. Nullam est enim,
                gravida et mauris sed, posuere mattis enim. Vestibulum convallis
                diam non aliquam pretium. Nam quis commodo eros. Phasellus
                posuere tellus vitae dui congue, nec commodo odio placerat.
                Vivamus tempor nulla et ex ullamcorper congue. Proin at ipsum
                est. Nulla ac est eu libero viverra
              </label>
            </div>
            <ResponsiveFormBtn>
              <Button></Button>
            </ResponsiveFormBtn>
          </div>
          <div className="sectionTwo">
            <div className="section-two-content">
              <div>
                <label>hello</label>
                <input placeholder="edad"></input>
              </div>
              <div>
                <label> hello 2</label>
                <input placeholder="edad"></input>
              </div>
            </div>
            <Button></Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
