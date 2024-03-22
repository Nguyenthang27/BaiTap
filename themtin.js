import './styles.css'; // Import CSS file
// themtin.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ReplyForm() {
    const [postId, setPostId] = useState('');
    const [title, setTitle] = useState('');
    const [order, setOrder] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Xử lý dữ liệu ở đây, ví dụ: gửi dữ liệu đi hoặc xử lý dữ liệu ở phía client

        // Sau khi xử lý xong, reset form
        setPostId('');
        setTitle('');
        setOrder('');
        setContent('');
    };

    const handleReset = () => {
        setPostId('');
        setTitle('');
        setOrder('');
        setContent('');
    };

    return (
        <div className="container">
            <h2>Phiếu trả lời thêm tin</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="postId">Mã tin:</label>
                <input type="text" id="postId" value={postId} onChange={(e) => setPostId(e.target.value)} required />

                <label htmlFor="title">Tiêu đề:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                <label htmlFor="order">Thứ tự:</label>
                <input type="text" id="order" value={order} onChange={(e) => setOrder(e.target.value)} required />

                <label htmlFor="content">Nội dung:</label>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>

                <button type="submit">Thêm Tin</button>
                <button type="button" onClick={handleReset}>Nhập Lại</button>
            </form>
        </div>
    );
}

ReactDOM.render(<ReplyForm />, document.getElementById('root'));

