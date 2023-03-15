import React, { useState } from 'react';
import AdminHeader from './AdminHeader';


export default function AddReciept() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState([]);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = e.target.elements.comment.value;
    setComments([...comments, newComment]);
    e.target.elements.comment.value = '';
  };


  return (
    <div>
      <label htmlFor="image-upload">Add Image:</label>
      <input type="file" id="image-upload" onChange={handleImageChange} />

      {image && <img src={image} alt="Selected Image" />}

      <label htmlFor="description-input">Add Description:</label>
      <input
        type="text"
        id="description-input"
        value={description}
        onChange={handleDescriptionChange}
      />

      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="comment-input">Add Comment:</label>
        <input type="text" id="comment-input" name="comment" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
