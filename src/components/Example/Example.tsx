import {useState, useRef, useEffect} from 'react';
import {Button} from '../Buttons/Button';

const jsonExample = '{\n' +
  '      "title": "Personal Data",\n' +
  '      "items": [\n' +
  '        {\n' +
  '          "label": "Number field label",\n' +
  '          "type": "number"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Text field label",\n' +
  '          "type": "text"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "TextareaGroup field label",\n' +
  '          "type": "textarea"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "JavaScript",\n' +
  '          "type": "checkbox",\n' +
  '          "checked": true,\n' +
  '          "value": "javascript",\n' +
  '          "name": "javascript"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "C++",\n' +
  '          "type": "checkbox",\n' +
  '          "value": "c_plus",\n' +
  '          "name": "c_plus"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Date field label",\n' +
  '          "type": "date"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Apple",\n' +
  '          "type": "radio",\n' +
  '          "value": "apple",\n' +
  '          "name": "fruit"\n' +
  '        },\n' +
  '        {\n' +
  '          "label": "Banana",\n' +
  '          "type": "radio",\n' +
  '          "value": "banana",\n' +
  '          "name": "fruit"\n' +
  '        }\n' +
  '      ],\n' +
  '      "buttons": [\n' +
  '        {\n' +
  '          "text": "Submit",\n' +
  '          "color": "#3C77A4"\n' +
  '        },\n' +
  '        {\n' +
  '          "text": "Cancel",\n' +
  '          "color": "#FFB552"\n' +
  '        },\n' +
  '        {\n' +
  '          "text": "Apply",\n' +
  '          "color": "#FF8352"\n' +
  '        },\n' +
  '        {\n' +
  '          "text": "Next"\n' +
  '        }\n' +
  '      ]\n' +
  '    }';

const btnText = 'Copy an example json';
const btnCopiedText = 'Copied!';

export const Example = (): JSX.Element | null => {
  const [text, setText] = useState<string>(btnText);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(jsonExample)
      .then(() => {
        setText(btnCopiedText);
        timerRef.current = setTimeout(() => setText(btnText), 2500);
      });
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current as ReturnType<typeof setTimeout>);
  }, []);

  return (
    <>
      <Button onClick={handleCopyClick}>{text}</Button>
    </>
  );
};
