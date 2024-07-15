import Form from './Form.jsx';
import CV from './CV.jsx';
import { useState } from 'react';

const defaultData = null;

function Content() {
    const [data, setData] = useState(defaultData);
    return (
        <main>
            <Form />
            <CV data={data}/>
        </main>
    );
}

export default Content;