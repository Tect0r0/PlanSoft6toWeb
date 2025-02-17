import React from 'react'
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './ResponsiveAppBar';

export default function Header() {
    return (
        <div>
            <header className="app-header">
                <ResponsiveAppBar />
            </header>
        </div>
    );
}
