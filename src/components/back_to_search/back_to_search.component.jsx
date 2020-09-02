import React from 'react';

const BackToSearch = ({ setMoviePreview }) => (
    <button className="back-to-search" onClick={() => setMoviePreview(null)} title="Back to Search">
    </button>
);

export default BackToSearch;
