import {render, screen} from '@testing-library/react';
import {FormContext} from '../../../App';
import {Result} from './Result';

const jsonExample = '{\n' +
  '      "title": "Personal Data",\n' +
  '      "items": [\n' +
  '        {\n' +
  '          "label": "Input number label",\n' +
  '          "type": "number"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Input text label",\n' +
  '          "type": "text"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Textarea label",\n' +
  '          "type": "textarea"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Checkbox label",\n' +
  '          "type": "checkbox"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Date label",\n' +
  '          "type": "date"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Radio label",\n' +
  '          "type": "radio",\n' +
  '          "name": "test-name"\n' +
  '        }\n' +
  '      ],\n' +
  '      "buttons": [\n' +
  '        {\n' +
  '          "text": "Submit",\n' +
  '          "color": "green"\n' +
  '        },\n' +
  '        {\n' +
  '          "text": "Cancel",\n' +
  '          "color": "#FFF"\n' +
  '        },\n' +
  '        {\n' +
  '          "text": "Apply",\n' +
  '          "color": "4366745857955745"\n' +
  '        },\n' +
  '        {\n' +
  '          "text": "Next"\n' +
  '        }\n' +
  '      ]\n' +
  '    }';

const jsonExampleNoCorrectControlTypes = '{\n' +
  '      "title": "Personal Data",\n' +
  '      "items": [\n' +
  '        {\n' +
  '          "label": "Input number label",\n' +
  '          "type": "number3"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Input text label",\n' +
  '          "type": "text3"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Textarea label",\n' +
  '          "type": "textarea3"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Checkbox label",\n' +
  '          "type": "checkbox3"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Date label",\n' +
  '          "type": "date3"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Radio label",\n' +
  '          "type": "radio3",\n' +
  '          "name": "test-name"\n' +
  '        }\n' +
  '      ],\n' +
  '      "buttons": [\n' +
  '        {\n' +
  '          "text": "Submit",\n' +
  '          "color": "green"\n' +
  '        },\n' +
  '        {\n' +
  '          "text": "Cancel",\n' +
  '          "color": "#FFF"\n' +
  '        },\n' +
  '        {\n' +
  '          "text": "Apply",\n' +
  '          "color": "4366745857955745"\n' +
  '        },\n' +
  '        {\n' +
  '          "text": "Next"\n' +
  '        }\n' +
  '      ]\n' +
  '    }';

describe('Result', () => {
  it('should show notification if there is no json', () => {
    render(<FormContext.Provider value={['', jest.fn()]}>
      <Result id="result" />
    </FormContext.Provider>);
    expect(screen.getByText('Add json to see a result here')).toBeInTheDocument();
  });

  it('should render', async () => {
    render(<FormContext.Provider value={[jsonExample, jest.fn()]}>
      <Result id="result" />
    </FormContext.Provider>);
    expect(screen.getByText('Personal Data')).toBeInTheDocument();
    const numberInput = screen.getByLabelText('Input number label') as HTMLInputElement;
    expect(screen.getByText('Input number label')).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
    expect(numberInput.type).toBe('number');

    const textInput = screen.getByLabelText('Input text label') as HTMLInputElement;
    expect(screen.getByText('Input text label')).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(textInput.type).toBe('text');

    expect(screen.getByText('Textarea label')).toBeInTheDocument();
    expect(screen.getByLabelText('Textarea label')).toBeInTheDocument();

    const checkboxInput = screen.getByLabelText('Checkbox label') as HTMLInputElement;
    expect(screen.getByText('Checkbox label')).toBeInTheDocument();
    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput.type).toBe('checkbox');

    const dateInput = screen.getByLabelText('Date label') as HTMLInputElement;
    expect(screen.getByText('Date label')).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(dateInput.type).toBe('datetime-local');

    const radioInput = screen.getByLabelText('Radio label') as HTMLInputElement;
    expect(screen.getByText('Radio label')).toBeInTheDocument();
    expect(radioInput).toBeInTheDocument();
    expect(radioInput.type).toBe('radio');
    expect(radioInput.name).toBe('test-name');

    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('Submit').style.backgroundColor).toBe('green');
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Cancel').style.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(screen.getByText('Apply')).toBeInTheDocument();
    expect(screen.queryByText('Apply')?.style.backgroundColor).toBeFalsy();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.queryByText('Next')?.style.backgroundColor).toBeFalsy();
  });

  it('should not render controls if there are no correct controls', () => {
    render(<FormContext.Provider value={[jsonExampleNoCorrectControlTypes, jest.fn()]}>
      <Result id="result" />
    </FormContext.Provider>);
    expect(screen.queryByText('Date label')).not.toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
