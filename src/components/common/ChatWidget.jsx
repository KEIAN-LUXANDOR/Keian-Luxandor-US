import { useEffect, useRef, useState } from 'react';
import { useUI } from '../../context/UIContext';
import Icon from './Icon';
import './ChatWidget.css';

// Floating "Chat with an Expert" launcher + demo panel.
// Replace the canned reply with your live-chat provider's SDK.
export default function ChatWidget() {
  const { overlay, open, close } = useUI();
  const isOpen = overlay === 'chat';
  const [messages, setMessages] = useState([
    { from: 'agent', text: 'Hello! I’m your jewelry specialist. How can I help you today?' },
  ]);
  const [draft, setDraft] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, isOpen]);

  const send = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setMessages((m) => [...m, { from: 'me', text: draft.trim() }]);
    setDraft('');
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: 'agent', text: 'Thank you! A specialist will join this chat in a moment. Meanwhile, you can also book an appointment.' },
      ]);
    }, 700);
  };

  return (
    <>
      {!isOpen && (
        <button className="chat-launcher" onClick={() => open('chat')}>
          <Icon name="chat" size={18} />
          <span>Chat with an Expert</span>
        </button>
      )}
      {isOpen && (
        <section className="chat" role="dialog" aria-label="Chat with an expert">
          <header className="chat__head">
            <div>
              <p className="serif chat__title">Chat with an Expert</p>
              <p className="chat__status"><span /> Specialists online</p>
            </div>
            <button onClick={close} aria-label="Close chat"><Icon name="close" /></button>
          </header>
          <div className="chat__list" ref={listRef}>
            {messages.map((m, i) => (
              <p key={i} className={`chat__msg chat__msg--${m.from}`}>{m.text}</p>
            ))}
          </div>
          <form className="chat__form" onSubmit={send}>
            <input className="input" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type your message…" aria-label="Message" />
            <button className="btn" type="submit">Send</button>
          </form>
        </section>
      )}
    </>
  );
}