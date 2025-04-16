import { useState } from 'react';
import DATA from '../../data.js';

function useTravelData() {
    const [value, setValue] = useState(DATA);

    return [value, setValue];
}

export default useTravelData;