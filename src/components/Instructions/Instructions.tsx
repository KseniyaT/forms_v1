import styles from './Instructions.scss';

const ItemObject = `{
  "label": "Label",
  "type": "textarea",
  "[other_element_key]": "value"
}`;

const buttonObject = `{
  "text": "apply",
  "color": "#FF8352",
  "[other_element_key]": "value"
}`;

export const Instructions = () => {
  return (
    <section>
      <article className={styles.article}>
        <h2>How to use:</h2>
        <p>In the <b>&quot;Config&quot;</b> tab in the textarea, enter the correct JSON, at the first nesting level of which:</p>
        <ol type="A">
          <li><p>the property <b>&quot;title&quot;</b>, the value of which will be taken for the title of the form</p></li>
          <li>
            <p>the property <b>&quot;items&quot;</b> must be an array of objects:</p>
            <pre className={styles.pre}><code>{ItemObject}</code></pre>
            <p>&quot;label&quot; - the label of the control;</p>
            <p>&quot;type&quot; - the control type;</p>
            <p>&quot;other_element_key&quot; - other properties of the control, for example, name, value, checked, etc.</p>
            <p>Possible types of the controls:</p>
            <ul>
              <li>number</li>
              <li>text</li>
              <li>textarea</li>
              <li>checkbox</li>
              <li>date</li>
              <li>radio</li>
            </ul>
          </li>
          <li>
            <p>the property <b>&quot;buttons&quot;</b> must be an array of objects containing data about buttons:</p>
            <pre className={styles.pre}><code>{buttonObject}</code></pre>
            <p>&quot;text&quot; - the text that will be displayed on the button;</p>
            <p>&quot;color&quot; - the color in any acceptable format</p>
            <p>&quot;other_element_key&quot; - other button properties</p>
          </li>
        </ol>
        <p>
          If your JSON is invalid, the textarea border will turn <span className={styles.mark}>orange</span> and
          you will see <span className={styles.mark}><i>&quot;Invalid Json&quot;</i></span> at the bottom of the textarea.
        </p>
        <p>
          You may copy <b>AN EXISTING DEMO JSON</b> by clicking on the <i>&quot;Copy an example json&quot;</i> button,
          and then paste the code from the clipboard into textarea.
        </p>
        <p>If your ID is valid, then in the <b>&quot;Result&quot;</b> tab you will see the result.</p>
      </article>
    </section>
  );
};
