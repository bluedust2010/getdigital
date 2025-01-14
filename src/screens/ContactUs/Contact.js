import axios from 'axios';
import React, { useRef, useState } from 'react';
import './Contact.css'; // Assuming the styled CSS provided earlier

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState('qry');
    const qryRef = useRef();
    const qteRef = useRef();

    const setSelectedForm = (txt) => {
        setSelected(txt);
    };

    const formSendClick = (e) => {
        e.preventDefault();

        let data = {
            re: selected,
            name: name,
            email: email,
            subject: subject,
            query: query
        };
        const headers = {
            'Content-type': 'application/x-www-form-urlencoded',
        };
        axios.post('/api/contact', data, { headers: headers })
            .then(res => {
                if (res.status === 200) {
                    let txt = selected === 'qry' ? 'Your query has been sent!' : 'Your quote request has been sent!';
                    alert(txt);
                } else {
                    alert('There was an issue submitting your request, please try again later.');
                }
            }).catch(err => {
                alert('There was an issue submitting your request, please try again later.');
            });
    };

    return (
        <main className='contact-main'>
            <h1>Contact Us</h1>
            <div className='contact-forms'>
            <ul>
                    <li
                        onClick={() => { setSelectedForm('qry') }}
                        className={selected === 'qry' ? 'active' : ''}
                    >
                        Submit a Query
                    </li>
                    <li
                        onClick={() => { setSelectedForm('qte') }}
                        className={selected === 'qte' ? 'active' : ''}
                    >
                        Request a Quote
                    </li>
                </ul>
                <div className='contact-form-sections'>
                    {selected === 'qry' && (
                        <form className='contact-query' onSubmit={formSendClick}>
                            <div className='contact-form-group'>
                                <label className='contact-form-label'>Name</label>
                                <input className='contact-form-input' value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className='contact-form-group'>
                                <label className='contact-form-label'>Email</label>
                                <input className='contact-form-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='contact-form-group'>
                                <label className='contact-form-label'>Subject</label>
                                <input className='contact-form-input' value={subject} onChange={(e) => setSubject(e.target.value)} required />
                            </div>
                            <div className='contact-form-group'>
                                <label className='contact-form-label'>Query</label>
                                <textarea className='contact-form-input' value={query} onChange={(e) => setQuery(e.target.value)} required></textarea>
                            </div>
                            <div className='contact-form-button-container'>
                                <button type="submit" ref={qryRef} className='contact-form-button'>Send Query</button>
                            </div>
                        </form>
                    )}

                    {selected === 'qte' && (
                        <form className='contact-query' onSubmit={formSendClick}>
                            <div className='contact-form-group'>
                                <label className='contact-form-label'>Name</label>
                                <input className='contact-form-input' value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className='contact-form-group'>
                                <label className='contact-form-label'>Email</label>
                                <input className='contact-form-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className='contact-form-group'>
                                <label className='contact-form-label'>Website Type</label>
                                <select className='contact-form-input' value={subject} onChange={(e) => setSubject(e.target.value)} required>
                                    <option value='Basic'>Basic Website</option>
                                    <option value='ECommerce'>ECommerce Website</option>
                                </select>
                            </div>
                            <div className='contact-form-group'>
                                <label className='contact-form-label'>Tell us about your business</label>
                                <textarea className='contact-form-input' value={query} onChange={(e) => setQuery(e.target.value)} required></textarea>
                            </div>
                            <div className='contact-form-button-container'>
                                <button type="submit" ref={qteRef} className='contact-form-button'>Request a Quote</button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <div className='split-section'>
                <div className='contact-lhs'>
                    <h2>Trading Hours</h2>
                    <ul>
                        <li>Monday: 08:00-17:00</li>
                        <li>Tuesday: 08:00-17:00</li>
                        <li>Wednesday: 08:00-17:00</li>
                        <li>Thursday: 08:00-17:00</li>
                        <li>Friday: 08:00-17:00</li>
                        <li>Saturday: 09:00-13:00</li>
                        <li>Sunday: Closed</li>
                    </ul>
                    <p>We offer support all days of the way from opening time until 21:00</p>
                </div>
                <div className='contact-rhs'>
                    <h2>Want to contact us</h2>
                    <p>Message or call us @ +27 76 489 5654</p>
                    <p>Email us <a href='mailto:admin@getdigital.co.za'>admin@getdigital.co.za</a></p>
                    <p>Or you could leave a query <a href='#forms'>Above</a></p>
                </div>
            </div>
        </main>
    );
}
