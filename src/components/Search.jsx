import { Image, Microphone, Paperclip } from 'phosphor-react';
import React, { useRef, useState } from 'react';

const Search = ({ handleSearchSubmit }) => {
    const [query, setQuery] = useState('');
    const fileInputRef = useRef(null);
    const imageInputRef = useRef(null);
    const audioInputRef = useRef(null);

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    const handleImageClick = () => {
        imageInputRef.current.click();
    };

    const handleAudioClick = () => {
        audioInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log('Selected file:', file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearchSubmit(true); // Start loading

        // Simulate a delay to show the spinner
        setTimeout(() => {
            // Implement your POST call here
            fetch('your-api-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                handleSearchSubmit(false); 
            })
            .catch((error) => {
                console.error('Error:', error);
                handleSearchSubmit(false); 
            });
        }, 2000);
    };

    return (
        <div className='search-styled'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input autoFocus type="text" placeholder='Enter a prompt..' 
                        value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                    <Paperclip weight='bold' size={25} onClick={handleFileClick} />
                    <Image weight='bold' size={25} onClick={handleImageClick} />
                    <Microphone weight='bold' size={25} onClick={handleAudioClick} />
                    <input type="file" ref={fileInputRef} style={{ display: 'none' }} 
                        onChange={handleFileChange}
                    />
                    <input
                        type="file" accept="image/*" ref={imageInputRef}
                        style={{ display: 'none' }} onChange={handleFileChange}
                    />
                    <input
                        type="file" accept="audio/*" ref={audioInputRef}
                        style={{ display: 'none' }} onChange={handleFileChange}
                    />
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Search;
