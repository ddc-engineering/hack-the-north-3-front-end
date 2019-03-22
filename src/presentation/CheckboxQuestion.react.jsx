import React from "react";

export default class CheckboxQuestion extends React.Component {
  renderInputs(options) {
    return options.reduce((returnData, singleOption) => {
      returnData.push(
        <div class="govuk-checkboxes__item">
          <input
            class="govuk-checkboxes__input"
            id={singleOption.id}
            name={singleOption.name}
            type="checkbox"
            value={singleOption.value}
          />
          <label
            class="govuk-label govuk-checkboxes__label"
            for={singleOption.id}
          >
            {singleOption.text}
          </label>
        </div>
      );
      return returnData;
    }, []);
  }
  render() {
    const { data } = this.props;
    return (
      <fieldset class="govuk-fieldset" aria-describedby="waste-hint">
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
          <h1 class="govuk-fieldset__heading">{data.title}</h1>
        </legend>
        <span id="waste-hint" class="govuk-hint">
          Select all that apply.
        </span>
        <div class="govuk-checkboxes">{this.renderInputs(data.options)}</div>
      </fieldset>
    );
  }
}
