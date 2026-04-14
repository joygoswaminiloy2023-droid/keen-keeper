
import InstallTimelineProvider from '@/app/context/InstallTimelineProvider';
import React from 'react';

const  Provider = ({children}) => {
    return (
    <InstallTimelineProvider>
        {children}
    </InstallTimelineProvider>
    );
};

export default  Provider;