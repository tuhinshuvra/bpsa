import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Bangladesh Police Service Association`;
    }, [title])
};

export default useTitle;