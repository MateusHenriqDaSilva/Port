import React from 'react';

interface IWhatsAppButton {
    text: string
}

const WhatsAppButton = (props: IWhatsAppButton) => {
    const handleClick = () => {
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(props.text)}`;
        window.open(url);
    };
    return <button onClick={handleClick}>Compartilhar no WhatsApp</button>;
};

export default WhatsAppButton;