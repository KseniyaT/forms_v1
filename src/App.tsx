import React, {useState, createContext, Dispatch, SetStateAction} from 'react';
import './styles/normalize.css';
import './styles/base.css';
import styles from './App.scss';
import {Tabs, TabsDataType} from './components/Tabs/Tabs';
import {Panel} from './components/Panel/Panel';
import {Config} from './components/TabContent/ConfigTab/Config';
import {Result} from './components/TabContent/ResultTab/Result';
import {Instructions} from './components/Instructions/Instructions';

const tabsData: TabsDataType[] = [
  {
    id: 'config',
    title: 'Config',
  },
  {
    id: 'result',
    title: 'Result',
  },
];

export const FormContext = createContext<(string | Dispatch<SetStateAction<string>>)[]>([]);

// eslint-disable-next-line require-jsdoc
function App() {
  const [formContext, setFormContext] = useState<string>('');
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <Panel>
          <FormContext.Provider value={[formContext, setFormContext]}>
            <Tabs tabsData={tabsData}>
              <Config id={tabsData[0].id} />
              <Result id={tabsData[1].id} />
            </Tabs>
          </FormContext.Provider>
        </Panel>
        <Panel>
          <Instructions />
        </Panel>
      </main>
    </div>
  );
}

export default App;
